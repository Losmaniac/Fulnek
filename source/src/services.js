// Emergency services: a police car outside the real police station, a fire engine and an ambulance outside SDH Fulnek
// (the real volunteer fire station; the ambulance's spot there is a game placement, the data has no ambulance base).
// L switches blue lights and siren, traffic ahead pulls over, and a dispatcher sends calls to real RÚIAN addresses while on duty.
import * as THREE from "three";
import { carGeometries } from "./cars.js";
import { buildSmoke } from "./smoke.js";
import { uniforms, glossy } from "./env.js";

const DRIVE = new Set(["primary", "secondary", "tertiary", "residential", "unclassified", "service", "primary_link", "secondary_link"]);
// half: half the length, w: half the width (the collision capsule); cam: chase-camera distance; eye: bonnet-camera height
export const KINDS = {
  police: { name: "Police car", line: "158", maxV: 30, acc: 5.6, half: 2.2, w: 0.9, cam: 7, eye: 1.3 },
  fire: { name: "Fire engine", line: "150", maxV: 19, acc: 3, half: 4.3, w: 1.25, cam: 11, eye: 2.4 },
  ambulance: { name: "Ambulance", line: "155", maxV: 25, acc: 4.2, half: 2.95, w: 1.05, cam: 8.5, eye: 2 },
};
const UP = new THREE.Vector3(0, 1, 0), ZA = new THREE.Vector3(0, 0, 1), XA = new THREE.Vector3(1, 0, 0);

function model(kind) { // local +x is the front, y = 0 the road
  const g = new THREE.Group(), lam = (c, r = 0.4) => glossy(new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: 0.25 })), dark = lam(0x18181a, 0.8), glass = lam(0x1d252c, 0.06), white = lam(0xf2f2ef), beacons = [];
  const box = (sx, sy, sz, x, y, z, m) => { const b = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), m); b.position.set(x, y, z); b.castShadow = b.receiveShadow = true; g.add(b); return b; };
  const wheels = (xs, r, zw) => { for (const x of xs) for (const z of [zw, -zw]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.28, 14).rotateX(Math.PI / 2), dark); w.position.set(x, r, z); w.castShadow = true; g.add(w); } };
  const lamps = (x, y, zw) => { const m = new THREE.MeshBasicMaterial({ color: 0xf6f3e6 }); for (const s of [-1, 1]) box(0.06, 0.16, 0.34, x, y, s * zw, m); };
  const bar = (x, y, len) => { box(0.3, 0.06, len, x, y - 0.06, 0, dark); for (const s of [-1, 1]) { const m = new THREE.MeshBasicMaterial({ color: 0x0a1440 }); box(0.26, 0.13, len / 2 - 0.05, x, y + 0.03, (s * len) / 4, m); beacons.push(m); } };
  if (kind === "police") { // silver with the blue and yellow-green bands of Policie ČR
    const geo = carGeometries();
    g.add(new THREE.Mesh(geo.body, lam(0xe4e8ec, 0.3)), new THREE.Mesh(geo.detail, glossy(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.15, metalness: 0.2, polygonOffset: true, polygonOffsetFactor: -1 }))), new THREE.Mesh(geo.lamps, new THREE.MeshBasicMaterial({ vertexColors: true })));
    g.children.forEach((m) => (m.castShadow = m.receiveShadow = true));
    box(4.3, 0.15, 1.79, 0, 0.66, 0, lam(0x1f4fa8)); box(4.3, 0.1, 1.79, 0, 0.53, 0, lam(0xc6e01e));
    bar(-0.55, 1.52, 1.2);
  } else if (kind === "fire") { // red engine with a white band and a ladder on the roof
    const red = lam(0xb5141b);
    box(8.4, 0.4, 2.2, 0, 0.75, 0, dark); box(2.1, 2.3, 2.5, 3.2, 1.75, 0, red); box(6.3, 2.6, 2.5, -1.05, 1.9, 0, red);
    box(0.06, 0.9, 2.2, 4.26, 2.3, 0, glass); box(1.3, 0.75, 2.52, 3.35, 2.35, 0, glass);
    box(6.3, 0.2, 2.54, -1.05, 1.35, 0, white); box(2.12, 0.2, 2.54, 3.2, 1.35, 0, white);
    box(6.1, 0.14, 0.95, -0.9, 3.3, 0, lam(0xb9bcc0)); for (let i = 0; i < 12; i++) box(0.06, 0.06, 0.95, -3.8 + i * 0.52, 3.4, 0, lam(0xb9bcc0));
    wheels([2.9, -1.3, -2.7], 0.52, 1.05); lamps(4.27, 1.0, 0.95);
    bar(3.2, 3.0, 1.7);
  } else { // ambulance: signal yellow with a green band
    const yel = lam(0xf0d81a);
    box(5.6, 0.35, 1.9, 0, 0.55, 0, dark); box(4.3, 2.25, 2.1, -0.8, 1.68, 0, yel); box(1.6, 1.25, 2.0, 2.15, 1.15, 0, yel);
    box(0.14, 0.62, 1.9, 1.42, 2.05, 0, glass); box(0.06, 0.4, 1.7, 2.96, 1.35, 0, glass);
    box(4.32, 0.3, 2.13, -0.8, 1.2, 0, lam(0x2e9b3a)); box(0.05, 0.6, 0.2, -2.96, 2.0, 0, lam(0xd12a2a));
    wheels([1.95, -1.9], 0.38, 0.92); lamps(2.96, 0.95, 0.75);
    bar(1.0, 2.88, 1.6);
  }
  return { group: g, beacons };
}

