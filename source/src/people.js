// Townsfolk: low-poly people walking the footways and street edges around the centre, some with a dog,
// and a few groups chatting on the square. Limbs swing from their hips and shoulders.
import * as THREE from "three";

const SHIRT = [0x2b3a55, 0x6b6f75, 0x9c2f2f, 0x3e5a3a, 0xc2b28f, 0xe8e6e0, 0x1d1e22, 0xd6a531, 0x5b3d5e, 0x8a5a3c, 0x3f6f8f, 0xb34f6a];
const PANTS = [0x23314d, 0x23314d, 0x1c1c1f, 0x4b4d52, 0x8a7a5c, 0x3b3f4a];
const SKIN = [0xf1c8a8, 0xe5b38f, 0xd29d76, 0xb37a55, 0xf4d3bb];
const HAIR = [0x231a14, 0x4a3222, 0x7a5a36, 0xc9a86a, 0x9a9a98, 0x2d2420];
const FIRST = ["Jana", "Petr", "Marie", "Jiří", "Eva", "Tomáš", "Lenka", "Martin", "Hana", "Pavel", "Věra", "Josef", "Alena", "Jan", "Lucie", "Karel", "Zdeňka", "Michal", "Ivana", "Lukáš", "Božena", "Vladimír", "Kateřina", "Radek"];
const KIDS = ["Ondra", "Anička", "Kuba", "Terka", "Matěj", "Eliška", "Vojta", "Natálka"];
const DOG = [0x6b4a2f, 0x1e1b19, 0xd9c8a6, 0xa66b2c, 0xe9e5dc];

function inst(geo, mat, n) { const m = new THREE.InstancedMesh(geo, mat, n); m.castShadow = true; m.receiveShadow = true; m.frustumCulled = false; m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); return m; }

