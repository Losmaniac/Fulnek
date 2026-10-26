// Birds: flocks wheeling over the town, and pigeons on the square that scatter when you walk up to them.
import * as THREE from "three";

function birdGeometries() {
  const body = new THREE.ConeGeometry(0.07, 0.34, 5).rotateZ(-Math.PI / 2); // points along +x
  const wing = new THREE.BufferGeometry(); // right wing in the x-z plane, hinged at the body
  wing.setAttribute("position", new THREE.Float32BufferAttribute([0.08, 0, 0.02, -0.08, 0, 0.02, -0.02, 0, 0.34], 3));
  wing.setAttribute("normal", new THREE.Float32BufferAttribute([0, 1, 0, 0, 1, 0, 0, 1, 0], 3));
  return { body, wing };
}

export function buildFauna(spawn, groundAt) {
  const [sx, sz] = spawn, G = birdGeometries();
  const FLOCKS = 4, PER = 14, PIGEONS = 22, n = FLOCKS * PER + PIGEONS;
  const mat = new THREE.MeshLambertMaterial({ side: THREE.DoubleSide });
  const mk = (g, k) => { const m = new THREE.InstancedMesh(g, mat, k); m.frustumCulled = false; m.castShadow = true; m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); return m; };
  const body = mk(G.body, n), wl = mk(G.wing, n), wr = mk(G.wing, n);
  const col = new THREE.Color();
  let seed = 4242; const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const birds = [];
  for (let f = 0; f < FLOCKS; f++) {
    const cx = sx + (rnd() - 0.5) * 900, cz = sz + (rnd() - 0.5) * 700, alt = 35 + rnd() * 45, R = 60 + rnd() * 120, sp = (0.12 + rnd() * 0.1) * (rnd() < 0.5 ? 1 : -1);
    for (let k = 0; k < PER; k++) birds.push({ kind: "flock", cx, cz, alt, R: R + (rnd() - 0.5) * 30, a: rnd() * 0.6 + k * 0.05, sp, dy: (rnd() - 0.5) * 8, ph: rnd() * 6, flap: 9 + rnd() * 3, s: 1.3 });
  }
  const spot = () => { const a = rnd() * 6.283, r = 3 + rnd() * 26; return [sx + Math.cos(a) * r, sz + Math.sin(a) * r]; };
  for (let k = 0; k < PIGEONS; k++) { const [x, z] = spot(); birds.push({ kind: "pigeon", x, z, y: groundAt(x, z), yaw: rnd() * 6.3, state: "ground", t: 0, ph: rnd() * 6, s: 1, vx: 0, vy: 0, vz: 0, tx: x, tz: z }); }
  birds.forEach((b, i) => {
    const c = b.kind === "pigeon" ? col.setHSL(0.62, 0.06, 0.42 + rnd() * 0.12) : col.setHex(0x1b1b1e);
    body.setColorAt(i, c); wl.setColorAt(i, c); wr.setColorAt(i, c);
  });

  const base = new THREE.Matrix4(), part = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), p = new THREE.Vector3(), s = new THREE.Vector3(), mirror = new THREE.Matrix4().makeScale(1, 1, -1);
  const update = (dt, player, t) => {
    birds.forEach((b, i) => {
      let x, y, z, yaw, flap = 0;
      if (b.kind === "flock") {
        b.a += (b.sp * dt * 60) / b.R;
        x = b.cx + Math.cos(b.a) * b.R; z = b.cz + Math.sin(b.a) * b.R; y = Math.max(groundAt(x, z) + 15, b.alt + Math.sin(t * 0.3 + b.ph) * 6 + b.dy);
        yaw = Math.atan2(-(Math.cos(b.a) * Math.sign(b.sp)), -Math.sin(b.a) * Math.sign(b.sp));
        const glide = Math.sin(t * 0.5 + b.ph) > 0.3; // flap, then glide
        flap = glide ? 0.15 : Math.sin(t * b.flap + b.ph) * 0.9;
      } else {
        const d = Math.hypot(player.x - b.x, player.z - b.z);
        if (b.state === "ground") {
          b.t -= dt;
          if (d < 5.5 && Math.abs(player.y - b.y) < 3) { // startled: burst up and away from the walker
            b.state = "fly"; b.t = 3 + rnd() * 3;
            const ax = (b.x - player.x) / (d || 1), az = (b.z - player.z) / (d || 1);
            b.vx = ax * 6 + (rnd() - 0.5) * 3; b.vz = az * 6 + (rnd() - 0.5) * 3; b.vy = 4 + rnd() * 2;
          } else if (b.t < 0) { b.t = 1 + rnd() * 3; b.yaw += (rnd() - 0.5) * 2; }
          else { const step = 0.25 * dt; b.x += Math.cos(b.yaw) * step; b.z -= Math.sin(b.yaw) * step; }
          b.y = groundAt(b.x, b.z);
          flap = -1.2; // wings folded
        } else if (b.state === "fly") {
          b.t -= dt; b.vy -= 0.8 * dt;
          b.x += b.vx * dt; b.y += b.vy * dt; b.z += b.vz * dt;
          flap = Math.sin(t * 22 + b.ph) * 1.0;
          if (b.t < 0) { b.state = "land"; [b.tx, b.tz] = spot(); }
        } else { // glide back down to a new spot on the square
          const dx = b.tx - b.x, dz = b.tz - b.z, dd = Math.hypot(dx, dz), gy = groundAt(b.tx, b.tz);
          const sp = Math.min(7, dd * 1.5 + 1);
          b.vx = (dx / (dd || 1)) * sp; b.vz = (dz / (dd || 1)) * sp; b.vy = (gy - b.y) * 0.8;
          b.x += b.vx * dt; b.y += b.vy * dt; b.z += b.vz * dt;
          flap = Math.sin(t * 16 + b.ph) * 0.7;
          if (dd < 0.4) { b.state = "ground"; b.t = 2; }
        }
        x = b.x; y = b.y + 0.12; z = b.z;
        yaw = b.state === "ground" ? b.yaw : Math.atan2(-b.vz, b.vx);
        if (b.state !== "ground") b.yaw = yaw;
      }
      base.compose(p.set(x, y, z), q.setFromAxisAngle(up, yaw), s.setScalar(b.s));
      if (b.kind === "pigeon" && b.state === "ground") base.multiply(part.makeRotationZ(Math.max(0, Math.sin(t * 3 + b.ph)) * -0.5)); // pecking
      body.setMatrixAt(i, base);
      wr.setMatrixAt(i, part.makeRotationX(-flap).premultiply(base));
      wl.setMatrixAt(i, part.makeRotationX(-flap).premultiply(mirror).premultiply(base)); // mirrored, so both wings rise together
    });
    for (const m of [body, wl, wr]) m.instanceMatrix.needsUpdate = true;
  };
  update(0, { x: 1e9, y: 0, z: 1e9 }, 0);
  return { meshes: [body, wl, wr], update };
}
