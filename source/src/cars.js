// Parked cars (baked spots) and moving traffic that drives the real street graph.
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { decode } from "./decode.js";
import { snowy, glossy } from "./env.js";

export const PAINT = [0xf2f2ef, 0xf2f2ef, 0x1c1d20, 0x1c1d20, 0x9fa3a8, 0x9fa3a8, 0x5d6166, 0x2b3d5c, 0x8c1c1c, 0x2e4a33, 0x6b5a45, 0xc9c2b0, 0x1f5f8b];
const tint = (g, hex) => { const c = new THREE.Color(hex), a = new Float32Array(g.attributes.position.count * 3); for (let i = 0; i < a.length; i += 3) a.set([c.r, c.g, c.b], i); g.setAttribute("color", new THREE.BufferAttribute(a, 3)); return g; };

// side profile (x = length, y = height) extruded across the width; local +x is the front
export function carGeometries() {
  const prof = [[-2.17, 0.3], [2.1, 0.3], [2.18, 0.55], [2.06, 0.8], [0.95, 0.92], [0.2, 1.42], [-1.35, 1.44], [-2.0, 1.05], [-2.17, 0.95]];
  const shape = new THREE.Shape(prof.map(([x, y]) => new THREE.Vector2(x, y)));
  const body = new THREE.ExtrudeGeometry(shape, { depth: 1.76, bevelEnabled: false }).translate(0, 0, -0.88);
  const at = (a, b, y) => [a[0] + ((b[0] - a[0]) * (y - a[1])) / (b[1] - a[1]), y]; // point on a profile edge at height y
  const glassPts = [[0.95, 0.92], at(prof[4], prof[5], 1.37), at(prof[7], prof[6], 1.39), [-2.0, 1.05]];
  const glass = new THREE.ExtrudeGeometry(new THREE.Shape(glassPts.map(([x, y]) => new THREE.Vector2(x, y))), { depth: 1.8, bevelEnabled: false }).translate(0, 0, -0.9);
  const wheels = [];
  for (const x of [1.32, -1.38]) for (const z of [0.79, -0.79]) wheels.push(new THREE.CylinderGeometry(0.32, 0.32, 0.22, 12).rotateX(Math.PI / 2).translate(x, 0.32, z));
  const lights = [];
  for (const z of [0.6, -0.6]) {
    lights.push(tint(new THREE.BoxGeometry(0.06, 0.12, 0.34).translate(2.15, 0.68, z), 0xf6f3e6));
    lights.push(tint(new THREE.BoxGeometry(0.06, 0.12, 0.3).translate(-2.18, 0.84, z), 0xa31515));
  }
  const strip = (g) => { const n = g.index ? g.toNonIndexed() : g; n.deleteAttribute("uv"); return n; };
  const detail = mergeGeometries([tint(glass, 0x1d252c), ...wheels.map((w) => tint(w.toNonIndexed(), 0x18181a))].map(strip));
  body.deleteAttribute("uv");
  return { body, detail, lamps: mergeGeometries(lights.map(strip)) };
}

function busGeometries() { // a 12 m town bus, front at +x
  const strip = (g) => { const n = g.index ? g.toNonIndexed() : g; n.deleteAttribute("uv"); return n; };
  const body = new THREE.BoxGeometry(11.8, 2.55, 2.5).translate(0, 1.625, 0);
  body.deleteAttribute("uv");
  const parts = [tint(new THREE.BoxGeometry(10.6, 0.95, 2.54).translate(-0.4, 2.0, 0), 0x1d252c), tint(new THREE.BoxGeometry(0.06, 1.45, 2.3).translate(5.92, 1.95, 0), 0x1d252c)];
  for (const x of [3.9, -3.3]) for (const z of [1.12, -1.12]) parts.push(tint(new THREE.CylinderGeometry(0.5, 0.5, 0.3, 14).rotateX(Math.PI / 2).translate(x, 0.5, z), 0x18181a));
  const lamps = [];
  for (const z of [0.95, -0.95]) { lamps.push(tint(new THREE.BoxGeometry(0.06, 0.16, 0.36).translate(5.92, 0.75, z), 0xf6f3e6)); lamps.push(tint(new THREE.BoxGeometry(0.06, 0.2, 0.3).translate(-5.92, 0.95, z), 0xa31515)); }
  return { body, detail: mergeGeometries(parts.map(strip)), lamps: mergeGeometries(lamps.map(strip)) };
}

