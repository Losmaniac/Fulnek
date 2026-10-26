// collision test: shots stop at walls, the walker is pushed out of traffic, traffic doesn't drive through traffic, the car knocks people aside
// node collidetest.mjs   (after a build: needs dist/index.html and dist/data)
import { chromium } from "playwright";
import { resolve } from "node:path";
import * as THREE from "three";
import { wallAt } from "./src/crime.js";

let fails = 0;
const check = (name, ok, info = "") => { console.log(`${ok ? "ok  " : "FAIL"} ${name} ${info}`); if (!ok) fails++; };

// wallAt on one 10 m wall along x at z = -5, 6 m tall
const segs = [-5, -5, 5, -5, 6], all = (x, z, fn) => fn(0), o = new THREE.Vector3(0, 1.7, 0);
check("wall ahead stops the shot", Math.abs(wallAt(all, segs, o, new THREE.Vector3(0, 0, -1), 90) - 5) < 1e-6);
check("shot over the roof passes", wallAt(all, segs, o, new THREE.Vector3(0, 0.8, -0.6).normalize(), 90) === 90);
check("shot beside the wall passes", wallAt(all, segs, o, new THREE.Vector3(1, 0, -0.2).normalize(), 90) === 90);
check("shot away from the wall passes", wallAt(all, segs, o, new THREE.Vector3(0, 0, 1), 90) === 90);
check("wall beyond range is ignored", wallAt(all, segs, o, new THREE.Vector3(0, 0, -1), 4) === 4);

