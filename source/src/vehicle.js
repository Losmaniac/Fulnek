// Driving any parked car (chase or bonnet camera) and riding bikes left outside the bike shop, the info centre and Penny.
// Arcade physics on the real terrain: throttle, brakes, reverse, handbrake, slope pull, wall and traffic collisions.
import * as THREE from "three";
import { carGeometries, PAINT } from "./cars.js";
import { glossy } from "./env.js";

const UP = new THREE.Vector3(0, 1, 0);

function bikeGeometry() { // side view in x (front +x), wheels 0.68 m
  const parts = [], tube = (a, b, r = 0.022) => { const A = new THREE.Vector3(...a), D = new THREE.Vector3(...b).sub(A), L = D.length(); parts.push(new THREE.CylinderGeometry(r, r, L, 6).translate(0, L / 2, 0).applyQuaternion(new THREE.Quaternion().setFromUnitVectors(UP, D.normalize())).translate(...a)); };
  for (const x of [0.52, -0.52]) parts.push(new THREE.TorusGeometry(0.33, 0.025, 6, 20).translate(x, 0.34, 0));
  tube([-0.52, 0.34, 0], [-0.05, 0.36, 0]); tube([-0.05, 0.36, 0], [-0.15, 0.82, 0]); tube([-0.15, 0.82, 0], [0.38, 0.8, 0]); tube([-0.05, 0.36, 0], [0.4, 0.74, 0]);
  tube([0.52, 0.34, 0], [0.4, 0.95, 0]); tube([-0.52, 0.34, 0], [-0.15, 0.82, 0]); tube([0.4, 0.98, -0.28], [0.4, 0.98, 0.28], 0.018);
  parts.push(new THREE.BoxGeometry(0.24, 0.05, 0.12).translate(-0.17, 0.88, 0));
  return parts.reduce((acc, g) => { const n = g.index ? g.toNonIndexed() : g; n.deleteAttribute("uv"); acc.push(n); return acc; }, []);
}

