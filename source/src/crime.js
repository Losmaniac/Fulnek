// Arcade crime loop: a five-weapon loadout, wanted stars, stylised impacts and aircraft.
import * as THREE from "three";

const MAX_STARS = 5;
const LOADOUT = [
  { name: "PISTOL", clip: 12, reserve: 60, delay: 0.24, damage: 1, range: 90, spread: 0, rays: 1, color: 0x252a2e },
  { name: "SHOTGUN", clip: 8, reserve: 40, delay: 0.72, damage: 1, range: 38, spread: 0.055, rays: 8, color: 0x49392d },
  { name: "SMG", clip: 30, reserve: 180, delay: 0.095, damage: 1, range: 65, spread: 0.012, rays: 1, color: 0x283a34 },
  { name: "RIFLE", clip: 24, reserve: 144, delay: 0.19, damage: 2, range: 145, spread: 0.004, rays: 1, color: 0x35443a },
  { name: "ROCKET", clip: 1, reserve: 8, delay: 1.15, damage: 8, range: 105, spread: 0, rays: 1, color: 0x565b4c, explosive: true },
];

// distance along unit dir d from o to the first wall (building or parked car, below its top) within far, else far
export function wallAt(nearWalls, segs, o, d, far) {
  const h = Math.hypot(d.x, d.z); if (!nearWalls || h < 1e-4) return far;
  let best = far;
  for (let s = 0; s <= far * h + 8; s += 8) nearWalls(o.x + (d.x / h) * s, o.z + (d.z / h) * s, (k) => { // the hash looks one 8 m cell around each sample
    k *= 5; const ex = segs[k + 2] - segs[k], ez = segs[k + 3] - segs[k + 1], den = d.x * ez - d.z * ex; if (Math.abs(den) < 1e-9) return;
    const wx = segs[k] - o.x, wz = segs[k + 1] - o.z, t = (wx * ez - wz * ex) / den, u = (wx * d.z - wz * d.x) / den;
    if (t > 0 && t < best && u >= 0 && u <= 1 && o.y + d.y * t < segs[k + 4]) best = t;
  });
  return best;
}
// push point-like u {x, z} out of a capsule (centre c, axis f, half-length len) by radius r; true on contact
function shove(u, cx, cz, fx, fz, len, r) {
  const t = Math.max(-len, Math.min(len, (u.x - cx) * fx + (u.z - cz) * fz)), dx = u.x - cx - fx * t, dz = u.z - cz - fz * t, d = Math.hypot(dx, dz);
  if (d >= r || d < 1e-6) return false;
  u.x += (dx / d) * (r - d); u.z += (dz / d) * (r - d); return true;
}

function weaponModel(camera, cfg, index) {
  const root = new THREE.Group(), metal = new THREE.MeshLambertMaterial({ color: cfg.color }), dark = new THREE.MeshLambertMaterial({ color: 0x171b1d }), wood = new THREE.MeshLambertMaterial({ color: 0x654a31 });
  const put = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); root.add(m); return m; };
  const scale = index === 4 ? 1.65 : index === 1 ? 1.2 : index === 3 ? 1.35 : 1;
  put(new THREE.BoxGeometry(0.13 * scale, 0.15 * scale, 0.38 * scale), metal, 0, 0, 0);
  put(new THREE.BoxGeometry(0.095 * scale, 0.2 * scale, 0.13 * scale), index === 0 || index === 1 || index === 3 ? wood : dark, 0, -0.14 * scale, 0.085 * scale).rotation.x = -0.25;
  put(new THREE.CylinderGeometry(index === 4 ? 0.075 : 0.034, index === 4 ? 0.075 : 0.034, index === 4 ? 0.64 : 0.36, 10).rotateX(Math.PI / 2), index === 4 ? dark : metal, 0, 0.005, index === 4 ? -0.4 : -0.25);
  if (index === 1) put(new THREE.BoxGeometry(0.085, 0.09, 0.22), wood, 0, -0.09, 0.01);
  if (index === 2) put(new THREE.BoxGeometry(0.105, 0.24, 0.11), dark, 0, -0.18, -0.03);
  if (index === 3) { put(new THREE.BoxGeometry(0.1, 0.24, 0.16), dark, 0, -0.15, 0.16); put(new THREE.CylinderGeometry(0.035, 0.035, 0.32, 8).rotateX(Math.PI / 2), dark, 0, 0.11, -0.08); }
  if (index === 4) { put(new THREE.CylinderGeometry(0.105, 0.105, 0.35, 10).rotateZ(Math.PI / 2), dark, 0, -0.07, 0.11); put(new THREE.BoxGeometry(0.1, 0.1, 0.3), metal, 0, 0.11, -0.08); }
  if (index !== 4) put(new THREE.BoxGeometry(0.035, 0.045, 0.07), dark, 0, 0.095, -0.08);
  const flash = new THREE.Mesh(new THREE.SphereGeometry(index === 4 ? 0.18 : 0.075, 8, 6), new THREE.MeshBasicMaterial({ color: index === 4 ? 0xff6b26 : 0xffc15c }));
  flash.position.set(0, 0.005, index === 4 ? -0.79 : -0.36); flash.visible = false; root.add(flash);
  root.position.set(0.28, -0.25, -0.52); root.rotation.set(-0.04, -0.04, 0); camera.add(root);
  return { root, flash };
}