function headlights(n) { // warm pools on the road ahead of moving vehicles after dark
  const c = document.createElement("canvas"); c.width = 128; c.height = 64;
  const g = c.getContext("2d"), grd = g.createRadialGradient(20, 32, 2, 40, 32, 70);
  grd.addColorStop(0, "rgba(255,255,255,0.95)"); grd.addColorStop(0.6, "rgba(255,255,255,0.25)"); grd.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grd; g.fillRect(0, 0, 128, 64);
  const mat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), color: 0xfff0cc, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
  const mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(11, 4.2).rotateX(-Math.PI / 2), mat, n);
  mesh.frustumCulled = false; mesh.renderOrder = 2; mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
  return {
    mesh,
    place: (i, x, y, z, yaw) => mesh.setMatrixAt(i, m.compose(p.set(x, y, z), q.setFromAxisAngle(up, yaw), one)),
    update: (night) => { mat.opacity = night * 0.5; mesh.visible = night > 0.02; mesh.instanceMatrix.needsUpdate = true; },
  };
}

function pair(geo, n) { // body (painted per car), glass + wheels, and unlit head/tail lamps
  const body = new THREE.InstancedMesh(geo.body, glossy(snowy(new THREE.MeshStandardMaterial({ roughness: 0.35, metalness: 0.4 }))), n); // paint: glossy, reflects the sky
  const det = new THREE.InstancedMesh(geo.detail, glossy(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.15, metalness: 0.2, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 })), n);
  const lamps = new THREE.InstancedMesh(geo.lamps, new THREE.MeshBasicMaterial({ vertexColors: true }), n);
  for (const im of [body, det]) { im.castShadow = im.receiveShadow = true; }
  return [body, det, lamps];
}

