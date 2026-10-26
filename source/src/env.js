// Living environment: game clock with sun and moon, sky colours and stars, weather that drifts between
// clear, cloudy, overcast, rain, thunderstorms, morning fog and (in winter) snow; wind gusts, wet ground, snow cover. Shared uniforms let foliage sway and windows light up.
import * as THREE from "three";

export const uniforms = { uTime: { value: 0 }, uWind: { value: 0.3 }, uNight: { value: 0 }, uWet: { value: 0 }, uSnow: { value: 0 }, uLit: { value: 0.3 }, uSky: { value: new THREE.Color(0xd5e1ea) } };

// sway instanced foliage with the wind; `base` lifts the pivot so the bottom of the shape stays put
// snow settles on surfaces that face up (roofs, car tops); the amount follows uSnow
export function snowy(mat, k = 1) { // k: how much sticks (roads get slush, not a white carpet)
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    sh.uniforms.uSnow = uniforms.uSnow; sh.uniforms.uSnowK = { value: k }; // per material, the shader program is shared
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying float vUp;").replace("#include <beginnormal_vertex>", "#include <beginnormal_vertex>\nvUp = normalize(mat3(modelMatrix) * objectNormal).y;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform float uSnow; uniform float uSnowK; varying float vUp;").replace("#include <color_fragment>", "#include <color_fragment>\ndiffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.92, 0.95), uSnow * uSnowK * smoothstep(0.35, 0.75, vUp));");
  };
  return mat;
}

// physically based surfaces: diffuse light stays with the hemisphere and sun (as on the Lambert materials around them);
// the sky map (scene.environment, see post.js) only adds the mirror-like reflection. Wrap last: it fixes the program cache key.
export function glossy(mat) {
  const prev = mat.onBeforeCompile, key = mat.customProgramCacheKey();
  mat.onBeforeCompile = (sh, r) => { prev.call(mat, sh, r); sh.fragmentShader = sh.fragmentShader.replace("#include <lights_fragment_maps>", "#include <lights_fragment_maps>\niblIrradiance = vec3(0.0);"); };
  mat.customProgramCacheKey = () => key + "|glossy";
  return mat;
}

export function sway(mat, amp, base) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    sh.uniforms.uTime = uniforms.uTime; sh.uniforms.uWind = uniforms.uWind;
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nuniform float uTime; uniform float uWind;").replace("#include <begin_vertex>", `#include <begin_vertex>
      #ifdef USE_INSTANCING
      float wph = uTime * 1.1 + instanceMatrix[3].x * 0.043 + instanceMatrix[3].z * 0.061;
      float wa = uWind * (sin(wph) * 0.6 + sin(wph * 2.3 + 1.7) * 0.25) * ${amp.toFixed(3)} * max(position.y + ${base.toFixed(2)}, 0.0);
      transformed.x += wa; transformed.z += wa * 0.6;
      #endif`);
  };
  return mat;
}

// facade glass reflects the sky by day and some windows glow warm after dusk
export function litWindows(mat) {
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, { uNight: uniforms.uNight, uLit: uniforms.uLit, uSky: uniforms.uSky });
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vWp;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvWp = position;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform float uNight; uniform float uLit; uniform vec3 uSky; varying vec3 vWp;")
      .replace("#include <map_fragment>", `#include <map_fragment>
        float glassMask = clamp((sampledDiffuseColor.b - sampledDiffuseColor.r) * 20.0, 0.0, 1.0) * (1.0 - smoothstep(0.25, 0.45, dot(sampledDiffuseColor.rgb, vec3(0.333))));
        float litMask = step(fract(sin(dot(floor(vMapUv) + floor(vWp.xz * 0.37), vec2(12.9898, 78.233))) * 43758.5453), uLit);
        diffuseColor.rgb = mix(diffuseColor.rgb, uSky * 0.55, glassMask * 0.3 * (1.0 - uNight));`)
      .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance += vec3(1.0, 0.74, 0.4) * glassMask * litMask * uNight * 1.3;");
  };
  return mat;
}