// fleet: emergency vehicles (services.js) driven in place, each with its own size and speed
export function createVehicles({ world, city, groundAt, camera, scene, audio, fleet = [] }) {
  const cars = world.cars, P = cars.parked;
  // the player's own car: same model as the parked ones
  const geo = carGeometries(), bodyMat = glossy(new THREE.MeshStandardMaterial({ roughness: 0.35, metalness: 0.4 })), car = new THREE.Group();
  car.add(new THREE.Mesh(geo.body, bodyMat), new THREE.Mesh(geo.detail, glossy(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.15, metalness: 0.2, polygonOffset: true, polygonOffsetFactor: -1 }))), new THREE.Mesh(geo.lamps, new THREE.MeshBasicMaterial({ vertexColors: true })));
  car.children.forEach((m) => (m.castShadow = m.receiveShadow = true));
  car.visible = false; scene.add(car);
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(12, 5).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xfff0cc, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }));
  { const c = document.createElement("canvas"); c.width = 128; c.height = 64; const g = c.getContext("2d"), r = g.createRadialGradient(16, 32, 2, 40, 32, 72); r.addColorStop(0, "rgba(255,255,255,0.95)"); r.addColorStop(1, "rgba(255,255,255,0)"); g.fillStyle = r; g.fillRect(0, 0, 128, 64); pool.material.map = new THREE.CanvasTexture(c); }
  pool.visible = false; scene.add(pool);

  // bikes outside a few real places
  const bikeMat = new THREE.MeshLambertMaterial({ color: 0x2b5d7a }), bikeGeo = bikeGeometry(), bikes = [];
  const bikeAt = (n, k) => { const p = city.places.find((q) => q.n === n); if (!p) return; const nx = Math.sin(p.yaw), nz = Math.cos(p.yaw), tx = Math.cos(p.yaw), tz = -Math.sin(p.yaw); for (let i = 0; i < k; i++) { const x = p.x + nx * 1.6 + tx * (i - (k - 1) / 2) * 0.8, z = p.z + nz * 1.6 + tz * (i - (k - 1) / 2) * 0.8; addBike(x, z, p.yaw, i); } };
  const addBike = (x, z, yaw, i) => { const g = new THREE.Group(); bikeGeo.forEach((b) => g.add(new THREE.Mesh(b, i % 2 ? bikeMat : new THREE.MeshLambertMaterial({ color: [0x8c1c1c, 0x2e4a33, 0x1c1d20][i % 3] })))); g.position.set(x, groundAt(x, z), z); g.rotation.y = yaw; g.rotation.z = 0; g.children.forEach((m) => (m.castShadow = true)); scene.add(g); bikes.push(g); };
  bikeAt("Cyklo Košárek", 3); bikeAt("Informační centrum Fulnek", 2); bikeAt("Penny", 2); bikeAt("Hotel Amos", 2);
  const bars = new THREE.Group(); // handlebars in view while riding
  bars.add(new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.58, 8).rotateZ(Math.PI / 2), bikeMat), new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8), bikeMat).translateY(-0.15));
  for (const s of [-1, 1]) bars.add(new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.12, 8).rotateZ(Math.PI / 2), new THREE.MeshLambertMaterial({ color: 0x18181a })).translateX(s * 0.3));
  bars.position.set(0, -0.3, -0.62); bars.visible = false; camera.add(bars);

  const st = { mode: "walk", i: -1, bike: null, x: 0, z: 0, y: 0, yaw: 0, v: 0, steer: 0, pitch: 0, roll: 0, cam: 0, camPos: new THREE.Vector3(), orbit: 0, orbitT: 0, crank: 0 };
  const nearestCar = (x, z) => { let best = -1, bd = 3.2; for (let i = 0; i < P.n; i++) { const c = P.get(i), d = Math.hypot(c.x - x, c.z - z); if (d < bd) { bd = d; best = i; } } return best; };
  const nearestBike = (x, z) => bikes.find((b) => Math.hypot(b.position.x - x, b.position.z - z) < 2.2) || null;
  const nearestSvc = (x, z) => fleet.find((v) => { const fx = Math.cos(v.yaw), fz = -Math.sin(v.yaw), t = Math.max(-v.half, Math.min(v.half, (x - v.x) * fx + (z - v.z) * fz)); return Math.hypot(x - v.x - fx * t, z - v.z - fz * t) < v.w + 1.6; }) || null;

  const enter = (pos) => {
    st.svc = null;
    const sv = nearestSvc(pos.x, pos.z);
    if (sv) {
      Object.assign(st, { mode: "car", svc: sv, x: sv.x, z: sv.z, yaw: sv.yaw, v: 0, steer: 0, orbit: 0 });
      st.camPos.set(sv.x - Math.cos(sv.yaw) * sv.cam, groundAt(sv.x, sv.z) + 3, sv.z + Math.sin(sv.yaw) * sv.cam);
      return "service";
    }
    const b = nearestBike(pos.x, pos.z);
    if (b) { Object.assign(st, { mode: "bike", bike: b, x: b.position.x, z: b.position.z, yaw: b.rotation.y, v: 0 }); b.visible = false; bars.visible = true; return "bike"; }
    const i = nearestCar(pos.x, pos.z);
    if (i < 0) return null;
    const c = P.get(i); P.hide(i);
    bodyMat.color.setHex(c.paint); car.scale.set(c.sx, c.sy, 1);
    Object.assign(st, { mode: "car", i, x: c.x, z: c.z, yaw: c.yaw, v: 0, steer: 0, orbit: 0 });
    st.camPos.set(c.x - Math.cos(c.yaw) * 7, groundAt(c.x, c.z) + 3, c.z + Math.sin(c.yaw) * 7);
    car.visible = true;
    return "car";
  };
  const exit = (pos) => {
    if (Math.abs(st.v) > 3) return false; // stop first
    const lx = -Math.sin(st.yaw), lz = -Math.cos(st.yaw); // the left side (local -z), where the driver sits in Czechia
    if (st.svc) { pool.visible = false; pos.set(st.x + lx * (st.svc.w + 1), 0, st.z + lz * (st.svc.w + 1)); }
    else if (st.mode === "car") { P.place(st.i, st.x, st.z, st.yaw); car.visible = false; pool.visible = false; pos.set(st.x + lx * 1.9, 0, st.z + lz * 1.9); }
    else { st.bike.position.set(st.x, groundAt(st.x, st.z), st.z); st.bike.rotation.y = st.yaw; st.bike.visible = true; bars.visible = false; pos.set(st.x + lx * 0.8, 0, st.z + lz * 0.8); }
    pos.y = groundAt(pos.x, pos.z); st.mode = "walk"; st.v = 0;
    return true;
  };

  // circles along the body pushed out of walls, traffic and people; returns the total push (the wall normal times depth)
  // people: at speed an adult is knocked aside (onRunOver) and the car drives on; slower, or a child, and they block like a wall
  const people = world.people;
  const pushOut = (nearWalls, segs, closest, rad, offs, onRunOver) => {
    const fx = Math.cos(st.yaw), fz = -Math.sin(st.yaw), x0 = st.x, z0 = st.z;
    for (const o of offs) {
      let cx = st.x + fx * o, cz = st.z + fz * o;
      const out = (qx, qz, r) => { const dx = cx - qx, dz = cz - qz, d = Math.hypot(dx, dz); if (d < r && d > 1e-6) { const p = r - d; st.x += (dx / d) * p; st.z += (dz / d) * p; cx += (dx / d) * p; cz += (dz / d) * p; } };
      nearWalls(cx, cz, (s) => { const k = s * 5; if (st.y + 0.5 <= segs[k + 4]) out(...closest(cx, cz, segs[k], segs[k + 1], segs[k + 2], segs[k + 3]), rad); });
      for (const a of cars.agentPos) if (a !== st.svc?.cap && Math.abs(a[6] - st.y) < 3) out(...closest(cx, cz, a[0] - a[3] * a[5], a[1] - a[4] * a[5], a[0] + a[3] * a[5], a[1] + a[4] * a[5]), rad + a[2]);
      for (let i = 0; i < people.count; i++) {
        const p = people.person(i);
        if (!p.vis || Math.hypot(p.cx - cx, p.cz - cz) >= rad + 0.3) continue;
        if (Math.abs(st.v) > 3 && !p.kid) { if (people.hit(i, st.x, st.z)) { st.v *= 0.75; onRunOver?.(p.cx, p.cz); } }
        else out(p.cx, p.cz, rad + 0.3);
      }
    }
    return [st.x - x0, st.z - z0];
  };

  const step = (dt, input, ctx) => {
    if (st.mode === "walk") return;
    const bike = st.mode === "bike", { throttle, brake, steer, hand } = input;
    const sv = st.svc, maxV = bike ? 8.5 : sv ? sv.maxV : 24, acc = bike ? 2.2 : sv ? sv.acc : 4.6, rev = bike ? 0 : 5;
    const fx = Math.cos(st.yaw), fz = -Math.sin(st.yaw), half = bike ? 0.55 : sv ? sv.half * 0.7 : 1.6;
    const gF = groundAt(st.x + fx * half, st.z + fz * half), gB = groundAt(st.x - fx * half, st.z - fz * half);
    st.pitch = Math.atan2(gF - gB, half * 2);
    let a = -9.8 * Math.sin(st.pitch) * (bike ? 0.6 : 0.9); // hills pull
    if (throttle) a += st.v < -0.3 ? 9 : acc * (1 - Math.max(0, st.v) / maxV);
    if (brake) a += st.v > 0.3 ? -9 : -rev * (1 + st.v / rev) * (bike ? 0 : 1);
    if (hand) a -= Math.sign(st.v) * 7;
    a -= st.v * (bike ? 0.12 : 0.08) + Math.sign(st.v) * (throttle ? 0 : 0.6);
    st.v += a * dt;
    if (!throttle && !brake && Math.abs(st.v) < 0.25 && Math.abs(st.pitch) < 0.12) st.v = 0;
    st.v = Math.max(bike ? 0 : -rev, Math.min(maxV, st.v));
    const smax = (bike ? 0.7 : 0.55) / (1 + Math.abs(st.v) / (bike ? 10 : 12));
    st.steer += (steer * smax - st.steer) * Math.min(1, dt * 6);
    st.yaw += (st.v / (bike ? 1.05 : 2.7)) * Math.tan(st.steer) * dt * (hand && !bike ? 1.6 : 1);
    st.x += Math.cos(st.yaw) * st.v * dt; st.z -= Math.sin(st.yaw) * st.v * dt;
    st.y = groundAt(st.x, st.z);
    const L = sv ? sv.half - sv.w : 1.3, n = sv ? Math.ceil((2 * L) / sv.w) + 1 : 3; // circles no further apart than their radius
    const [px, pz] = pushOut(ctx.nearWalls, ctx.segs, ctx.closest, bike ? 0.45 : sv ? sv.w + 0.05 : 0.95, bike ? [0] : Array.from({ length: n }, (_, i) => -L + (2 * L * i) / (n - 1)), ctx.onRunOver), pl = Math.hypot(px, pz);
    st.hit = pl > 1e-4;
    if (st.hit) { // only the part of the motion that goes into the wall is lost; scraping along it keeps speed
      const into = Math.max(0, -Math.sign(st.v) * ((Math.cos(st.yaw) * px - Math.sin(st.yaw) * pz) / pl));
      if (into > 0.5 && Math.abs(st.v) > 4 && !bike) audio.thud?.();
      st.v *= 1 - 0.85 * into;
    }
    const [W, N, E, S] = city.bounds; st.x = Math.min(Math.max(st.x, W + 3), E - 3); st.z = Math.min(Math.max(st.z, N + 3), S - 3);
    st.roll += ((bike ? -st.steer * Math.min(1, st.v / 4) * 0.5 : st.steer * st.v * 0.012) - st.roll) * Math.min(1, dt * 5);
    st.crank += st.v * dt;
  };

  const q = new THREE.Quaternion(), qa = new THREE.Quaternion(), look = new THREE.Vector3(), tmp = new THREE.Vector3();
  // places the camera; returns false while walking so play.js keeps its own first-person camera
  const view = (dt, night, mouseYaw, mousePitch) => {
    if (st.mode === "walk") return false;
    if (st.mode === "bike") {
      const bob = Math.sin(st.crank * 2.4) * 0.025 * Math.min(1, st.v / 3);
      camera.position.set(st.x, st.y + 1.58 + bob, st.z);
      camera.rotation.set(mousePitch, st.yaw - Math.PI / 2 + mouseYaw, st.roll, "YXZ");
      return true;
    }
    const sv = st.svc;
    if (sv) sv.pose(st.x, st.z, st.yaw, st.pitch, st.roll);
    else {
      car.position.set(st.x, st.y - 0.02, st.z);
      car.quaternion.setFromAxisAngle(UP, st.yaw).multiply(qa.setFromAxisAngle(tmp.set(0, 0, 1), st.pitch)).multiply(q.setFromAxisAngle(tmp.set(1, 0, 0), st.roll));
    }
    const fx = Math.cos(st.yaw), fz = -Math.sin(st.yaw);
    pool.visible = night > 0.02; pool.material.opacity = night * 0.55;
    pool.position.set(st.x + fx * 7.5, groundAt(st.x + fx * 7.5, st.z + fz * 7.5) + 0.12, st.z + fz * 7.5); pool.rotation.y = st.yaw;
    if (st.cam === 1) { // bonnet camera
      const nose = sv ? sv.half - 1 : 1.25;
      camera.position.set(st.x + fx * nose, st.y + (sv ? sv.eye : 1.3) + Math.sin(st.pitch) * nose, st.z + fz * nose);
      camera.rotation.set(st.pitch * 0.8 + mousePitch, st.yaw - Math.PI / 2 + mouseYaw, 0, "YXZ");
      return true;
    }
    const a = st.yaw + Math.PI + mouseYaw, dist = (sv ? sv.cam : 7) + Math.max(0, st.v) * 0.08, lift = sv ? sv.eye - 1.3 : 0;
    const tx = st.x + Math.cos(a) * dist, tz = st.z - Math.sin(a) * dist, ty = Math.max(groundAt(tx, tz) + 1.2, st.y + 2.6 + lift - mousePitch * 4);
    tmp.set(tx, ty, tz); if (st.camPos.distanceToSquared(tmp) > 900) st.camPos.copy(tmp); else st.camPos.lerp(tmp, 1 - Math.exp(-dt * 5));
    camera.position.copy(st.camPos);
    camera.lookAt(look.set(st.x + fx * 2.5, st.y + 1.2 + lift, st.z + fz * 2.5));
    return true;
  };

  return {
    st, step, view, enter, exit,
    toggleCam: () => { st.cam = (st.cam + 1) % 2; },
    nearHint: (pos) => (nearestSvc(pos.x, pos.z) ? `E · drive the ${nearestSvc(pos.x, pos.z).name.toLowerCase()}` : nearestBike(pos.x, pos.z) ? "E · ride the bike" : nearestCar(pos.x, pos.z) >= 0 ? "E · drive this car" : ""),
    speed: () => Math.abs(st.v) * 3.6,
  };
}