function officer() {
  const g = new THREE.Group();
  const navy = new THREE.MeshLambertMaterial({ color: 0x183755 }), dark = new THREE.MeshLambertMaterial({ color: 0x17202a }), skin = new THREE.MeshLambertMaterial({ color: 0xc99672 }), gold = new THREE.MeshBasicMaterial({ color: 0xf0bd55 });
  const put = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; g.add(m); return m; };
  put(new THREE.CapsuleGeometry(0.24, 0.48, 3, 8), navy, 0, 1.04, 0); put(new THREE.BoxGeometry(0.34, 0.68, 0.34), dark, 0, 0.39, 0);
  put(new THREE.SphereGeometry(0.19, 10, 8), skin, 0, 1.67, 0); put(new THREE.CylinderGeometry(0.2, 0.2, 0.09, 8), navy, 0, 1.84, 0); put(new THREE.ConeGeometry(0.16, 0.1, 8), navy, 0, 1.91, 0);
  put(new THREE.BoxGeometry(0.08, 0.12, 0.035), gold, 0.1, 1.1, 0.215); put(new THREE.BoxGeometry(0.09, 0.34, 0.09), dark, 0.25, 1.06, 0.04).rotation.x = -0.25;
  const beacon = new THREE.Group(); beacon.position.y = 2.02;
  for (const [x, color] of [[-0.11, 0xff3030], [0.11, 0x3085ff]]) { const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.08, 0.12), new THREE.MeshBasicMaterial({ color })); lamp.position.x = x; beacon.add(lamp); }
  g.add(beacon); return { group: g, beacon };
}

export function createAircraft(kind) {
  const group = new THREE.Group(), body = new THREE.MeshLambertMaterial({ color: 0x263c42 }), glass = new THREE.MeshBasicMaterial({ color: 0x7bb8c4 }), black = new THREE.MeshLambertMaterial({ color: 0x1b2528 }), red = new THREE.MeshBasicMaterial({ color: 0xf0443e });
  const put = (geo, mat, x, y, z, parent = group) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; parent.add(m); return m; };
  if (kind === "helicopter") {
    put(new THREE.SphereGeometry(1.05, 12, 8), body, 0, 0, 0).scale.set(1.1, 0.75, 1.5);
    put(new THREE.SphereGeometry(0.74, 12, 8), glass, 0, 0.13, -0.76).scale.set(1.05, 0.7, 0.65);
    put(new THREE.CylinderGeometry(0.12, 0.22, 4.2, 8), body, 0, 0.12, 2.45).rotation.x = Math.PI / 2;
    put(new THREE.BoxGeometry(1.3, 0.1, 0.65), body, 0, 0.13, 4.4); put(new THREE.SphereGeometry(0.14, 8, 6), red, 0, 0.55, 4.4);
    const rotor = new THREE.Group(); rotor.position.y = 0.9; group.add(rotor); for (let i = 0; i < 4; i++) { const blade = put(new THREE.BoxGeometry(0.24, 0.035, 7.6), black, 0, 0, 0, rotor); blade.rotation.y = i * Math.PI / 2; }
    const tailRotor = new THREE.Group(); tailRotor.position.set(0, 0.22, 4.45); group.add(tailRotor); for (let i = 0; i < 3; i++) { const blade = put(new THREE.BoxGeometry(0.09, 1.35, 0.12), black, 0, 0, 0, tailRotor); blade.rotation.z = i * Math.PI / 3; }
    return { group, rotors: [rotor, tailRotor] };
  }
  put(new THREE.ConeGeometry(0.82, 6.4, 8).rotateX(-Math.PI / 2), body, 0, 0, 0);
  put(new THREE.BoxGeometry(7.4, 0.16, 1.5), body, 0, 0, 0.4); put(new THREE.BoxGeometry(2.4, 0.12, 0.95), body, 0, 0.3, 2.1);
  put(new THREE.SphereGeometry(0.45, 10, 8), glass, 0, 0.16, -0.65).scale.set(1.35, 0.65, 0.7);
  put(new THREE.BoxGeometry(0.16, 1.2, 0.95), body, 0, 0.56, 2.15); group.scale.setScalar(2.25); return { group, rotors: [] };
}

