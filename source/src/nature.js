// Trees (leaf cards near, blobs far), conifers, bushes and wind-blown grass around the walker.
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { decode } from "./decode.js";
import { rng } from "./textures.js";
import { sway, uniforms } from "./env.js";

// crossed leaf cards inside a unit sphere; normals point away from the centre so the crown shades like a ball
function cardsGeometry(n, seed) {
  const r = rng(seed), pos = [], nor = [], uv = [], idx = [], v = new THREE.Vector3(), q = new THREE.Quaternion(), e = new THREE.Euler();
  for (let i = 0; i < n; i++) {
    let cx, cy, cz; do { cx = r() * 2 - 1; cy = r() * 2 - 1; cz = r() * 2 - 1; } while (cx * cx + cy * cy + cz * cz > 1);
    const c = new THREE.Vector3(cx, cy, cz).multiplyScalar(0.45), s = 0.55 + r() * 0.25;
    q.setFromEuler(e.set(r() * 6.3, r() * 6.3, r() * 6.3));
    const b = pos.length / 3;
    for (const [x, y, u, w] of [[-1, -1, 0, 0], [1, -1, 1, 0], [1, 1, 1, 1], [-1, 1, 0, 1]]) {
      v.set(x * s, y * s, 0).applyQuaternion(q).add(c);
      pos.push(v.x, v.y, v.z); v.normalize(); nor.push(v.x, v.y, v.z); uv.push(u, w);
    }
    idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3)); g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

function coniferGeometry() { // three stacked cones, height 0..1, radius 1
  const tiers = [[1, 0.5, 0.25], [0.74, 0.45, 0.52], [0.46, 0.42, 0.78]].map(([r, h, y]) => new THREE.ConeGeometry(r, h, 8).translate(0, y, 0));
  return mergeGeometries(tiers).toNonIndexed();
}

// two-sided foliage keeps its outward normals on the back side too (three flips them, which lights leaves from below)
export function foliage(mat) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => { if (prev) prev(sh, r); sh.fragmentShader = sh.fragmentShader.replace("#include <normal_fragment_begin>", "#include <normal_fragment_begin>\nnormal = normalize(vNormal);"); };
  return mat;
}

function chunked(n, at, size = 200) { // group instance ids by 200 m cells
  const map = new Map();
  for (let k = 0; k < n; k++) { const [x, z] = at(k), key = Math.floor(x / size) + "," + Math.floor(z / size); (map.get(key) || map.set(key, []).get(key)).push(k); }
  return [...map.values()];
}

