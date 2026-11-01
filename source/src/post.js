// Rendering upgrades. Every quality but low: the sky dome is baked into a reflection map every couple of seconds, so paint,
// glass, wet roads and water mirror the real sky (and the sun), and the sun casts cascaded shadows (several shadow maps:
// sharp next to you, still there far away; three maps of 1024 px over 300 m on medium, 2048 px over 700 m on high). The single shadow map they replace never
// reached the ground (toggling it changed nothing on screen). High adds ambient occlusion, bloom on lamps and lit windows, and SMAA.
const CASCADES = { medium: [300, 1024], high: [700, 2048] }; // reach in metres, map size: both change without recompiling a shader
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { GTAOPass } from "three/addons/postprocessing/GTAOPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { SMAAPass } from "three/addons/postprocessing/SMAAPass.js";
import { CSM } from "three/addons/csm/CSM.js";

export function createPost({ renderer, world, camera }) {
  const scene = world.scene, env = world.env, sun = env.sun;

  // sky reflections
  const pmrem = new THREE.PMREMGenerator(renderer), skyScene = new THREE.Scene();
  skyScene.add(new THREE.Mesh(env.sky.geometry, env.sky.material)); // the same dome and uniforms, centred on the cube camera
  let envRT = null, envT = 0;
  const refreshEnv = () => { const rt = pmrem.fromScene(skyScene, 0, 1, 6000); scene.environment = rt.texture; envRT?.dispose(); envRT = rt; };

  // high: composer with AO (half resolution), bloom and SMAA; OutputPass applies the renderer's tone mapping
  const composer = new EffectComposer(renderer);
  const ao = new GTAOPass(scene, camera, 2, 2, undefined, { radius: 1.2, distanceExponent: 2, thickness: 1.5, scale: 1.1, samples: 16, distanceFallOff: 1, screenSpaceRadius: false });
  const aoSize = ao.setSize.bind(ao);
  ao.setSize = (w, h) => aoSize(Math.max(1, w >> 1), Math.max(1, h >> 1));
  const hideMore = ao.overrideVisibility.bind(ao); // leaves (cut-out cards), glass, smoke, sprites and the sky dome don't occlude
  ao.overrideVisibility = () => { hideMore(); scene.traverse((o) => { const m = o.material; if (o.isSprite || (m && !Array.isArray(m) && (m.transparent || m.alphaTest > 0 || m.depthWrite === false))) o.visible = false; }); };
  const bloom = new UnrealBloomPass(new THREE.Vector2(2, 2), 0.35, 0.45, 1.1); // only what's brighter than white glows (lamps 2.5, lit windows); not sun glints on paint
  composer.addPass(new RenderPass(scene, camera)); composer.addPass(ao); composer.addPass(bloom); composer.addPass(new OutputPass()); composer.addPass(new SMAAPass(2, 2));
  const size = new THREE.Vector2(), last = new THREE.Vector2();
  let lastPr = 0;

  // cascaded shadows. CSM needs every lit material set up (otherwise its three lights would all add up on it),
  // and it replaces onBeforeCompile, so the town's own shader patches are chained back on and undone when leaving high.
  let csm = null;
  const saved = new Map(); // material -> [onBeforeCompile, own customProgramCacheKey or null]
  const wrap = (m) => {
    if (saved.has(m) || !(m.isMeshLambertMaterial || m.isMeshStandardMaterial || m.isMeshPhongMaterial)) return;
    const ob = m.onBeforeCompile, own = Object.prototype.hasOwnProperty.call(m, "customProgramCacheKey") ? m.customProgramCacheKey : null, key = m.customProgramCacheKey();
    saved.set(m, [ob, own]);
    csm.setupMaterial(m);
    const theirs = m.onBeforeCompile;
    m.onBeforeCompile = (sh, r) => { theirs(sh, r); ob.call(m, sh, r); };
    m.customProgramCacheKey = () => key + "|csm";
    m.needsUpdate = true;
  };
  const wrapTree = (root) => root.traverse((o) => { if (o.isMesh) for (const m of [].concat(o.material)) wrap(m); }), wrapAll = () => wrapTree(scene);
  scene.addEventListener("childadded", (e) => { if (csm) wrapTree(e.child); }); // before its first frame: a late wrap compiles every new material twice
  // compile every material now, hidden ones too (weapons, flames, the patient...), so nothing stalls the game the first time it shows up
  const warm = () => {
    const hidden = []; scene.traverse((o) => { if (!o.visible && !o.isLight) { hidden.push(o); o.visible = true; } }); // lights stay as they are: they pick the shader variant
    renderer.compile(scene, camera);
    for (const o of hidden) o.visible = false;
  };
  let warmedCsm = null;
  let csmQ = null;
  const fit = (q) => { // reach and map size for a quality; switching medium <-> high must not recompile every material in town
    csmQ = q; csm.maxFar = CASCADES[q][0];
    for (const l of csm.lights) if (l.shadow.mapSize.x !== CASCADES[q][1]) { l.shadow.map?.dispose(); l.shadow.map = null; l.shadow.mapSize.setScalar(CASCADES[q][1]); }
    csm.updateFrustums();
  };
  const csmOn = (q) => {
    csm = new CSM({ camera, parent: scene, cascades: 3, maxFar: CASCADES[q][0], mode: "practical", shadowMapSize: CASCADES[q][1], lightDirection: new THREE.Vector3(0, -1, 0), lightIntensity: 0, lightMargin: 250, lightFar: 2000 });
    csm.fade = true;
    for (const l of csm.lights) { l.shadow.bias = -0.0003; l.shadow.normalBias = 0.5; }
    sun.visible = false; // the cascades take over its light and shadow
    wrapAll(); fit(q);
  };
  const csmOff = () => {
    csm.remove(); csm.dispose(); csm = null; // dispose deletes each material's onBeforeCompile and CSM defines: restore after it
    for (const [m, [ob, own]] of saved) {
      m.onBeforeCompile = ob;
      if (own) m.customProgramCacheKey = own; else delete m.customProgramCacheKey;
      m.needsUpdate = true;
    }
    saved.clear(); sun.visible = true; csmQ = null;
  };

  const render = (dt) => {
    const q = world.quality(), want = CASCADES[q] ? q : null;
    if (q !== "low" && (envT -= dt) <= 0) { envT = 2; refreshEnv(); }
    if (want !== csmQ) { if (!want) csmOff(); else if (csm) fit(want); else csmOn(want); }
    if (warmedCsm !== !!csm) { warmedCsm = !!csm; warm(); } // first frame (behind the start screen) and after shadows switch on or off
    renderer.getSize(size);
    const resized = !size.equals(last); last.copy(size);
    if (csm) {
      if (resized) csm.updateFrustums();
      csm.lightDirection.copy(env.st.lightDir).negate();
      for (const l of csm.lights) { l.intensity = sun.intensity; l.color.copy(sun.color); }
      camera.updateMatrixWorld(); csm.update(); // cascades fit this frame's view
    }
    if (q !== "high") { renderer.render(scene, camera); return; }
    const pr = renderer.getPixelRatio();
    if (resized || pr !== lastPr) { lastPr = pr; composer.setPixelRatio(pr); composer.setSize(size.x, size.y); } // window or quality change only: this reallocates every buffer
    composer.render(dt);
  };
  return { render, composer, active: () => !!csm };
}
