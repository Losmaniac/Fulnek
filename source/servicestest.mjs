// emergency services test: drive each service vehicle, siren makes traffic pull over, and finish a police, fire and ambulance call
// node servicestest.mjs [shotdir]   (after a build: needs dist/index.html and dist/data)
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const out = process.argv[2] || "shots-services";
mkdirSync(out, { recursive: true });
let fails = 0;
const check = (name, ok, info = "") => { console.log(`${ok ? "ok  " : "FAIL"} ${name} ${info}`); if (!ok) fails++; };
const args = ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"];
const browser = await chromium.launch({ args }).catch(() => chromium.launch({ args, channel: "msedge" })); // no Playwright download: use Windows Edge
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.goto("file://" + resolve("dist/index.html"));
await page.waitForFunction(() => document.body.classList.contains("ready"), null, { timeout: 180000 });
const shot = async (name) => { await page.waitForTimeout(3000); await page.screenshot({ path: `${out}/${name}.png`, timeout: 180000 }); };

// helpers inside the page: get into service vehicle k, move it, get out, run the dispatcher for a while
await page.evaluate(() => {
  document.getElementById("start").hidden = true;
  const f = window.__fulnek; Object.assign(f.world.env.st, { hour: 11, timer: 1e9 });
  window.T = {
    f, v: (k) => f.services.fleet.find((v) => v.kind === k),
    enter: (k) => { const v = T.v(k), lx = -Math.sin(v.yaw), lz = -Math.cos(v.yaw); f.teleport(v.x + lx * (v.w + 0.8), v.z + lz * (v.w + 0.8)); return f.veh.enter(f.state()); },
    drive: (x, z, yaw = T.f.veh.st.yaw) => { Object.assign(f.veh.st, { x, z, yaw, v: 0 }); f.veh.view(0.016, 0, 0, 0); },
    out: () => { f.veh.st.v = 0; return f.veh.exit({ set(x, y, z) { this.x = x; this.y = y; this.z = z; }, x: 0, y: 0, z: 0 }) },
    run: (sec, firing = false, pos) => { for (let t = 0; t < sec; t += 1 / 60) f.services.update(1 / 60, { pos: pos || (f.veh.st.mode === "walk" ? f.state() : f.veh.st), firing }); },
  };
});

const fleet = await page.evaluate(() => T.f.services.fleet.map((v) => ({ kind: v.kind, x: +v.x.toFixed(1), z: +v.z.toFixed(1), home: v.home.n })));
check("three vehicles at the real stations", fleet.length === 3, JSON.stringify(fleet));
await page.evaluate(() => { const v = T.v("police"); T.f.pose(v.x - 9, v.z + 6, Math.atan2(9, -6), -0.15); });
await shot("police-at-station");
await page.evaluate(() => { const v = T.v("fire"); T.f.pose(v.x + Math.cos(v.yaw) * 4 + Math.sin(v.yaw) * 14, v.z - Math.sin(v.yaw) * 4 + Math.cos(v.yaw) * 14, v.yaw + Math.PI, -0.12); });
await shot("fire-and-ambulance-at-sdh");