export function buildTrees(city, leafTex, autumnTex) {
  const T = decode(city.trees, Int16Array), n = T.length / 6, hmin = city.hmin;
  const get = (k) => ({ x: T[k * 6] / 10, z: T[k * 6 + 1] / 10, g: hmin + T[k * 6 + 2] / 10, h: T[k * 6 + 3] / 10, r: T[k * 6 + 4] / 10, con: T[k * 6 + 5] });
  const cards = cardsGeometry(16, 7), blob = new THREE.IcosahedronGeometry(1, 0), cone = coniferGeometry();
  const trunk = new THREE.CylinderGeometry(0.6, 1, 1, 5, 1, true).translate(0, 0.5, 0);
  const leafMat = sway(foliage(new THREE.MeshLambertMaterial({ map: leafTex, alphaTest: 0.45, side: THREE.DoubleSide })), 0.07, 1);
  const fallMat = sway(foliage(new THREE.MeshLambertMaterial({ map: autumnTex, alphaTest: 0.45, side: THREE.DoubleSide })), 0.07, 1);
  const blobMat = sway(new THREE.MeshLambertMaterial({ flatShading: true }), 0.05, 1), coneMat = sway(new THREE.MeshLambertMaterial({ flatShading: true }), 0.035, 0);
  const barkMat = new THREE.MeshLambertMaterial({ color: 0x55443a });
  // share of broadleaf trees already turned, by the real month (Sep starts, Oct-Nov peak)
  const month = new Date().getMonth(), fall = [0, 0, 0, 0, 0, 0, 0, 0.05, 0.2, 0.55, 0.8, 0][month]; // Dec-Mar: bare (leafTex is twigs then)
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
  const chunks = [];
  for (const ids of chunked(n, (k) => [T[k * 6] / 10, T[k * 6 + 1] / 10])) {
    const broad = ids.filter((k) => !T[k * 6 + 5]), con = ids.filter((k) => T[k * 6 + 5]);
    const turned = (k) => (Math.abs(Math.sin(k * 4.1414) * 9631.7) % 1) < fall;
    const green = broad.filter((k) => !turned(k)), gold = broad.filter(turned);
    const near = new THREE.InstancedMesh(cards, leafMat, Math.max(green.length, 1)), nearA = new THREE.InstancedMesh(cards, fallMat, Math.max(gold.length, 1)), far = new THREE.InstancedMesh(blob, blobMat, Math.max(broad.length, 1));
    const cones = new THREE.InstancedMesh(cone, coneMat, Math.max(con.length, 1)), trunks = new THREE.InstancedMesh(trunk, barkMat, ids.length);
    near.count = green.length; nearA.count = gold.length; far.count = broad.length; cones.count = con.length;
    let gi = 0, ai = 0;
    broad.forEach((k, i) => {
      const t = get(k), rnd = Math.abs(Math.sin(k * 12.9898) * 43758.5453) % 1, ch = Math.max(t.h * 0.62, 2.5), au = turned(k);
      q.setFromAxisAngle(up, rnd * 6.283);
      m.compose(p.set(t.x, t.g + t.h - ch / 2, t.z), q, s.set(t.r * (0.85 + rnd * 0.3), ch / 2, t.r));
      far.setMatrixAt(i, m);
      if (au) { nearA.setMatrixAt(ai, m); nearA.setColorAt(ai++, col.setHSL(0.08 + rnd * 0.06, 0.3, 0.75 + ((rnd * 7) % 1) * 0.2)); }
      else { near.setMatrixAt(gi, m); near.setColorAt(gi++, col.setHSL(0.18 + rnd * 0.12, 0.3 + rnd * 0.2, 0.62 + ((rnd * 7) % 1) * 0.22)); }
      far.setColorAt(i, au ? col.setHSL(0.07 + rnd * 0.06, 0.55, 0.32) : col.setHSL(0.23 + rnd * 0.08, 0.4, 0.17 + ((rnd * 7) % 1) * 0.07));
    });
    con.forEach((k, i) => {
      const t = get(k), rnd = Math.abs(Math.sin(k * 78.233) * 43758.5453) % 1;
      q.setFromAxisAngle(up, rnd * 6.283);
      cones.setMatrixAt(i, m.compose(p.set(t.x, t.g + t.h * 0.12, t.z), q, s.set(t.r * 0.75, t.h * 0.9, t.r * 0.75)));
      cones.setColorAt(i, col.setHSL(0.31 + rnd * 0.06, 0.32 + rnd * 0.1, 0.13 + rnd * 0.06));
    });
    ids.forEach((k, i) => {
      const t = get(k), ch = t.con ? t.h * 0.85 : Math.max(t.h * 0.62, 2.5), th = Math.max(t.h - ch * 0.75, 1), tw = 0.12 + t.h * 0.012;
      trunks.setMatrixAt(i, m.compose(p.set(t.x, t.g - 0.3, t.z), q.identity(), s.set(tw, th + 0.3, tw)));
    });
    for (const im of [near, nearA, far, cones, trunks]) { im.computeBoundingSphere(); im.receiveShadow = true; im.castShadow = im !== far; }
    chunks.push({ near, nearA, far, cones, trunks, center: trunks.boundingSphere.center.clone() });
  }
  const NEAR = 420, FAR = 1500;
  const update = (cam) => {
    for (const c of chunks) {
      const d = c.center.distanceTo(cam);
      c.near.visible = c.nearA.visible = c.trunks.visible = d < NEAR; c.far.visible = d >= NEAR && d < FAR; c.cones.visible = d < FAR;
    }
  };
  return { meshes: chunks.flatMap((c) => [c.near, c.nearA, c.far, c.cones, c.trunks]), update, count: n };
}

export function buildBushes(city, leafTex) {
  const B = decode(city.bushes, Int16Array), n = B.length / 5, hmin = city.hmin;
  const cards = cardsGeometry(10, 13), core = new THREE.IcosahedronGeometry(0.7, 0);
  const leafMat = sway(foliage(new THREE.MeshLambertMaterial({ map: leafTex, alphaTest: 0.45, side: THREE.DoubleSide })), 0.06, 1), coreMat = new THREE.MeshLambertMaterial({ color: 0x24321c, flatShading: true });
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
  const chunks = [];
  for (const ids of chunked(n, (k) => [B[k * 5] / 10, B[k * 5 + 1] / 10])) {
    const a = new THREE.InstancedMesh(cards, leafMat, ids.length), b = new THREE.InstancedMesh(core, coreMat, ids.length);
    ids.forEach((k, i) => {
      const x = B[k * 5] / 10, z = B[k * 5 + 1] / 10, g = hmin + B[k * 5 + 2] / 10, h = B[k * 5 + 3] / 10, r = B[k * 5 + 4] / 10, rnd = Math.abs(Math.sin(k * 3.7) * 9137.13) % 1;
      q.setFromAxisAngle(up, rnd * 6.283);
      m.compose(p.set(x, g + h * 0.45, z), q, s.set(r, h * 0.55, r * (0.8 + rnd * 0.4)));
      a.setMatrixAt(i, m); b.setMatrixAt(i, m);
      a.setColorAt(i, col.setHSL(0.2 + rnd * 0.1, 0.35, 0.55 + rnd * 0.2));
    });
    for (const im of [a, b]) { im.computeBoundingSphere(); im.receiveShadow = true; im.castShadow = im === a; }
    chunks.push({ a, b, center: a.boundingSphere.center.clone() });
  }
  return { meshes: chunks.flatMap((c) => [c.a, c.b]), update: (cam) => { for (const c of chunks) c.a.visible = c.b.visible = c.center.distanceTo(cam) < 520; }, count: n };
}