export function buildCars(city, graph, groundAt) {
  const geo = carGeometries(), C = decode(city.cars, Int16Array), n = C.length / 3;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), qp = new THREE.Quaternion(), p = new THREE.Vector3(), s = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), zAx = new THREE.Vector3(0, 0, 1), col = new THREE.Color();
  const pose = (x, z, yaw, y, pitch, k, mesh, i) => {
    q.setFromAxisAngle(up, yaw).multiply(qp.setFromAxisAngle(zAx, pitch));
    const v = (k * 0.6180339) % 1;
    if (k < 0) s.set(1, 1, 1); else s.set(0.92 + v * 0.18, 0.95 + ((v * 7) % 1) * 0.22, 1);
    m.compose(p.set(x, y, z), q, s);
    for (const im of mesh) im.setMatrixAt(i, m);
  };
  const parked = pair(geo, n), pdata = [];
  let segs = new Float32Array(n * 20), segOff = 0;
  const place = (i, x, z, yaw) => { // pose + collision box (ax, az, bx, bz, top) for the walker
    const fx = Math.cos(yaw), fz = -Math.sin(yaw), pitch = Math.atan2(groundAt(x + fx * 1.8, z + fz * 1.8) - groundAt(x - fx * 1.8, z - fz * 1.8), 3.6);
    pose(x, z, yaw, groundAt(x, z) - 0.02, pitch, i, parked, i);
    const corners = [[2.2, 0.9], [-2.2, 0.9], [-2.2, -0.9], [2.2, -0.9]].map(([u, w]) => [x + fx * u + fz * w, z + fz * u - fx * w]);
    for (let c = 0; c < 4; c++) segs.set([...corners[c], ...corners[(c + 1) % 4], groundAt(x, z) + 1.5], segOff + i * 20 + c * 5);
    const v = (i * 0.6180339) % 1;
    pdata[i] = { x, z, yaw, paint: PAINT[(i * 7919) % PAINT.length], sx: 0.92 + v * 0.18, sy: 0.95 + ((v * 7) % 1) * 0.22 };
  };
  for (let i = 0; i < n; i++) { place(i, C[i * 3] / 10, C[i * 3 + 1] / 10, C[i * 3 + 2] / 1000); parked[0].setColorAt(i, col.setHex(pdata[i].paint)); }
  for (const im of parked) im.computeBoundingSphere();
  const zero = new THREE.Matrix4().makeScale(0, 0, 0);
  const parkedApi = { // lets the player take a parked car and leave it somewhere else
    n, get: (i) => pdata[i],
    hide: (i) => { for (const im of parked) { im.setMatrixAt(i, zero); im.instanceMatrix.needsUpdate = true; } for (let c = 0; c < 4; c++) segs[segOff + i * 20 + c * 5 + 4] = -1e4; },
    place: (i, x, z, yaw) => { place(i, x, z, yaw); for (const im of parked) { im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); } },
    bind: (arr, off) => { arr.set(segs.subarray(0, n * 20), off); segs = arr; segOff = off; }, // collisions now live in the world's array
  };

  // traffic: agents hop node to node, never straight back unless it's a dead end. Cars plus two town buses.
  const nodes = graph.filter((nd) => nd.out.length), TRAFFIC = Math.min(48, Math.floor(nodes.length / 10));
  let seed = 12345; const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const pick = (from, prev) => {
    const out = graph[from].out, opts = out.filter((e) => e.to !== prev), list = opts.length ? opts : out;
    let tot = list.reduce((a, e) => a + e.d, 0), x = rnd() * tot;
    for (const e of list) if ((x -= e.d) <= 0) return e;
    return list[list.length - 1];
  };
  const fleets = [
    { n: TRAFFIC, meshes: pair(geo, TRAFFIC), paint: (i) => PAINT[(i * 104729) % PAINT.length], speed: 1, half: 2.2, width: 0.9, vary: true },
    { n: 2, meshes: pair(busGeometries(), 2), paint: (i) => [0xf1f1ec, 0xd8b42c][i], speed: 0.72, half: 5.9, width: 1.25, vary: false },
  ];
  const lights = headlights(TRAFFIC + 2);
  for (const f of fleets) {
    f.agents = [];
    for (let i = 0; i < f.n; i++) {
      const from = graph.indexOf(nodes[Math.floor(rnd() * nodes.length)]);
      f.agents.push({ from, e: pick(from, -1), t: rnd() * 5, v: 0, yaw: null });
      f.meshes[0].setColorAt(i, col.setHex(f.paint(i)));
    }
    for (const im of f.meshes) { im.frustumCulled = false; im.instanceMatrix.setUsage(THREE.DynamicDrawUsage); }
  }

  const out = { meshes: [...parked, ...fleets.flatMap((f) => f.meshes), lights.mesh], segs: Array.from(segs), count: n, traffic: TRAFFIC + 2, nearest: Infinity, parked: parkedApi, agentPos: [] };
  // each vehicle as a capsule for collisions: [x, z, halfWidth, fx, fz, halfLength (centre to cap centre), y]; starts far away until the first update
  const ap = fleets.flatMap((f) => f.agents.map(() => [1e9, 1e9, f.width, 1, 0, f.half - f.width, 0])); out.agentPos = ap;
  // is vehicle j in vehicle i's lane within gap metres of its nose?
  const inLane = (i, j, gap) => {
    const a = ap[i], b = ap[j], dx = b[0] - a[0], dz = b[1] - a[1], fwd = dx * a[3] + dz * a[4];
    return fwd > 0 && fwd < a[5] + a[2] + b[5] + b[2] + gap && Math.abs(dz * a[3] - dx * a[4]) < a[2] + b[2] && Math.abs(a[6] - b[6]) < 3;
  };
  const update = (dt, player, night = 0) => {
    out.nearest = Infinity;
    let li = 0, ai = 0;
    for (const f of fleets) f.agents.forEach((a, i) => {
      let A = graph[a.from], B = graph[a.e.to], dx = B.x - A.x, dz = B.z - A.z, L = Math.hypot(dx, dz) || 0.01;
      // queue behind the vehicle ahead; when two face each other the higher index waits, and after 8 s stuck a car squeezes through
      // out.suspect flees (faster, squeezes past, ignores sirens) until out.caught pulls it over
      const sus = ai === out.suspect, caught = ai === out.caught;
      let queued = false;
      if (!(a.ghost > 0) && !sus) for (let j = 0; j < ap.length && !queued; j++) if (j !== ai && inLane(ai, j, 2 + a.v * 0.9) && !(inLane(j, ai, 2) && ai < j)) queued = true;
      a.ghost = (a.ghost || 0) - dt; a.jam = queued ? (a.jam || 0) + dt : 0;
      if (a.jam > 8) { a.jam = 0; a.ghost = 3; }
      // brake for the walker if they stand in our lane just ahead
      const px = player.x - (A.x + (dx / L) * a.t), pz = player.z - (A.z + (dz / L) * a.t), ahead = (px * dx + pz * dz) / L, side = Math.abs((pz * dx - px * dz) / L - a.e.off);
      const blocked = ahead > 0 && ahead < f.half + 7 && side < 1.6 && Math.abs(player.y - A.y) < 3;
      // out.siren {x, z, fx, fz}: an emergency vehicle with blue lights; traffic ahead of it moves to the kerb and stops
      const S = out.siren, c0 = ap[ai], along = S ? (c0[0] - S.x) * S.fx + (c0[1] - S.z) * S.fz : 0;
      const give = !!S && !sus && along > -3 && Math.hypot(c0[0] - S.x, c0[1] - S.z) < 55;
      a.pull = (a.pull || 0) + ((give || caught ? 1 : 0) - (a.pull || 0)) * Math.min(1, dt * 1.2);
      const top = give ? 3.5 : a.e.v * f.speed * (sus && !caught ? 1.45 : 1);
      a.v = blocked || queued || caught || (give && along < 40) ? Math.max(0, a.v - 9 * dt) : a.v > top ? Math.max(top, a.v - 6 * dt) : Math.min(top, a.v + 2.6 * f.speed * dt);
      a.wait = blocked ? (a.wait || 0) + dt : 0;
      if (a.wait > 2.5 && !a.honked && !S) { a.honked = true; out.honk = true; } // you're in the way
      if (!blocked) a.honked = false;
      a.t += a.v * dt;
      while (a.t >= L) {
        a.t -= L; const prev = a.from; a.from = a.e.to; a.e = pick(a.from, prev);
        A = graph[a.from]; B = graph[a.e.to]; dx = B.x - A.x; dz = B.z - A.z; L = Math.hypot(dx, dz) || 0.01;
      }
      const u = a.t / L, ux = dx / L, uz = dz / L, target = Math.atan2(-uz, ux);
      if (a.yaw == null) a.yaw = target;
      let d = target - a.yaw; d = Math.atan2(Math.sin(d), Math.cos(d)); a.yaw += d * Math.min(1, dt * (f.vary ? 6 : 3));
      const off = a.e.off + a.pull * 1.7, x = A.x + dx * u - uz * off, z = A.z + dz * u + ux * off, y = A.y + (B.y - A.y) * u;
      pose(x, z, a.yaw, y - 0.04, Math.atan2(B.y - A.y, L), f.vary ? i : -1, f.meshes, i);
      lights.place(li++, x + Math.cos(a.yaw) * (f.half + 5), y + 0.1, z - Math.sin(a.yaw) * (f.half + 5), a.yaw);
      out.nearest = Math.min(out.nearest, Math.hypot(player.x - x, player.z - z, (player.y - A.y) * 2));
      const c = ap[ai++]; c[0] = x; c[1] = z; c[3] = Math.cos(a.yaw); c[4] = -Math.sin(a.yaw); c[6] = y;
    });
    for (const f of fleets) for (const im of f.meshes) im.instanceMatrix.needsUpdate = true;
    lights.update(night);
  };
  out.update = update;
  return out;
}