const C = (h) => new THREE.Color(h);
const SKY = { // [top, horizon]
  day: [C(0x3f78b5), C(0xd5e1ea)], overcast: [C(0x7d8894), C(0xbcc5cc)], dusk: [C(0x4a6593), C(0xf0b383)], night: [C(0x070d1d), C(0x1b263b)],
};
const WEATHER = [
  { name: "clear", cloud: 0.2, rain: 0 }, { name: "cloudy", cloud: 0.65, rain: 0 }, { name: "overcast", cloud: 0.9, rain: 0 }, { name: "rain", cloud: 1, rain: 1 },
  { name: "storm", cloud: 1, rain: 1.5, storm: 1 }, { name: "fog", cloud: 0.7, rain: 0, fog: 1 }, { name: "snow", cloud: 0.95, rain: 0, snow: 1, fog: 0.25 },
];
const NAMES = WEATHER.map((w) => w.name);
const NEXT = { clear: ["cloudy", "cloudy", "fog"], cloudy: ["clear", "overcast", "overcast"], overcast: ["cloudy", "rain", "rain", "fog", "snow"], rain: ["overcast", "overcast", "storm"], storm: ["rain"], fog: ["clear", "cloudy"], snow: ["overcast", "snow"] };

function skyDome() {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color() }, horizon: { value: new THREE.Color() }, sun: { value: new THREE.Vector3(0, 1, 0) }, moon: { value: new THREE.Vector3(0, -1, 0) }, uTime: uniforms.uTime, uCloud: { value: 0.3 }, uDay: { value: 1 }, uNight: uniforms.uNight },
    vertexShader: "varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
    fragmentShader: `uniform vec3 top; uniform vec3 horizon; uniform vec3 sun; uniform vec3 moon; uniform float uTime; uniform float uCloud; uniform float uDay; uniform float uNight; varying vec3 vDir;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1,0)), f.x), mix(h(i + vec2(0,1)), h(i + vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { v += a * n(p); p = p * 2.03 + 11.7; a *= 0.5; } return v; }
      void main(){
        vec3 d = normalize(vDir);
        vec3 col = mix(horizon, top, smoothstep(0.0, 0.5, d.y));
        float clear = 1.0 - uCloud;
        float s = max(dot(d, normalize(sun)), 0.0), m = max(dot(d, normalize(moon)), 0.0);
        col += vec3(1.0, 0.9, 0.72) * (pow(s, 900.0) * 6.0 + pow(s, 12.0) * 0.22) * clear * uDay;
        col += vec3(0.85, 0.9, 1.0) * (smoothstep(0.9993, 0.9996, m) * 1.4 + pow(m, 30.0) * 0.05) * uNight * clear;
        if (d.y > 0.0) {
          vec2 sp = floor(d.xz / (d.y + 0.25) * 300.0);
          col += vec3(step(0.9975, h(sp)) * uNight * clear * smoothstep(0.05, 0.3, d.y) * 0.9);
          vec2 p = d.xz / (d.y + 0.08) * 1.4 + vec2(uTime * 0.004, uTime * 0.0015);
          float c = smoothstep(0.62 - 0.4 * uCloud, 0.86 - 0.3 * uCloud, fbm(p)) * smoothstep(0.02, 0.22, d.y);
          vec3 lit = mix(vec3(0.07, 0.08, 0.11), mix(vec3(1.0), vec3(0.62, 0.65, 0.7), uCloud), uDay);
          vec3 cloud = mix(lit * 0.78, lit, smoothstep(0.5, 0.9, fbm(p + 0.6)));
          col = mix(col, cloud, c * (0.75 + 0.2 * uCloud));
        }
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const m = new THREE.Mesh(new THREE.SphereGeometry(5000, 32, 16), mat);
  m.renderOrder = -1; m.frustumCulled = false;
  return m;
}

function snowFlakes() { // slow flakes drifting around the camera
  const N = 7000, pos = new Float32Array(N * 3), geo = new THREE.BufferGeometry();
  for (let i = 0; i < N; i++) pos.set([(Math.random() - 0.5) * 60, Math.random() * 30, (Math.random() - 0.5) * 60], i * 3);
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  const mesh = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xf4f6fa, size: 0.09, transparent: true, opacity: 0, depthWrite: false }));
  mesh.frustumCulled = false;
  return mesh;
}

function rainLines() {
  const N = 9000, pos = new Float32Array(N * 6), geo = new THREE.BufferGeometry();
  for (let i = 0; i < N; i++) { const x = (Math.random() - 0.5) * 50, y = Math.random() * 25, z = (Math.random() - 0.5) * 50; pos.set([x, y, z, x, y + 1.1, z], i * 6); }
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  // mid grey reads against both the sky and the walls
  const mesh = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: 0x8d99a6, transparent: true, opacity: 0, depthWrite: false }));
  mesh.frustumCulled = false;
  return mesh;
}

export function createEnv(scene) {
  const sky = skyDome(), rain = rainLines(), snow = snowFlakes();
  const hemi = new THREE.HemisphereLight(0xe6effa, 0x6a654c, 2.1), sun = new THREE.DirectionalLight(0xfff0d6, 2.5);
  Object.assign(sun.shadow.camera, { left: -140, right: 140, top: 140, bottom: -140, near: 1, far: 900 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.6;
  scene.fog = new THREE.FogExp2(0xd5e1ea, 0.0006);
  scene.add(sky, rain, snow, hemi, sun, sun.target);

  const now = new Date();
  // the town keeps your local time
  const month = now.getMonth(), winter = [11, 0, 1].includes(month) ? 1 : [10, 2].includes(month) ? 0.5 : 0; // the real season
  const st = { hour: now.getHours() + now.getMinutes() / 60, day: Math.floor((now - now.getTimezoneOffset() * 60000) / 864e5), speed: 1 / 60, w: 0, cloud: 0.2, rain: 0, snow: 0, fog: 0, storm: 0, cover: 0, flash: 0, wet: 0, timer: 150, queue: [], sunDir: new THREE.Vector3(), lightDir: new THREE.Vector3(), month, winter };
  // the coming weather is rolled ahead, so the phone can show a forecast
  const roll = (from, hourAt) => {
    let opts = NEXT[NAMES[from]].filter((n) => (n === "snow" ? Math.random() < winter : n === "storm" ? winter < 1 : true));
    const morning = ((hourAt % 24) + 24) % 24 > 3.5 && ((hourAt % 24) + 24) % 24 < 9.5;
    if (!morning) opts = opts.filter((n) => n !== "fog" || Math.random() < 0.15) ; // fog belongs to mornings
    if (!opts.length) opts = ["cloudy"];
    let n = opts[Math.floor(Math.random() * opts.length)];
    if (n === "rain" && Math.random() < winter * 0.8) n = "snow"; // cold months: it snows instead
    return { w: NAMES.indexOf(n), dur: 120 + Math.random() * 240 };
  };
  const refill = () => { while (st.queue.length < 4) { const prev = st.queue.length ? st.queue[st.queue.length - 1] : { w: st.w }; const at = st.hour + (st.timer + st.queue.reduce((a, q) => a + q.dur, 0)) / 60; st.queue.push(roll(prev.w, at)); } };
  const top = new THREE.Color(), hor = new THREE.Color(), tmp = new THREE.Color(), tmp2 = new THREE.Color();
  const sunCol = new THREE.Color(), daySky = C(0xe6effa), nightSky = C(0x22304a);
  const setWeather = (i) => { st.w = (i + WEATHER.length) % WEATHER.length; st.timer = 120 + Math.random() * 240; st.queue = []; refill(); };
  const advance = () => { const q = st.queue.shift(); st.w = q.w; st.timer = q.dur; refill(); };
  refill();
  let strikeT = 6, thunders = [];
  let rainDrops = 0;

  const update = (dt, cam, t) => {
    uniforms.uTime.value = t;
    st.hour += dt * st.speed; // 1 real second = 1 game minute
    if (st.hour >= 24) { st.hour -= 24; st.day++; }
    if ((st.timer -= dt) < 0) advance();
    const W = WEATHER[st.w], k = Math.min(1, dt * 0.04);
    st.cloud += (W.cloud - st.cloud) * k; st.rain += (W.rain * (st.cloud > 0.85 ? 1 : 0) - st.rain) * k * 1.5;
    st.snow += ((W.snow || 0) * (st.cloud > 0.8 ? 1 : 0) - st.snow) * k * 1.5; st.fog += ((W.fog || 0) - st.fog) * k; st.storm += ((W.storm || 0) - st.storm) * k * 2;
    st.wet += (Math.min(1, st.rain) - st.wet) * Math.min(1, dt * (st.rain > st.wet ? 0.05 : 0.008)); // roads dry slowly
    st.cover = Math.min(1, Math.max(0, st.cover + (st.snow > 0.3 ? dt * 0.006 * st.snow : -dt * (winter ? 0.0015 : 0.006)))); // snow settles, then melts
    // thunderstorm: lightning flashes, thunder follows after the sound has travelled
    st.flash = Math.max(0, st.flash - dt * 6);
    if (st.storm > 0.5 && (strikeT -= dt) < 0) {
      strikeT = 4 + Math.random() * 12; st.flash = 1;
      const km = 0.4 + Math.random() * 3.5; thunders.push({ t: km / 0.343, p: Math.max(0.25, 1 - km / 4.5) });
      setTimeout(() => (st.flash = Math.max(st.flash, 0.8)), 90); // the second pulse of a strike
    }
    thunders = thunders.filter((th) => ((th.t -= dt) > 0 ? true : (api.onThunder?.(th.p), false)));

    // sun path: east at 6 h, south at noon, west at 18 h; the moon is opposite
    const el = THREE.MathUtils.degToRad(52) * Math.sin((Math.PI * (st.hour - 6)) / 12), az = (Math.PI / 2) * ((12 - st.hour) / 6);
    st.sunDir.set(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az));
    const se = st.sunDir.y, day = THREE.MathUtils.smoothstep(se, -0.12, 0.2), night = 1 - day, dusk = Math.max(0, 1 - Math.abs(se - 0.02) / 0.22);
    const lightUp = se > -0.02;
    st.lightDir.copy(st.sunDir).multiplyScalar(lightUp ? 1 : -1);
    if (st.lightDir.y < 0.15) st.lightDir.y = 0.15; // keep shadows from stretching to infinity at the horizon
    st.lightDir.normalize();

    top.copy(SKY.night[0]).lerp(SKY.day[0], day); hor.copy(SKY.night[1]).lerp(SKY.day[1], day);
    top.lerp(SKY.dusk[0], dusk * 0.6); hor.lerp(SKY.dusk[1], dusk * 0.75);
    tmp.copy(SKY.overcast[0]).multiplyScalar(0.15 + 0.85 * day); tmp2.copy(SKY.overcast[1]).multiplyScalar(0.12 + 0.88 * day);
    top.lerp(tmp, st.cloud * 0.85); hor.lerp(tmp2, st.cloud * 0.7);
    tmp.setRGB(0.72, 0.74, 0.76).multiplyScalar(0.12 + 0.88 * day); hor.lerp(tmp, st.fog * 0.9); top.lerp(tmp, st.fog * 0.6); // fog greys the sky out
    if (st.storm > 0.1) { top.multiplyScalar(1 - 0.35 * st.storm); hor.multiplyScalar(1 - 0.3 * st.storm); }
    if (st.flash > 0) { tmp.setRGB(0.85, 0.88, 1.0); top.lerp(tmp, st.flash * 0.7); hor.lerp(tmp, st.flash * 0.6); }
    const su = sky.material.uniforms;
    su.top.value.copy(top); su.horizon.value.copy(hor); su.sun.value.copy(st.sunDir); su.moon.value.copy(st.sunDir).negate();
    su.uCloud.value = st.cloud; su.uDay.value = day;
    scene.fog.color.copy(hor); uniforms.uSky.value.copy(hor);
    scene.fog.density = 0.00055 + st.cloud * 0.0005 + st.rain * 0.0016 + st.snow * 0.0022 + st.fog * 0.011;

    sunCol.setHex(0xffb37a).lerp(C(0xfff0d6), THREE.MathUtils.smoothstep(se, 0.0, 0.35));
    sun.color.copy(lightUp ? sunCol : C(0x9fb4e0));
    sun.intensity = lightUp ? 3.6 * THREE.MathUtils.smoothstep(se, -0.02, 0.12) * (1 - 0.72 * st.cloud) : 0.55 * THREE.MathUtils.smoothstep(-se, 0.02, 0.15) * (1 - 0.8 * st.cloud); // moonlight
    sun.intensity *= 1 - 0.65 * st.fog - 0.3 * st.storm;
    hemi.intensity = (0.5 + 0.9 * day) * (1 - 0.25 * st.cloud) * (1 - 0.2 * st.storm) + st.flash * 3.5;
    hemi.color.copy(nightSky).lerp(daySky, day);
    sky.position.copy(cam);

    uniforms.uNight.value = THREE.MathUtils.smoothstep(-se, -0.06, 0.1);
    const h = st.hour; uniforms.uLit.value = h > 17 || h < 6 ? (h > 17 && h < 23 ? 0.45 : 0.12) : 0.2;
    uniforms.uWet.value = st.wet; uniforms.uSnow.value = st.cover;
    uniforms.uWind.value = 0.25 + 0.5 * st.cloud + 0.4 * Math.min(1, st.rain) + 0.6 * st.storm - 0.4 * st.fog + Math.sin(t * 0.7) * Math.sin(t * 0.23 + 1) * 0.25;

    // rain: drops fall around the camera and wrap; slanted by the wind
    rain.material.opacity = 0.6 * st.rain; rain.visible = st.rain > 0.02;
    if (rain.visible) {
      const a = rain.geometry.attributes.position.array, fall = 11 * dt, slant = uniforms.uWind.value * 0.5;
      rainDrops = Math.round(9000 * Math.min(1, st.rain * 1.2));
      rain.material.opacity = Math.min(0.75, 0.6 * st.rain);
      for (let i = 0; i < 9000; i++) {
        const o = i * 6;
        let y = a[o + 1] - fall;
        const far = y > cam.y + 40 || y < cam.y - 40 || Math.abs(a[o] - cam.x) > 40 || Math.abs(a[o + 2] - cam.z) > 40; // first frames, teleports, flying
        if (y < cam.y - 4 || far || i >= rainDrops) { a[o] = cam.x + (Math.random() - 0.5) * 50; a[o + 2] = cam.z + (Math.random() - 0.5) * 50; y = i >= rainDrops ? -1e4 : far ? cam.y - 4 + Math.random() * 28 : cam.y + 18 + Math.random() * 6; }
        a[o + 1] = y; a[o + 3] = a[o] + slant * 0.3; a[o + 4] = y + 1.1; a[o + 5] = a[o + 2];
      }
      rain.geometry.attributes.position.needsUpdate = true;
    }
    // snow: flakes drift down slowly and wrap around the camera
    snow.material.opacity = Math.min(0.9, st.snow * 1.1); snow.visible = st.snow > 0.02;
    if (snow.visible) {
      const a = snow.geometry.attributes.position.array, n = Math.round(7000 * Math.min(1, st.snow * 1.2)), wv = uniforms.uWind.value;
      for (let i = 0; i < 7000; i++) {
        const o = i * 3;
        if (i >= n) { a[o + 1] = -1e4; continue; }
        a[o] += (Math.sin(t * 0.8 + i) * 0.4 + wv * 0.6) * dt; a[o + 1] -= (0.9 + (i % 7) * 0.08) * dt; a[o + 2] += Math.cos(t * 0.6 + i * 1.3) * 0.3 * dt;
        if (a[o + 1] < cam.y - 6 || Math.abs(a[o] - cam.x) > 30 || Math.abs(a[o + 2] - cam.z) > 30 || a[o + 1] > cam.y + 30) { a[o] = cam.x + (Math.random() - 0.5) * 60; a[o + 2] = cam.z + (Math.random() - 0.5) * 60; a[o + 1] = a[o + 1] < -1e3 || a[o + 1] > cam.y + 30 ? cam.y - 6 + Math.random() * 30 : cam.y + 18 + Math.random() * 8; }
      }
      snow.geometry.attributes.position.needsUpdate = true;
    }
  };
  const clock = () => `${String(Math.floor(st.hour)).padStart(2, "0")}:${String(Math.floor((st.hour % 1) * 60)).padStart(2, "0")}`;
  const fmtH = (h) => `${String(Math.floor(((h % 24) + 24) % 24)).padStart(2, "0")}:00`;
  const forecast = () => { let t = st.hour + st.timer / 60; return st.queue.slice(0, 3).map((q) => { const r = { at: fmtH(Math.round(t)), name: NAMES[q.w] }; t += q.dur / 60; return r; }); };
  const api = { sun, hemi, sky, update, st, clock, forecast, onThunder: null, weather: () => WEATHER[st.w].name, nextWeather: () => setWeather(st.w + 1), skipHour: () => { st.hour += 1; if (st.hour >= 24) { st.hour -= 24; st.day++; } } };
  return api;
}