// Grass tufts in a 34 m circle around the walker, wherever the photo is green and nothing is built or paved.
export function buildGrass(city, ortho, splat, groundAt) {
  const [W, N, E, S] = city.bounds, MW = Math.round(E - W), MH = Math.round(S - N);
  const c = document.createElement("canvas"); c.width = MW; c.height = MH;
  const g = c.getContext("2d", { willReadFrequently: true });
  g.drawImage(ortho, 0, 0, MW, MH);
  const photo = g.getImageData(0, 0, MW, MH).data;
  g.drawImage(splat, 0, 0, MW, MH);
  const sp = g.getImageData(0, 0, MW, MH).data;
  const veg = new Uint8Array(MW * MH);
  for (let i = 0; i < veg.length; i++) {
    const r = photo[i * 4], gg = photo[i * 4 + 1], b = photo[i * 4 + 2], exg = (2 * gg - r - b) / (r + gg + b + 1);
    veg[i] = Math.max(0, Math.min(255, (exg - 0.05) * 1800)) * (1 - sp[i * 4] / 255) * (1 - sp[i * 4 + 2] / 255);
  }

  // one tuft: 9 blades as thin triangles, darker at the root
  const r = rng(9), pos = [], colA = [];
  for (let i = 0; i < 9; i++) {
    const a = r() * 6.3, d = r() * 0.22, x = Math.cos(a) * d, z = Math.sin(a) * d, h = 0.22 + r() * 0.3, lean = (r() - 0.5) * 0.25, la = r() * 6.3, w = 0.025;
    pos.push(x - Math.cos(la) * w, 0, z - Math.sin(la) * w, x + Math.cos(la) * w, 0, z + Math.sin(la) * w, x + Math.cos(a) * lean, h, z + Math.sin(a) * lean);
    colA.push(0.45, 0.45, 0.45, 0.45, 0.45, 0.45, 1.1, 1.1, 1.1);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute("color", new THREE.Float32BufferAttribute(colA, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(pos.map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
  foliage(mat);
  const leafy = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    leafy(sh, r);
    sh.uniforms.uTime = uniforms.uTime; sh.uniforms.uWind = uniforms.uWind;
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nuniform float uTime; uniform float uWind;").replace("#include <begin_vertex>",
      "#include <begin_vertex>\nfloat ph = uTime * (1.2 + uWind) + instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.23;\ntransformed.x += (sin(ph) * 0.6 + 0.5) * 0.16 * uWind * position.y;\ntransformed.z += cos(ph * 0.8) * 0.08 * uWind * position.y;");
  };
  const MAX = 15000, RAD = 34, mesh = new THREE.InstancedMesh(geo, mat, MAX);
  mesh.receiveShadow = true; mesh.frustumCulled = false; mesh.count = 0;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
  const lawn = new THREE.Color(0x6f8f3a);
  const hash = (a, b, k) => { let h = Math.imul(a, 374761393) + Math.imul(b, 668265263) + Math.imul(k, 2246822519); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
  let cx = Infinity, cz = Infinity;
  const fill = (px, pz) => {
    let n = 0;
    for (let iz = Math.floor(pz - RAD); iz <= pz + RAD && n < MAX; iz++) for (let ix = Math.floor(px - RAD); ix <= px + RAD && n < MAX; ix++) {
      const d = Math.hypot(ix + 0.5 - px, iz + 0.5 - pz);
      if (d > RAD) continue;
      const i = Math.floor(ix - W), j = Math.floor(iz - N);
      if (i < 0 || j < 0 || i >= MW || j >= MH) continue;
      const v = veg[j * MW + i] / 255;
      for (let k = 0; k < 3 && n < MAX; k++) {
        if (hash(ix, iz, k) > v * 0.9) continue;
        const x = ix + hash(iz, ix, k + 5), z = iz + hash(ix + 3, iz, k + 9), sc = (0.7 + hash(ix, k, iz) * 0.6) * Math.min(1, (RAD - d) / 6);
        mesh.setMatrixAt(n, m.compose(p.set(x, groundAt(x, z), z), q.setFromAxisAngle(up, hash(k, ix, iz) * 6.3), s.set(sc, sc, sc)));
        const o = (j * MW + i) * 4;
        mesh.setColorAt(n, col.setRGB(photo[o] / 255, photo[o + 1] / 255, photo[o + 2] / 255, THREE.SRGBColorSpace).lerp(lawn, 0.35).multiplyScalar(1.5));
        n++;
      }
    }
    mesh.count = n; mesh.instanceMatrix.needsUpdate = true; if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  };
  const update = (cam) => {
    if (Math.hypot(cam.x - cx, cam.z - cz) > 4) { cx = cam.x; cz = cam.z; fill(cx, cz); }
  };
  return { mesh, update };
}