const args = ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"];
const browser = await chromium.launch({ args }).catch(() => chromium.launch({ args, channel: "msedge" })); // no Playwright download: use Windows Edge
const page = await browser.newPage({ viewport: { width: 640, height: 400 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.goto("file://" + resolve("dist/index.html"));
await page.waitForFunction(() => document.body.classList.contains("ready"), null, { timeout: 180000 });
await page.evaluate(() => { Object.assign(window.__fulnek.world.env.st, { hour: 11, timer: 1e9 }); });

// traffic vs traffic: sample capsule overlaps while the town drives (start screen up, traffic still runs)
const overlap = async () => page.evaluate(() => {
  const A = window.__fulnek.world.cars.agentPos, seg = (p, a) => { const t = Math.max(-a[5], Math.min(a[5], (p[0] - a[0]) * a[3] + (p[1] - a[1]) * a[4])); return Math.hypot(p[0] - a[0] - a[3] * t, p[1] - a[1] - a[4] * t); };
  const ends = (a) => [[a[0] - a[3] * a[5], a[1] - a[4] * a[5]], [a[0], a[1]], [a[0] + a[3] * a[5], a[1] + a[4] * a[5]]];
  let n = 0;
  for (let i = 0; i < A.length; i++) for (let j = i + 1; j < A.length; j++) {
    if (Math.abs(A[i][6] - A[j][6]) > 3) continue;
    const d = Math.min(...ends(A[i]).map((p) => seg(p, A[j])), ...ends(A[j]).map((p) => seg(p, A[i])));
    if (d < A[i][2] + A[j][2] - 0.5) n++; // clearly inside each other
  }
  return n;
});
let samples = 0, bad = 0, worst = 0;
for (let k = 0; k < 40; k++) { await page.waitForTimeout(500); const n = await overlap(); samples++; if (n) bad++; worst = Math.max(worst, n); }
const moved = await page.evaluate(() => { // 20 s of traffic in fixed steps, independent of the slow software frame rate
  const C = window.__fulnek.world.cars, far = { x: 1e9, y: 0, z: 1e9 }, p0 = C.agentPos.map((a) => [a[0], a[1]]);
  for (let k = 0; k < 600; k++) C.update(1 / 30, far);
  return { n: p0.length, ok: C.agentPos.filter((a, i) => Math.hypot(a[0] - p0[i][0], a[1] - p0[i][1]) > 5).length };
});
check("traffic keeps moving (no gridlock)", moved.ok > 0.6 * moved.n, `(${moved.ok} of ${moved.n} vehicles moved over 5 m in 20 s)`);
check("traffic rarely overlaps traffic", bad / samples <= 0.25, `(${bad}/${samples} samples with an overlap, worst ${worst} pairs)`);

// walker vs traffic: stand on each vehicle, take one step, measure the gap
console.log(await page.evaluate(() => {
  document.getElementById("start").hidden = true;
  const f = window.__fulnek, A = f.world.cars.agentPos;
  let inside = 0;
  for (const a of A) {
    f.teleport(a[0] + 0.1, a[1] + 0.1, a[6]); f.sim(1 / 30);
    const s = f.state(), t = Math.max(-a[5], Math.min(a[5], (s.x - a[0]) * a[3] + (s.z - a[1]) * a[4])), d = Math.hypot(s.x - a[0] - a[3] * t, s.z - a[1] - a[4] * t);
    if (d < 0.35 + a[2] - 0.05) inside++;
  }
  return `walker left inside ${inside} of ${A.length} vehicles`;
}).then((r) => { check("walker pushed out of traffic", r.startsWith("walker left inside 0 "), r); return ""; }));

// shots: a person in front of a wall gets hit, a person behind it does not
const shot = await page.evaluate(async () => {
  const f = window.__fulnek, P = f.world.people, segs = f.world.segs, wait = () => new Promise((r) => setTimeout(r, 1500));
  let man = -1; for (let k = 0; k < P.count; k++) { const p = P.person(k); if (p.vis && p.idle && !p.sit && !p.kid) { man = k; break; } }
  if (man < 0) return { err: "no idle adult" };
  const p = P.person(man);
  let tries = 0;
  for (let s = 0; s < segs.length / 5 && tries < 8; s++) { // a long, tall building wall
    const o = s * 5, ax = segs[o], az = segs[o + 1], bx = segs[o + 2], bz = segs[o + 3], L = Math.hypot(bx - ax, bz - az);
    if (L < 8 || segs[o + 4] - f.world.groundAt(ax, az) < 5) continue;
    tries++;
    const mx = (ax + bx) / 2, mz = (az + bz) / 2, nx = -(bz - az) / L, nz = (bx - ax) / L, g = f.world.groundAt(mx, mz);
    const aim = (x, z) => { const dx = -nx, dz = -nz; f.pose(mx + nx * 6, mz + nz * 6, Math.atan2(-dx, -dz), Math.atan2(-(1.7 - 1.2), Math.hypot(x - (mx + nx * 6), z - (mz + nz * 6))), g); };
    const fire = async (side) => {
      p.hitT = 0; p.panicT = 0; p.x = mx + nx * side; p.z = mz + nz * side; aim(p.x, p.z); await wait();
      if (Math.abs(f.state().x - (mx + nx * 6)) > 0.2) return null; // the player's spot is blocked
      f.crime.select(0); let fired = false; for (let k = 0; k < 10 && !fired; k++) if (!(fired = f.crime.shoot("walk"))) await wait(); // slow software frames: wait out the cooldown
      await wait();
      return { fired, hit: p.hitT > 0 };
    };
    const front = await fire(2); if (!front || !front.fired || !front.hit) continue; // need a clear line to the wall first
    const behind = await fire(-2);
    return { wall: s, front, behind };
  }
  return { err: "no usable wall" };
});
check("shot hits a person in front of a wall", shot.front?.hit === true, JSON.stringify(shot));
check("shot doesn't hit a person behind the wall", shot.behind?.fired === true && shot.behind.hit === false);

// car vs people: drive at an adult walker at 12 m/s
const car = await page.evaluate(() => {
  const f = window.__fulnek, P = f.world.people, c = f.world.cars.parked.get(0);
  if (!f.veh.enter({ x: c.x, z: c.z })) return { err: "couldn't enter" };
  for (let k = 0; k < P.count; k++) {
    const p = P.person(k); if (!p.vis || p.kid || p.idle || p.hitT > 0) continue;
    Object.assign(f.veh.st, { x: p.cx - 4, z: p.cz, yaw: 0, v: 12 }); const v0 = f.crime.wanted();
    f.sim(0.5);
    if (Math.abs(f.veh.st.x - (p.cx - 4)) < 1) continue; // a wall stopped the car
    return { person: k, knocked: p.panicT > 0, wanted: f.crime.wanted() - v0 };
  }
  return { err: "no walker" };
});
check("car knocks a walker aside and raises wanted", car.knocked === true && car.wanted >= 1, JSON.stringify(car));

check("no page errors", !errors.length, errors.join(" | "));
await browser.close();
process.exit(fails ? 1 : 0);