export function createCrime({ camera, scene, people, groundAt, wantedEl, weaponEl, toast, audio, onArrest }) {
  const guns = LOADOUT.map((w, i) => weaponModel(camera, w, i)), ray = new THREE.Raycaster(), direction = new THREE.Vector3(), origin = new THREE.Vector3(), right = new THREE.Vector3(), up = new THREE.Vector3();
  const ammo = LOADOUT.map((w) => w.clip), reserves = LOADOUT.map((w) => w.reserve), units = [], traces = [], particles = [], effects = [];
  // the police helicopter's searchlight lives here for good: adding a light later would recompile every material in town
  const search = new THREE.SpotLight(0xfff1cf, 0, 70, Math.PI / 8, 0.65); scene.add(search, search.target);
  const muzzle = new THREE.PointLight(0xffa536, 0, 6); camera.add(muzzle); // one shared flash light, always in the scene for the same reason
  let walls = [null, null]; // nearWalls and segs from the last update
  const clear = (a, b) => { const d = b.clone().sub(a), L = d.length(); return L < 1e-3 || wallAt(walls[0], walls[1], a, d.divideScalar(L), L) >= L; };
  let equipped = false, selected = 0, wanted = 0, shots = 0, cooldown = 0, flashT = 0, dispatchT = 0, escaped = false, escapeT = 0, heli = null, jet = null, jetT = 0, aircraftTime = 0, dryWeapon = -1;
  const stars = () => { wantedEl.hidden = wanted === 0; wantedEl.textContent = "★".repeat(wanted) + "☆".repeat(MAX_STARS - wanted); wantedEl.setAttribute("aria-label", `Wanted level ${wanted} of ${MAX_STARS}`); };
  const addWanted = (n = 1) => { const prev = wanted; wanted = Math.min(MAX_STARS, Math.max(1, wanted + n)); escaped = false; escapeT = 0; dispatchT = Math.min(dispatchT, 1); stars(); if (wanted > prev) toast("Wanted", `${"★".repeat(wanted)} · Police are looking for you`); };
  const selectedGun = () => guns[selected];
  const setWeaponHud = (mode) => {
    for (const [i, g] of guns.entries()) g.root.visible = equipped && mode === "walk" && i === selected;
    weaponEl.hidden = !equipped || mode !== "walk";
    if (!weaponEl.hidden) weaponEl.textContent = `${selected + 1} ${LOADOUT[selected].name}  ·  ${ammo[selected]} / ${reserves[selected]}  ·  1–5 select · B next · X holster · R reload`;
  };
  const select = (i) => { selected = i; equipped = true; if (!ammo[selected] && reserves[selected]) reload(); setWeaponHud("walk"); toast(`${LOADOUT[i].name} ready`, `Magazine ${ammo[i]} · ${reserves[i]} spare`); };
  const cycle = () => select((selected + 1) % LOADOUT.length);
  const toggle = () => { equipped = !equipped; if (equipped && !ammo[selected] && reserves[selected]) reload(); setWeaponHud("walk"); toast(equipped ? `${LOADOUT[selected].name} ready` : "Weapon holstered", equipped ? "Choose 1–5 · left click to fire · R to reload" : "You are unarmed"); };
  const reload = () => { if (!equipped) return; const w = LOADOUT[selected]; if (ammo[selected] >= w.clip || reserves[selected] <= 0) { toast(w.name, reserves[selected] <= 0 ? "No spare ammunition" : "Magazine already full"); return; } const n = Math.min(w.clip - ammo[selected], reserves[selected]); ammo[selected] += n; reserves[selected] -= n; dryWeapon = -1; toast("Reloaded", `${ammo[selected]} in the magazine · ${reserves[selected]} spare`); };
  const trace = (a, b, color = 0xffd58a) => { const geom = new THREE.BufferGeometry().setFromPoints([a, b]), line = new THREE.Line(geom, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.9 })); scene.add(line); traces.push({ line, t: 0.11 }); };
  const burst = (at, color = 0x9d1425, count = 9, scale = 1) => {
    for (let i = 0; i < count; i++) { const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.045 + Math.random() * 0.09, 6, 5), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.92 })); mesh.position.copy(at); scene.add(mesh); const v = new THREE.Vector3((Math.random() - 0.5) * 5, Math.random() * 4 + 0.4, (Math.random() - 0.5) * 5).multiplyScalar(scale); particles.push({ mesh, v, t: 0.7 + Math.random() * 0.45 }); }
  };
  const explode = (at, targets, from) => {
    const c = at.clone().lerp(from, Math.min(1, 0.3 / (at.distanceTo(from) || 1))), body = new THREE.Vector3(); // test cover from just in front of the impact
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), new THREE.MeshBasicMaterial({ color: 0xff812e, transparent: true, opacity: 0.72 })); sphere.position.copy(at); sphere.scale.setScalar(0.3); scene.add(sphere); effects.push({ mesh: sphere, t: 0.55, life: 0.55 });
    burst(at, 0xffc15c, 18, 1.8); audio.explosion?.();
    for (const u of targets) if (u.group.position.distanceTo(at) < 12 && clear(c, body.copy(u.group.position).setY(u.group.position.y + 1))) { u.health -= 5; if (u.health <= 0) { scene.remove(u.group); u.remove = true; } }
    const crowd = people.humans[0], matrix = new THREE.Matrix4(), p = new THREE.Vector3(); crowd.updateMatrixWorld(true);
    for (let i = 0; i < crowd.count; i++) { crowd.getMatrixAt(i, matrix); matrix.premultiply(crowd.matrixWorld); p.setFromMatrixPosition(matrix); if (p.distanceTo(at) < 8 && clear(c, p.setY(p.y + 1))) people.hit(i, at.x, at.z); }
    addWanted(2);
  };
  const shoot = (mode = "walk") => {
    if (!equipped || mode !== "walk" || cooldown > 0) return false;
    const w = LOADOUT[selected], gun = selectedGun();
    if (ammo[selected] <= 0) { if (dryWeapon !== selected) { toast(`${w.name} empty`, "Press R to reload"); dryWeapon = selected; } return false; }
    ammo[selected]--; shots++; cooldown = w.delay; flashT = w.explosive ? 0.15 : 0.075; gun.flash.visible = true; muzzle.position.copy(gun.flash.position).add(gun.root.position); muzzle.intensity = w.explosive ? 7 : 3.5; audio.gunshot(w.name);
    camera.updateMatrixWorld(true); camera.getWorldPosition(origin); camera.getWorldDirection(direction); camera.getWorldDirection(up); up.crossVectors(direction, new THREE.Vector3(1, 0, 0)).normalize(); right.crossVectors(direction, up).normalize();
    const targets = [...people.humans, ...units.map((u) => u.group)], hitUnits = new Set(), hitPeople = new Set(); let rocketHit = null;
    for (let n = 0; n < w.rays; n++) {
      const shotDir = direction.clone().addScaledVector(right, (Math.random() - 0.5) * w.spread).addScaledVector(up, (Math.random() - 0.5) * w.spread).normalize();
      const wall = wallAt(walls[0], walls[1], origin, shotDir, w.range); // nothing behind a wall can be hit
      ray.set(origin, shotDir); ray.far = wall; const hit = ray.intersectObjects(targets, true)[0], end = hit ? hit.point : origin.clone().addScaledVector(shotDir, wall < w.range ? wall : Math.min(w.range, 55));
      if (w.explosive) { rocketHit = end; trace(origin, end, 0xff6b2d); break; }
      if (w.rays === 1) trace(origin, end);
      if (!hit) { if (wall < w.range) burst(end, 0x8a8478, 3, 0.4); continue; } // plaster dust where it struck
      const human = people.humans.includes(hit.object);
      if (human) {
        const part = people.humans.indexOf(hit.object), i = part === 3 || part === 4 ? hit.instanceId >> 1 : hit.instanceId;
        if (!hitPeople.has(i) && people.hit(i, origin.x, origin.z)) { hitPeople.add(i); burst(hit.point, 0x9d1425, 6, 0.7); addWanted(1); }
      } else {
        let node = hit.object; while (node && !units.some((u) => u.group === node)) node = node.parent;
        const unit = units.find((u) => u.group === node);
        if (unit && !hitUnits.has(unit)) { hitUnits.add(unit); unit.health -= w.damage; burst(hit.point, 0x8c1d2d, 10, 0.8); addWanted(2); if (unit.health <= 0) { scene.remove(unit.group); unit.remove = true; toast("Officer down", "More police are responding"); } }
      }
    }
    if (w.explosive && rocketHit) explode(rocketHit, units, origin);
    addWanted(shots > 1 && shots % 4 === 0 ? 1 : 0); setWeaponHud(mode); return true;
  };
  const spawn = (pos, yaw) => {
    const model = officer(), a = Math.random() * 1.4 - 0.7, d = 52 + Math.random() * 22, back = yaw + Math.PI + a, x = pos.x + Math.cos(back) * d, z = pos.z + Math.sin(back) * d;
    model.group.position.set(x, groundAt(x, z), z); scene.add(model.group); units.push({ ...model, x, z, health: 3, lost: 0, close: 0, stuck: 0, side: Math.random() < 0.5 ? -1 : 1 });
  };
  const arrest = () => { units.forEach((u) => scene.remove(u.group)); units.length = 0; wanted = 0; escaped = false; escapeT = dispatchT = 0; equipped = false; ammo.splice(0, ammo.length, ...LOADOUT.map((w) => w.clip)); reserves.splice(0, reserves.length, ...LOADOUT.map((w) => w.reserve)); stars(); setWeaponHud("walk"); onArrest(); toast("Busted", "Your loadout was taken · the police issued a fine"); };
  // car: the player's vehicle state while driving; traffic: capsules [x, z, halfWidth, fx, fz, halfLength, y]
  const update = (dt, pos, yaw, mode, nearWalls, segs, car = null, traffic = []) => {
    walls = [nearWalls, segs];
    cooldown = Math.max(0, cooldown - dt); dispatchT -= dt; aircraftTime += dt;
    if ((flashT -= dt) <= 0) { for (const g of guns) g.flash.visible = false; muzzle.intensity = 0; }
    for (let i = traces.length - 1; i >= 0; i--) { const tr = traces[i]; tr.t -= dt; tr.line.material.opacity = Math.max(0, tr.t / 0.11); if (tr.t <= 0) { scene.remove(tr.line); tr.line.geometry.dispose(); tr.line.material.dispose(); traces.splice(i, 1); } }
    for (let i = particles.length - 1; i >= 0; i--) { const p = particles[i]; p.t -= dt; p.v.y -= 7 * dt; p.mesh.position.addScaledVector(p.v, dt); p.mesh.material.opacity = Math.max(0, p.t / 1.1); if (p.t <= 0) { scene.remove(p.mesh); p.mesh.geometry.dispose(); p.mesh.material.dispose(); particles.splice(i, 1); } }
    for (let i = effects.length - 1; i >= 0; i--) { const e = effects[i]; e.t -= dt; e.mesh.scale.setScalar(0.3 + (1 - e.t / e.life) * 9); e.mesh.material.opacity = Math.max(0, e.t / e.life) * 0.72; if (e.t <= 0) { scene.remove(e.mesh); e.mesh.geometry.dispose(); e.mesh.material.dispose(); effects.splice(i, 1); } }
    if (wanted > 0 && !escaped && dispatchT <= 0 && units.length < Math.min(wanted, 4)) { spawn(pos, yaw); dispatchT = 4.5; }
    for (const u of units) {
      const dx0 = pos.x - u.x, dz0 = pos.z - u.z, d0 = Math.hypot(dx0, dz0);
      if (d0 > 125) u.lost += dt; else u.lost = 0;
      if (u.lost > 6) { scene.remove(u.group); u.remove = true; continue; }
      let tx2 = pos.x, tz2 = pos.z; if (u.stuck > 1.5) { tx2 += (-dz0 / (d0 || 1)) * u.side * 5; tz2 += (dx0 / (d0 || 1)) * u.side * 5; }
      const dx = tx2 - u.x, dz = tz2 - u.z, d = Math.hypot(dx, dz) || 1, speed = mode === "walk" ? 2.25 + wanted * 0.22 : 7 + wanted * 0.35, oldX = u.x, oldZ = u.z;
      u.x += dx / d * Math.min(d, speed * dt); u.z += dz / d * Math.min(d, speed * dt);
      nearWalls(u.x, u.z, (s) => { const k = s * 5; if (groundAt(u.x, u.z) + 1.8 > segs[k + 4]) return; const ax = segs[k], az = segs[k + 1], bx = segs[k + 2], bz = segs[k + 3], vx = bx - ax, vz = bz - az, t = Math.max(0, Math.min(1, ((u.x - ax) * vx + (u.z - az) * vz) / (vx * vx + vz * vz || 1))), qx = ax + vx * t, qz = az + vz * t, px = u.x - qx, pz = u.z - qz, pd = Math.hypot(px, pz); if (pd < 0.48 && pd > 1e-5) { u.x += px / pd * (0.48 - pd); u.z += pz / pd * (0.48 - pd); } });
      for (const a of traffic) shove(u, a[0], a[1], a[3], a[4], a[5], a[2] + 0.4);
      if (car && shove(u, car.x, car.z, Math.cos(car.yaw), -Math.sin(car.yaw), car.svc ? car.svc.half - car.svc.w : 1.3, (car.svc ? car.svc.w : 0.9) + 0.4) && Math.abs(car.v) > 4) { // run down
        burst(new THREE.Vector3(u.x, groundAt(u.x, u.z) + 1, u.z), 0x8c1d2d, 10, 0.8); addWanted(2); scene.remove(u.group); u.remove = true; toast("Officer down", "More police are responding"); continue;
      }
      if (Math.hypot(u.x - oldX, u.z - oldZ) < 0.03 && d0 > 3) u.stuck += dt; else if (u.stuck > 0) { u.stuck = 0; u.side *= -1; }
      u.group.position.set(u.x, groundAt(u.x, u.z), u.z); u.group.rotation.y = Math.atan2(pos.x - u.x, pos.z - u.z); u.beacon.visible = Math.floor(performance.now() / 180) % 2 === 0;
      if (d0 < 1.05 && mode === "walk") u.close += dt; else u.close = Math.max(0, u.close - dt * 0.5);
      if (u.close > 1.8) { arrest(); return; }
    }
    for (let i = units.length - 1; i >= 0; i--) if (units[i].remove) units.splice(i, 1);
    if (wanted > 0 && units.length === 0) { escaped = true; escapeT += dt; if (escapeT >= 10) { wanted--; escapeT = 0; stars(); } } else if (units.length) escapeT = 0;
    if (wanted === 0) escaped = false;
    if (wanted >= 3) {
      if (!heli) { heli = createAircraft("helicopter"); scene.add(heli.group); }
      const a = aircraftTime * 0.19, hx = pos.x + Math.cos(a) * 36, hz = pos.z + Math.sin(a) * 36;
      heli.group.position.set(hx, Math.max(pos.y + 19, groundAt(hx, hz) + 22), hz); heli.group.rotation.y = -a + Math.PI / 2; heli.rotors.forEach((r, i) => { r.rotation.y += dt * (i ? 22 : 34); });
      search.intensity = 32; search.position.copy(heli.group.position).y -= 0.4; search.target.position.set(pos.x, pos.y, pos.z); // the searchlight is on you
    } else if (heli) { scene.remove(heli.group); heli = null; search.intensity = 0; }
    if (wanted >= 5) {
      jetT -= dt;
      if (!jet && jetT <= 0) { jet = createAircraft("jet"); scene.add(jet.group); jet.group.position.set(pos.x - 120, pos.y + 38, pos.z - 90); jetT = 19; }
      if (jet) { jet.group.position.x += 62 * dt; jet.group.position.z += 42 * dt; jet.group.rotation.y = -Math.atan2(62, 42); if (jet.group.position.distanceTo(pos) > 220) { scene.remove(jet.group); jet = null; } }
    } else if (jet) { scene.remove(jet.group); jet = null; }
    setWeaponHud(mode);
  };
  const clearAll = () => { units.forEach((u) => scene.remove(u.group)); units.length = 0; if (heli) scene.remove(heli.group); if (jet) scene.remove(jet.group); };
  const runOver = (x, z) => { burst(new THREE.Vector3(x, groundAt(x, z) + 0.9, z), 0x9d1425, 8, 0.8); addWanted(1); };
  stars(); setWeaponHud("walk");
  return { shoot, toggle, reload, select, cycle, update, carjacked: () => addWanted(1), runOver, wanted: () => wanted, clear: clearAll };
}