export function buildPeople(walk, spawn, groundAt, seats = [], count = 150, groups = 4) { // groups: chatting groups on the square
  const [sx, sz] = spawn, R = 650; // people stay within ~650 m of the square
  const nodes = walk.map((n, i) => i).filter((i) => walk[i].out.length && Math.hypot(walk[i].x - sx, walk[i].z - sz) < R);
  const mat = new THREE.MeshLambertMaterial();
  const torsoG = new THREE.CapsuleGeometry(0.17, 0.42, 3, 8).scale(0.8, 1, 1.15).translate(0, 1.18, 0);
  const headG = new THREE.SphereGeometry(0.115, 10, 8).translate(0, 1.67, 0);
  const hairG = new THREE.SphereGeometry(0.122, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.55).translate(-0.012, 1.685, 0);
  const legG = new THREE.BoxGeometry(0.13, 0.84, 0.14).translate(0, -0.42, 0), armG = new THREE.BoxGeometry(0.085, 0.6, 0.085).translate(0, -0.3, 0);
  const dogBody = new THREE.BoxGeometry(0.62, 0.26, 0.22).translate(0, 0.44, 0), dogHead = new THREE.BoxGeometry(0.24, 0.2, 0.17).translate(0.38, 0.58, 0);
  const dogLeg = new THREE.BoxGeometry(0.07, 0.32, 0.07).translate(0, -0.16, 0);
  const umbG = new THREE.ConeGeometry(0.55, 0.28, 8, 1, true).translate(0, 2.08, 0); // canopy over the head when it rains

  let seed = 777; const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const pick = (from, prev) => {
    const out = walk[from].out, near = out.filter((e) => e.to !== prev && Math.hypot(walk[e.to].x - sx, walk[e.to].z - sz) < R);
    const list = near.length ? near : out.filter((e) => e.to === prev).length ? out.filter((e) => e.to === prev) : out;
    let x = rnd() * list.reduce((a, e) => a + e.d, 0);
    for (const e of list) if ((x -= e.d) <= 0) return e;
    return list[list.length - 1];
  };
  const P = [];
  for (let i = 0; i < count && nodes.length; i++) {
    const from = nodes[Math.floor(rnd() * nodes.length)], kid = rnd() < 0.12;
    P.push({ from, e: pick(from, -1), t: rnd() * 10, v: 1.05 + rnd() * 0.5, side: rnd() < 0.5 ? 1 : -1, jit: (rnd() - 0.5) * 0.5, s: kid ? 0.62 + rnd() * 0.12 : 0.92 + rnd() * 0.16, ph: rnd() * 6.3, yaw: 0, dog: !kid && rnd() < 0.18 });
  }
  // chatting groups of 2-3 on the square
  for (let g = 0; g < groups; g++) {
    const cx = sx + (rnd() - 0.5) * 50, cz = sz + (rnd() - 0.5) * 50, k = 2 + Math.floor(rnd() * 2);
    for (let j = 0; j < k; j++) { const a = (j / k) * 6.283 + rnd() * 0.4; P.push({ idle: true, x: cx + Math.cos(a) * 0.65, z: cz + Math.sin(a) * 0.65, yaw: Math.atan2(Math.sin(a), -Math.cos(a)), s: 0.92 + rnd() * 0.16, ph: rnd() * 6.3, dog: false }); }
  }
  // a few people resting on the benches (a bench faces its local +z; people face their local +x)
  seats.forEach(([x, z, yaw], i) => { if (rnd() < 0.6) P.push({ idle: true, sit: true, x: x + Math.cos(yaw) * (rnd() - 0.5) * 0.9, z: z - Math.sin(yaw) * (rnd() - 0.5) * 0.9, yaw: Math.atan2(-Math.cos(yaw), Math.sin(yaw)), s: 0.92 + rnd() * 0.14, ph: rnd() * 6.3, dog: false }); });
  const n = P.length, dogs = P.filter((p) => p.dog);
  const meshes = { torso: inst(torsoG, mat, n), head: inst(headG, mat, n), hair: inst(hairG, mat, n), legs: inst(legG, mat, n * 2), arms: inst(armG, mat, n * 2), dog: inst(dogBody, mat, Math.max(1, dogs.length)), dogHead: inst(dogHead, mat, Math.max(1, dogs.length)), dogLegs: inst(dogLeg, mat, Math.max(4, dogs.length * 4)), umbrella: inst(umbG, new THREE.MeshLambertMaterial({ side: THREE.DoubleSide }), n) };
  meshes.dog.count = meshes.dogHead.count = dogs.length; meshes.dogLegs.count = dogs.length * 4;
  const col = new THREE.Color();
  P.forEach((p, i) => {
    const shirt = SHIRT[(i * 7) % SHIRT.length], pants = PANTS[(i * 3 + 1) % PANTS.length];
    meshes.umbrella.setColorAt(i, col.setHex([0x1d1e22, 0x7a1f2b, 0x24406b, 0x2f5b3a, 0x6b6f75][i % 5]));
    meshes.torso.setColorAt(i, col.setHex(shirt)); meshes.head.setColorAt(i, col.setHex(SKIN[(i * 5) % SKIN.length])); meshes.hair.setColorAt(i, col.setHex(HAIR[(i * 11) % HAIR.length]));
    for (const k of [0, 1]) { meshes.legs.setColorAt(i * 2 + k, col.setHex(pants)); meshes.arms.setColorAt(i * 2 + k, col.setHex(shirt)); }
  });
  dogs.forEach((d, j) => { const c = DOG[j % DOG.length]; meshes.dog.setColorAt(j, col.setHex(c)); meshes.dogHead.setColorAt(j, col.setHex(c)); for (let k = 0; k < 4; k++) meshes.dogLegs.setColorAt(j * 4 + k, col.setHex(c)); });

  const base = new THREE.Matrix4(), part = new THREE.Matrix4(), rot = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), p3 = new THREE.Vector3(), sc = new THREE.Vector3();
  const limb = (mesh, i, ox, oy, oz, ang) => { part.makeTranslation(ox, oy, oz).multiply(rot.makeRotationZ(ang)); mesh.setMatrixAt(i, part.premultiply(base)); };
  const hide = new THREE.Matrix4().makeTranslation(0, -1e4, 0);
  // env: { night, rain } -- fewer people at night and in the rain; umbrellas up when it pours
  const update = (dt, player, env = { night: 0, rain: 0 }) => {
    let di = 0;
    api.dogDist = Infinity;
    const out = Math.round(n * (1 - 0.75 * env.night) * (1 - 0.45 * env.rain));
    P.forEach((p, i) => {
      p.vis = false;
      if (i >= out || (p.idle && (env.night > 0.5 || env.rain > 0.3))) { // stayed home
        for (const m of [meshes.torso, meshes.head, meshes.hair, meshes.umbrella]) m.setMatrixAt(i, hide);
        for (const k of [0, 1]) { meshes.legs.setMatrixAt(i * 2 + k, hide); meshes.arms.setMatrixAt(i * 2 + k, hide); }
        if (p.dog) { meshes.dog.setMatrixAt(di, hide); meshes.dogHead.setMatrixAt(di, hide); for (let k = 0; k < 4; k++) meshes.dogLegs.setMatrixAt(di * 4 + k, hide); di++; }
        return;
      }
      let x, z, y, moving = 0;
      p.hitT = Math.max(0, (p.hitT || 0) - dt);
      if (p.panicT > 0 && Number.isFinite(p.cx)) {
        p.panicT = Math.max(0, p.panicT - dt);
        x = p.cx + p.panicX * 4.5 * dt; z = p.cz + p.panicZ * 4.5 * dt; y = groundAt(x, z); moving = 1;
        p.yaw = Math.atan2(-p.panicZ, p.panicX);
        if (p.panicT === 0) {
          p.idle = false; p.sit = false; p.hold = null;
          let best = -1, bd = Infinity;
          walk.forEach((n, k) => { const d = Math.hypot(n.x - x, n.z - z); if (n.out.length && d < bd) { best = k; bd = d; } });
          if (best >= 0) { p.from = best; p.e = pick(best, -1); p.t = 0; }
        }
      }
      else if (p.hold && !p.idle) { x = p.cx; z = p.cz; y = groundAt(x, z); } // stopped for a chat
      else if (p.idle) { x = p.x; z = p.z; y = groundAt(x, z) + (p.sit ? 0.5 - 0.86 * p.s : 0); }
      else {
        let A = walk[p.from], B = walk[p.e.to], dx = B.x - A.x, dz = B.z - A.z, L = Math.hypot(dx, dz) || 0.01;
        const ox = A.x + (dx / L) * p.t, oz = A.z + (dz / L) * p.t, blocked = Math.hypot(player.x - ox, player.z - oz) < 1.1;
        if (!blocked) p.t += p.v * dt, (moving = 1);
        while (p.t >= L) { p.t -= L; const prev = p.from; p.from = p.e.to; p.e = pick(p.from, prev); A = walk[p.from]; B = walk[p.e.to]; dx = B.x - A.x; dz = B.z - A.z; L = Math.hypot(dx, dz) || 0.01; }
        const u = p.t / L, ux = dx / L, uz = dz / L, off = p.e.off ? p.e.off * p.side : p.jit, target = Math.atan2(-uz, ux);
        let d = target - p.yaw; d = Math.atan2(Math.sin(d), Math.cos(d)); p.yaw += d * Math.min(1, dt * 5);
        x = A.x + dx * u - uz * off; z = A.z + dz * u + ux * off; y = A.y + (B.y - A.y) * u;
      }
      if (p.hold) { const t = Math.atan2(-(p.hold[1] - z), p.hold[0] - x); let d = t - p.yaw; d = Math.atan2(Math.sin(d), Math.cos(d)); p.yaw += d * Math.min(1, dt * 6); moving = 0; }
      p.cx = x; p.cz = z; p.vis = true;
      p.ph += dt * (moving ? (p.panicT > 0 ? 4.5 : p.v) * 5.2 / p.s : 1.2);
      const swing = moving ? Math.sin(p.ph) * 0.5 : 0, bob = moving ? Math.abs(Math.sin(p.ph)) * 0.035 : 0;
      base.compose(p3.set(x, y + bob, z), q.setFromAxisAngle(up, p.yaw + (p.idle ? Math.sin(p.ph * 0.3) * 0.15 : 0)), sc.setScalar(p.s));
      meshes.torso.setMatrixAt(i, base); meshes.head.setMatrixAt(i, base); meshes.hair.setMatrixAt(i, base);
      meshes.umbrella.setMatrixAt(i, env.rain > 0.25 && !p.idle && p.s > 0.8 ? base : hide);
      const sitL = p.sit ? 1.35 : 0;
      limb(meshes.legs, i * 2, 0, 0.86, 0.09, swing + sitL); limb(meshes.legs, i * 2 + 1, 0, 0.86, -0.09, -swing + sitL);
      const gest = p.idle && !p.sit ? Math.max(0, Math.sin(p.ph * 0.7)) * 0.6 : p.sit ? 0.35 : 0;
      limb(meshes.arms, i * 2, 0, 1.46, 0.245, -swing * 0.8 - gest); limb(meshes.arms, i * 2 + 1, 0, 1.46, -0.245, swing * 0.8);
      if (p.dog) { // trotting a step ahead on the walker's right
        const fx = Math.cos(p.yaw), fz = -Math.sin(p.yaw), dxp = x + fx * 0.9 - fz * 0.75, dzp = z + fz * 0.9 + fx * 0.75;
        base.compose(p3.set(dxp, groundAt(dxp, dzp) + (moving ? Math.abs(Math.sin(p.ph * 1.6)) * 0.03 : 0), dzp), q.setFromAxisAngle(up, p.yaw), sc.setScalar(1));
        meshes.dog.setMatrixAt(di, base); meshes.dogHead.setMatrixAt(di, base);
        api.dogDist = Math.min(api.dogDist, Math.hypot(player.x - dxp, player.z - dzp));
        const ds = moving ? Math.sin(p.ph * 1.6) * 0.6 : 0;
        [[0.22, 0.08, ds], [0.22, -0.08, -ds], [-0.22, 0.08, -ds], [-0.22, -0.08, ds]].forEach(([lx, lz, a], k) => limb(meshes.dogLegs, di * 4 + k, lx, 0.33, lz, a));
        di++;
      }
    });
    for (const m of Object.values(meshes)) m.instanceMatrix.needsUpdate = true;
  };
  P.forEach((p, i) => { p.name = p.s < 0.8 ? KIDS[i % KIDS.length] : FIRST[(i * 7) % FIRST.length]; p.kid = p.s < 0.8; });
  const api = {
    meshes: Object.values(meshes), humans: [meshes.torso, meshes.head, meshes.hair, meshes.legs, meshes.arms, meshes.umbrella], update, count: n, dogs: dogs.length, dogDist: Infinity,
    // conversation: the nearest person in reach, who then stops and turns to you
    nearest: (x, z, r) => { let best = -1, bd = r; P.forEach((p, i) => { if (!p.vis) return; const d = Math.hypot(p.cx - x, p.cz - z); if (d < bd) { bd = d; best = i; } }); return best; },
    person: (i) => P[i],
    hold: (i, at) => { if (P[i]) P[i].hold = at; },
    hit: (i, fromX, fromZ) => {
      const p = P[i];
      if (!p || p.kid || p.hitT > 0 || !p.vis) return false;
      const dx = p.cx - fromX, dz = p.cz - fromZ, d = Math.hypot(dx, dz) || 1;
      p.panicX = dx / d; p.panicZ = dz / d; p.panicT = 4.5; p.hitT = 3;
      return true;
    },
  };
  update(0, { x: 1e9, z: 1e9 });
  return api;
}