// the three vehicles, parked beside the street in front of their stations; their collision capsules join the traffic's
export function createFleet({ city, scene, groundAt, agentPos, parked }) {
  const roads = city.roads.filter((r) => DRIVE.has(r.k));
  const curb = (p, along, w) => { // between the carriageway and the building, or at the kerb when the building is close
    let b = null, bd = Infinity;
    for (const r of roads) for (let i = 0; i + 1 < r.p.length; i++) {
      const [ax, az] = r.p[i], [bx, bz] = r.p[i + 1], vx = bx - ax, vz = bz - az, L = Math.hypot(vx, vz) || 1, t = Math.max(0, Math.min(1, ((p.x - ax) * vx + (p.z - az) * vz) / (L * L)));
      const qx = ax + vx * t, qz = az + vz * t, d = Math.hypot(p.x - qx, p.z - qz);
      if (d < bd) { bd = d; b = { qx, qz, ux: vx / L, uz: vz / L, hw: r.w / 2 }; }
    }
    const nx = (p.x - b.qx) / (bd || 1), nz = (p.z - b.qz) / (bd || 1), off = Math.max(b.hw * 0.5, Math.min(b.hw + w + 0.3, bd - w - 0.6));
    return { x: b.qx + nx * off + b.ux * along, z: b.qz + nz * off + b.uz * along, yaw: Math.atan2(-b.uz, b.ux) };
  };
  const q = new THREE.Quaternion(), qa = new THREE.Quaternion(), list = [];
  const add = (kind, place, along) => {
    if (!place) return;
    const K = KINDS[kind], s = curb(place, along, K.w), { group, beacons } = model(kind);
    const v = { kind, ...K, group, beacons, siren: false, x: s.x, z: s.z, yaw: s.yaw, home: { x: s.x, z: s.z, n: place.n }, cap: [s.x, s.z, K.w, 1, 0, K.half - K.w, 0] };
    v.pose = (x, z, yaw, pitch, roll = 0) => {
      const fx = Math.cos(yaw), fz = -Math.sin(yaw), y = groundAt(x, z);
      if (pitch == null) pitch = Math.atan2(groundAt(x + fx * K.half, z + fz * K.half) - groundAt(x - fx * K.half, z - fz * K.half), K.half * 2);
      Object.assign(v, { x, z, yaw });
      group.position.set(x, y - 0.02, z);
      group.quaternion.setFromAxisAngle(UP, yaw).multiply(qa.setFromAxisAngle(ZA, pitch)).multiply(q.setFromAxisAngle(XA, roll));
      v.cap[0] = x; v.cap[1] = z; v.cap[3] = fx; v.cap[4] = fz; v.cap[6] = y;
    };
    v.pose(s.x, s.z, s.yaw); scene.add(group); agentPos.push(v.cap); list.push(v);
    for (let i = 0; i < (parked?.n || 0); i++) { // a parked car already on this spot gives way
      const c = parked.get(i), t = Math.max(-K.half, Math.min(K.half, (c.x - s.x) * v.cap[3] + (c.z - s.z) * v.cap[4]));
      if (Math.hypot(c.x - s.x - v.cap[3] * t, c.z - s.z - v.cap[4] * t) < K.w + 2.2) { parked.hide(i); c.x = c.z = 1e9; } // far away: never offered to drive
    }
  };
  const police = city.places.find((p) => p.k === "police"), fire = city.places.find((p) => p.k === "fire station");
  add("police", police, 0); add("fire", fire, -6); add("ambulance", fire, 5.5);
  return list;
}

function flameTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d"), r = g.createRadialGradient(32, 40, 2, 32, 34, 30);
  r.addColorStop(0, "rgba(255,250,210,1)"); r.addColorStop(0.35, "rgba(255,170,50,0.85)"); r.addColorStop(1, "rgba(200,40,0,0)");
  g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

function patientModel() { // a person lying on the pavement, along local x
  const g = new THREE.Group(), m = (c) => new THREE.MeshLambertMaterial({ color: c }), put = (geo, mat, x, y, z) => { const o = new THREE.Mesh(geo, mat); o.position.set(x, y, z); o.castShadow = true; g.add(o); return o; };
  put(new THREE.CapsuleGeometry(0.17, 0.42, 3, 8).rotateZ(Math.PI / 2), m(0x9c2f2f), 0.1, 0.2, 0);
  put(new THREE.SphereGeometry(0.115, 10, 8), m(0xe5b38f), 0.62, 0.15, 0);
  for (const z of [0.09, -0.09]) put(new THREE.BoxGeometry(0.84, 0.13, 0.14), m(0x23314d), -0.6, 0.1, z);
  return g;
}

export function createServices({ city, world, scene, camera, renderer, veh, fleet, errands, toast, setTarget, audio }) {
  const cars = world.cars, groundAt = world.groundAt, kc = errands.kc;
  cars.suspect = -1; cars.caught = -1; cars.siren = null;
  let duty = null, call = null, nextT = 0, flashT = 0;
  const blue = new THREE.PointLight(0x2050ff, 0, 30); scene.add(blue);
  // fire: flickering flame sprites, an orange light and dark smoke from the shared smoke system
  const fireLight = new THREE.PointLight(0xff7a2a, 0, 45); scene.add(fireLight);
  const flameMat = new THREE.SpriteMaterial({ map: flameTexture(), color: 0xffb060, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true });
  const flames = Array.from({ length: 14 }, () => { const s = new THREE.Sprite(flameMat); s.visible = false; scene.add(s); return { s, ox: 0, oy: 0, ph: Math.random() * 6 }; });
  const smokeAt = [], smoke = buildSmoke(smokeAt); scene.add(smoke.mesh);
  // the hose: water drops thrown along the view, falling under gravity
  const NW = 220, wp = new Float32Array(NW * 3).fill(-1e4), wv = new Float32Array(NW * 3), wl = new Float32Array(NW), wgeo = new THREE.BufferGeometry();
  wgeo.setAttribute("position", new THREE.BufferAttribute(wp, 3).setUsage(THREE.DynamicDrawUsage));
  const water = new THREE.Points(wgeo, new THREE.PointsMaterial({ color: 0xd8ecff, size: 0.16, transparent: true, opacity: 0.75, depthWrite: false })); water.frustumCulled = false; scene.add(water);
  let wi = 0, emit = 0;
  const patient = patientModel(); patient.visible = false; scene.add(patient);
  const marker = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.9, 8).rotateX(Math.PI), new THREE.MeshBasicMaterial({ color: 0xe8352a })); marker.visible = false; scene.add(marker);
  const dir = new THREE.Vector3(), eye = new THREE.Vector3(), tmp = new THREE.Vector3();

  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const addr = (d) => `${d[5]} ${d[3]}`;
  const doorNear = (x, z) => { const D = (city.doors || []).filter((d) => { const r = Math.hypot(d[0] - x, d[1] - z); return r > 150 && r < 700; }); return D.length ? pick(D) : null; };
  const out = (d, k) => [d[0] + Math.sin(d[2]) * k, d[1] + Math.cos(d[2]) * k]; // k metres out of the wall in front of the door
  const driving = () => veh.st.mode === "car" ? veh.st.svc : null;
  const dist = (x, z, p) => Math.hypot(x - p.x, z - p.z);

  const clear = () => {
    cars.suspect = cars.caught = -1; marker.visible = false; patient.visible = false;
    for (const f of flames) f.s.visible = false; fireLight.intensity = 0; smokeAt.length = 0;
    call = null; setTarget(null);
  };
  const finish = (pay, title, line) => { errands.earn(pay); toast(title, `${line} · +${kc(pay)}`); clear(); nextT = 20 + Math.random() * 20; };
  const fail = (title, line) => { toast(title, line); clear(); nextT = 25; };

  const newCall = () => {
    const at = duty, d = doorNear(at.x, at.z);
    if (at.kind === "police") {
      const n = cars.traffic - 2, cand = []; // cars only, not the buses
      for (let i = 0; i < n; i++) { const r = Math.hypot(cars.agentPos[i][0] - at.x, cars.agentPos[i][1] - at.z); if (r > 100 && r < 450) cand.push(i); }
      if (cand.length && (Math.random() < 0.6 || !d)) {
        call = { type: "suspect", idx: pick(cand), t: 0, limit: 300, press: 0, lost: 0, label: "Suspect vehicle" }; cars.suspect = call.idx; marker.visible = true;
        toast("Dispatch · 158", "A car fled a traffic check · catch up with lights and siren on (L) and stay close");
        return;
      }
      if (!d) return;
      const [x, z] = out(d, 1); call = { type: "disturbance", x, z, t: 0, limit: 240, label: `Disturbance · ${addr(d)}` };
      toast("Dispatch · 158", `Noise complaint at ${addr(d)} · go there and talk to them on foot`);
    } else if (at.kind === "fire") {
      if (!d) return;
      const [x, z] = out(d, 0.4), y = groundAt(x, z), tx = Math.cos(d[2]), tz = -Math.sin(d[2]);
      call = { type: "fire", x, z, y, hp: 100, t: 0, limit: 360, label: `Fire · ${addr(d)}` };
      flames.forEach((f, i) => { const a = (i / flames.length - 0.5) * 5; f.ox = tx * a; f.oz = tz * a; f.oy = 0.6 + Math.random() * 3.5; f.s.visible = true; });
      smokeAt.push([x, y + 4.5, z]);
      toast("Dispatch · 150", `House fire at ${addr(d)} · drive there, get out by the engine and hold left click to spray`);
    } else {
      if (!d) return;
      const [x, z] = out(d, 1.6);
      call = { type: "patient", x, z, t: 0, limit: 360, treat: 0, treating: false, treated: false, aboard: false, label: `Patient · ${addr(d)}` };
      patient.position.set(x, groundAt(x, z), z); patient.rotation.y = d[2]; patient.visible = true;
      toast("Dispatch · 155", `Someone collapsed at ${addr(d)} · get there, give first aid (E), then bring them to the base`);
    }
    setTarget(call.x, call.z, call.label, true);
  };

  const hoseOn = (pos) => duty && duty.kind === "fire" && veh.st.mode === "walk" && dist(duty.x, duty.z, pos) < 50;

  // s: { pos, firing }
  const update = (dt, s) => {
    const pos = s.pos, sv = driving(), t = performance.now() / 1000;
    if (sv && duty !== sv) { if (call) clear(); duty = sv; nextT = 6; toast(`On duty · ${sv.name}`, "Calls come in on the radio · L blue lights and siren"); }
    if (!sv && veh.st.mode !== "walk" && duty) { clear(); duty = null; toast("Off duty", "Back to normal life"); }
    // blue lights: two halves alternating; the light follows the flashing vehicle nearest to you
    let near = null, nd = Infinity;
    for (const v of fleet) {
      const on = v.siren, ph = Math.floor(t * 7) % 2;
      v.beacons.forEach((m, i) => (on && ph === i ? m.color.setRGB(0.25, 0.45, 3) : m.color.setHex(0x0a1440))); // brighter than white: it glows (bloom on high)
      if (on && dist(v.x, v.z, pos) < nd) { nd = dist(v.x, v.z, pos); near = v; }
    }
    blue.intensity = near ? (Math.floor(t * 7) % 2 ? 40 : 8) : 0;
    if (near) blue.position.set(near.x, groundAt(near.x, near.z) + 3, near.z);
    audio.siren?.(!!(sv && sv.siren));
    cars.siren = sv && sv.siren ? { x: sv.x, z: sv.z, fx: Math.cos(sv.yaw), fz: -Math.sin(sv.yaw) } : null;

    if (duty && !call && (nextT -= dt) <= 0) { newCall(); if (!call) nextT = 10; }
    if (call && (call.t += dt) > call.limit) {
      fail("Call timed out", call.type === "fire" ? "The fire spread · the building is lost" : call.type === "suspect" ? "The suspect got away" : "Another crew took the call");
    }
    if (call?.type === "suspect") {
      const a = cars.agentPos[call.idx], d = dist(a[0], a[1], pos);
      marker.position.set(a[0], a[6] + 3.2 + Math.sin(t * 4) * 0.15, a[1]);
      if (d > 25) setTarget(a[0], a[1], call.label, true);
      if (cars.caught !== call.idx) {
        if (sv && sv.kind === "police" && sv.siren && d < 16) call.press += dt; else call.press = Math.max(0, call.press - dt * 0.5);
        if (call.press >= 4) { cars.caught = call.idx; toast("Suspect stopped", "Get out and arrest the driver (E)"); }
        if (d > 450) { if ((call.lost += dt) > 20) fail("Lost them", "The suspect got away"); } else call.lost = 0;
      }
    } else if (call?.type === "disturbance") {
      if (veh.st.mode === "walk" && dist(call.x, call.z, pos) < 6) finish(300, "Settled", `You calmed things down at ${call.label.split(" · ")[1]}`);
    } else if (call?.type === "fire") {
      call.hp = Math.min(160, call.hp + dt * 0.25); // it grows while nobody fights it
      const k = call.hp / 100;
      flames.forEach((f, i) => { f.ph += dt * 9; const sc = (1.6 + Math.sin(f.ph + i) * 0.35) * Math.min(1.4, 0.35 + k * 0.75); f.s.position.set(call.x + f.ox, call.y + f.oy * Math.min(1.3, 0.4 + k * 0.6) + Math.sin(f.ph * 0.7) * 0.2, call.z + f.oz); f.s.scale.set(sc, sc * 1.5, 1); });
      fireLight.position.set(call.x, call.y + 2.5, call.z); fireLight.intensity = (60 + Math.sin(t * 23) * 15 + Math.sin(t * 7) * 10) * Math.min(1, k);
      if (s.firing && hoseOn(pos)) { // aimed at the fire and close enough
        camera.getWorldPosition(eye); camera.getWorldDirection(dir);
        tmp.set(call.x - eye.x, call.y + 2 - eye.y, call.z - eye.z);
        const r = tmp.length(); if (r < 26 && tmp.dot(dir) / r > Math.cos(0.32)) call.hp -= dt * 14;
      }
      if (call.hp <= 0) finish(900, "Fire out", `${call.label.split(" · ")[1]} is safe`);
    } else if (call?.type === "patient") {
      const d = dist(call.x, call.z, pos);
      if (call.treating) { if (d > 3 || veh.st.mode !== "walk") { call.treating = false; toast("First aid stopped", "Stay with the patient · E to continue"); } else if ((call.treat += dt) >= 5) { call.treating = false; call.treated = true; toast("Patient stabilised", "Bring the ambulance next to them"); } }
      if (call.treated && !call.aboard && duty.kind === "ambulance" && dist(duty.x, duty.z, call) < 9) { call.aboard = true; patient.visible = false; setTarget(duty.home.x, duty.home.z, `Base · ${duty.home.n}`, true); toast("Patient on board", `Drive to the base at ${duty.home.n} (lights and siren help)`); }
      if (call.aboard && sv === duty && dist(duty.home.x, duty.home.z, sv) < 25) finish(call.t < 150 ? 1100 : 800, "Patient handed over", call.t < 150 ? "Quick work, with a bonus" : "They're in good hands");
    }
    // water: spawn along the view while spraying, then gravity
    if (s.firing && hoseOn(pos)) {
      camera.getWorldPosition(eye); camera.getWorldDirection(dir);
      for (emit += dt * 160; emit >= 1; emit--) {
        const o = wi * 3; wl[wi] = 1.3;
        wp[o] = eye.x + dir.x * 0.6; wp[o + 1] = eye.y - 0.3 + dir.y * 0.6; wp[o + 2] = eye.z + dir.z * 0.6;
        const sp = 17 + Math.random() * 3; wv[o] = dir.x * sp + (Math.random() - 0.5); wv[o + 1] = dir.y * sp + 2 + (Math.random() - 0.5); wv[o + 2] = dir.z * sp + (Math.random() - 0.5);
        wi = (wi + 1) % NW;
      }
    }
    let live = false;
    for (let i = 0; i < NW; i++) {
      if (wl[i] <= 0) continue;
      const o = i * 3; live = true;
      if ((wl[i] -= dt) <= 0) { wp[o + 1] = -1e4; continue; }
      wv[o + 1] -= 9.8 * dt; wp[o] += wv[o] * dt; wp[o + 1] += wv[o + 1] * dt; wp[o + 2] += wv[o + 2] * dt;
    }
    water.visible = live; if (live) wgeo.attributes.position.needsUpdate = true;
    smoke.update(dt, camera.position, uniforms.uWind.value, call?.type === "fire" ? Math.min(1, call.hp / 100) : 0, 0.1, innerHeight * renderer.getPixelRatio() * 0.71);
  };

  // returns true when the key was used
  const key = (code, pos) => {
    const sv = driving();
    if (code === "KeyL" && sv) { sv.siren = !sv.siren; toast(sv.name, sv.siren ? "Blue lights and siren on · traffic makes way" : "Lights and siren off"); return true; }
    if (code !== "KeyE" || veh.st.mode !== "walk" || !call) return false;
    if (call.type === "patient" && !call.treated && !call.treating && dist(call.x, call.z, pos) < 2.6) { call.treating = true; toast("First aid", "Stay next to them"); return true; }
    if (call.type === "suspect" && cars.caught === call.idx) {
      const a = cars.agentPos[call.idx];
      if (dist(a[0], a[1], pos) < a[5] + a[2] + 2.5) { finish(700, "Arrested", "The driver is in custody"); return true; }
    }
    return false;
  };
  const hint = (pos) => {
    const sv = driving();
    if (call?.type === "suspect" && sv && call.press > 0 && cars.caught !== call.idx) return `Pull them over · ${Math.round((call.press / 4) * 100)} %`;
    if (sv) return "";
    if (!call || veh.st.mode !== "walk") return "";
    if (call.type === "patient" && call.treating) return `First aid · ${Math.round((call.treat / 5) * 100)} %`;
    if (call.type === "patient" && !call.treated && dist(call.x, call.z, pos) < 2.6) return "E · first aid";
    if (call.type === "suspect" && cars.caught === call.idx) { const a = cars.agentPos[call.idx]; if (dist(a[0], a[1], pos) < a[5] + a[2] + 2.5) return "E · arrest the driver"; }
    if (call.type === "fire" && hoseOn(pos) && dist(call.x, call.z, pos) < 60) return `Hold left click · spray water · fire ${Math.round(call.hp)} %`;
    return "";
  };
  const status = () => duty ? `${duty.name} · ${call ? call.label : "waiting for a call"}` : "";
  return { update, key, hint, status, hose: (pos) => hoseOn(pos) && call?.type === "fire", fleet, call: () => call, duty: () => duty, newCall };
}
