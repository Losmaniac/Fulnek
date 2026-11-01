// interior self-check: enter every building from a wall and check the generated ground floor
// node interiortest.mjs   (reads ../data/city.js)
import { readFileSync } from "node:fs";
import { createInteriors } from "./src/interior.js";

globalThis.window = {};
new Function(readFileSync(new URL("../data/city.js", import.meta.url), "utf8"))();
const city = window.FULNEK_CITY, I = createInteriors(city);
const inside = (x, z, ring) => { let c = false; for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) { const [xi, zi] = ring[i], [xj, zj] = ring[j]; if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c; } return c; };
const segDist = (px, pz, s, o) => { const ax = s[o], az = s[o + 1], vx = s[o + 2] - ax, vz = s[o + 3] - az, L = vx * vx + vz * vz || 1, t = Math.max(0, Math.min(1, ((px - ax) * vx + (pz - az) * vz) / L)); return Math.hypot(px - ax - vx * t, pz - az - vz * t); };

let entered = 0, fails = 0, maxTris = 0, worst = null;
const kinds = {};
const t0 = Date.now();
city.buildings.forEach((b, i) => {
  const ring = b.r[0];
  // stand 0.6 m outside the middle of the longest wall, facing it
  let k = 0, best = 0; ring.forEach((p, j) => { const q = ring[(j + 1) % ring.length], l = Math.hypot(q[0] - p[0], q[1] - p[1]); if (l > best) { best = l; k = j; } });
  const [ax, az] = ring[k], [bx, bz] = ring[(k + 1) % ring.length], mx = (ax + bx) / 2, mz = (az + bz) / 2;
  let nx = (bz - az) / best, nz = -(bx - ax) / best; if (inside(mx + nx * 0.1, mz + nz * 0.1, ring)) { nx = -nx; nz = -nz; }
  const pos = { x: mx + nx * 0.6, z: mz + nz * 0.6 }, yaw = Math.atan2(nx, nz); // facing the wall: forward (-sin, -cos) = -n
  const e = I.near(pos, yaw);
  if (!e) return; // a wall shorter than 1.2 m or another building in the way: fine, it's entered from another side
  const fail = (m) => { fails++; if (fails < 15) console.log("FAIL", i, m); };
  if (e.i !== i && !inside(e.x - e.nx * 0.5, e.z - e.nz * 0.5, city.buildings[e.i].r[0])) return fail("entry is not on a building wall");
  const r = I.build(e), r2 = I.build(e);
  entered++; kinds[r.kind] = (kinds[r.kind] || 0) + 1;
  if (r.tris !== r2.tris || r.segs.length !== r2.segs.length) fail("not deterministic");
  if (!r.segs.every(Number.isFinite)) fail("non-finite collision segment");
  const own = city.buildings[e.i].r[0];
  if (!inside(r.start.x, r.start.z, own)) fail("start is outside the walls");
  let clear = Infinity; for (let o = 0; o < r.segs.length; o += 5) clear = Math.min(clear, segDist(r.start.x, r.start.z, r.segs, o));
  if (clear < 0.35) fail(`start is ${clear.toFixed(2)} m from a wall or furniture`);
  if (inside(r.out.x, r.out.z, own)) fail("exit point is inside the building");
  if (r.tris > maxTris) { maxTris = r.tris; worst = [e.i, r.kind, r.rooms]; }
  r.dispose();
});
console.log(JSON.stringify({ buildings: city.buildings.length, entered, kinds, maxTris, worst, ms: Date.now() - t0 }));
if (entered < city.buildings.length * 0.9) { console.log("FAIL too few buildings could be entered"); fails++; }
if (maxTris > 200000) { console.log("FAIL interior too heavy"); fails++; }
console.log(fails ? `${fails} failures` : "ok");
process.exit(fails ? 1 : 0);