// police: siren on, traffic pulls over, chase and arrest
const police = await page.evaluate(() => {
  const f = T.f, r = { entered: T.enter("police") };
  f.press("KeyL"); T.run(0.1); r.siren = !!f.world.cars.siren;
  // traffic yields: put the siren 15 m behind car 0 and let traffic run
  const C = f.world.cars, a = C.agentPos[0], saved = C.siren, far = { x: 1e9, y: 0, z: 1e9 };
  C.siren = { x: a[0] - a[3] * 15, z: a[1] - a[4] * 15, fx: a[3], fz: a[4] };
  for (let k = 0; k < 150; k++) C.update(1 / 30, far);
  const p1 = [a[0], a[1]]; for (let k = 0; k < 30; k++) C.update(1 / 30, far);
  r.yieldMoved = +Math.hypot(a[0] - p1[0], a[1] - p1[1]).toFixed(2); C.siren = saved;
  for (let k = 0; k < 10 && f.services.call()?.type !== "suspect"; k++) f.services.newCall();
  const c = f.services.call(); r.call = c?.type;
  if (c?.type !== "suspect") return r;
  const s = C.agentPos[c.idx]; T.drive(s[0] - s[3] * 9, s[1] - s[4] * 9, Math.atan2(-s[4], s[3]));
  T.run(5); r.caught = C.caught === c.idx;
  const m0 = f.errands.money(); r.out = T.out();
  f.teleport(s[0] - s[4] * (s[2] + 1), s[1] + s[3] * (s[2] + 1)); r.hint = f.services.hint(f.state());
  r.arrest = f.press("KeyE"); r.paid = f.errands.money() - m0; r.after = f.services.call()?.type || null;
  return r;
});
check("police car: enter, siren on", police.entered === "service" && police.siren, JSON.stringify(police));
check("traffic ahead pulls over and stops", police.yieldMoved < 0.5, `(moved ${police.yieldMoved} m in the last second)`);
check("suspect call: caught, arrested, paid", police.caught && police.arrest && police.paid === 700 && police.after === null);

// fire: drive to the fire, get out, spray
const fire = await page.evaluate(async () => {
  const f = T.f, r = { entered: T.enter("fire") }; T.run(0.1);
  f.services.newCall(); const c = f.services.call(); r.call = c?.type;
  if (c?.type !== "fire") return r;
  T.drive(c.x + 18, c.z + 2); r.out = T.out(); T.run(0.1);
  const px = c.x + 10, pz = c.z + 3, dx = c.x - px, dz = c.z - pz;
  f.pose(px, pz, Math.atan2(-dx, -dz), Math.atan2(c.y + 2 - (f.world.groundAt(px, pz) + 1.7), Math.hypot(dx, dz)));
  window.FIRE = { c, px, pz };
  return r;
});
await shot("fire-call");
const fire2 = await page.evaluate(() => {
  const f = T.f, c = FIRE.c, m0 = f.errands.money(), r = { hose: f.services.hose(f.state()), hint: f.services.hint(f.state()) };
  T.run(12, true); r.paid = f.errands.money() - m0; r.after = f.services.call()?.type || null; r.hp = c.hp;
  return r;
});
check("fire call: hose, fire out, paid", fire.call === "fire" && fire2.hose && fire2.paid === 900 && fire2.after === null, JSON.stringify({ ...fire, ...fire2 }));

// ambulance: reach the patient, first aid, load, back to base
const amb = await page.evaluate(() => {
  const f = T.f, r = { entered: T.enter("ambulance") }; T.run(0.1);
  f.services.newCall(); const c = f.services.call(); r.call = c?.type;
  if (c?.type !== "patient") return r;
  T.drive(c.x + 5, c.z); r.out = T.out();
  f.teleport(c.x + 1.2, c.z); r.hint = f.services.hint(f.state()); r.e = f.press("KeyE");
  T.run(6, false, { x: c.x + 1.2, z: c.z }); r.treated = c.treated; r.aboard = c.aboard;
  r.back = T.enter("ambulance"); const v = T.v("ambulance"), m0 = f.errands.money();
  T.drive(v.home.x + 3, v.home.z); T.run(0.2); r.paid = f.errands.money() - m0; r.after = f.services.call()?.type || null;
  return r;
});
check("ambulance call: first aid, aboard, delivered, paid", amb.treated && amb.aboard && amb.paid >= 800 && amb.after === null, JSON.stringify(amb));

// night look: police car with blue lights on
await page.evaluate(() => { const f = T.f; Object.assign(f.world.env.st, { hour: 22.5 }); T.out(); T.enter("police"); const v = T.v("police"); v.siren = true; T.out(); const px = v.x - Math.sin(v.yaw) * 9, pz = v.z - Math.cos(v.yaw) * 9; f.pose(px, pz, Math.atan2(-(v.x - px), -(v.z - pz)), -0.1); });
await shot("police-night-lights");

check("no page errors", !errors.length, errors.join(" | "));
await browser.close();
process.exit(fails ? 1 : 0);
