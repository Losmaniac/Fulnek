// drive test: take the nearest parked car, simulate driving at a fixed step, check speed, turning, slopes, walls; then a bike
import { chromium } from "playwright";
import { resolve } from "node:path";
const out = process.argv[2] || "/tmp/claude-0/drive";
const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
const page = await browser.newPage({ viewport: { width: 800, height: 500 } });
page.on("pageerror", (e) => console.log("pageerror", e.message));
await page.goto("file://" + resolve("dist/index.html"));
await page.waitForFunction(() => document.body.classList.contains("ready"), null, { timeout: 180000 });
const shot = async (n) => { await page.waitForTimeout(1500); await page.screenshot({ path: `${out}${n}.png`, timeout: 180000 }); };
const log = (o) => console.log(JSON.stringify(o));
log(await page.evaluate(() => {
  document.getElementById("start").hidden = true;
  const f = window.__fulnek, P = f.world.cars.parked; Object.assign(f.world.env.st, { hour: 13, timer: 1e9 });
  // a kerbside car on Masarykova (nearest parked car to the bike shop)
  let best = 0, bd = 1e9; for (let i = 0; i < P.n; i++) { const c = P.get(i), d = Math.hypot(c.x - 150, c.z + 160); if (d < bd) { bd = d; best = i; } }
  const c = P.get(best); f.teleport(c.x - Math.sin(c.yaw) * 2, c.z - Math.cos(c.yaw) * 2);
  const r = f.press("KeyE"), s = f.veh.st;
  // move onto a long straight bit of a real street so the test isn't boxed in by the neighbours
  for (const rd of window.FULNEK_CITY.roads) if (rd.k === "secondary" || rd.k === "tertiary") for (let k = 1; k < rd.p.length; k++) { const [ax, az] = rd.p[k - 1], [bx, bz] = rd.p[k]; if (Math.hypot(bx - ax, bz - az) > 60 && !s.moved) { s.x = ax + (bx - ax) * 0.1; s.z = az + (bz - az) * 0.1; s.yaw = Math.atan2(-(bz - az), bx - ax); s.moved = 1; } }
  f.keys.KeyW = true; f.sim(4); const v4 = s.v; f.keys.KeyW = false; f.keys.KeyS = true; f.sim(2); f.keys.KeyS = false;
  return { car: best, mode: s.mode, v4: v4 * 3.6, afterBrake: s.v, x: s.x, z: s.z, hit: s.hit };
}));
await shot(1);
log(await page.evaluate(() => { const f = window.__fulnek, s = f.veh.st; f.keys.KeyW = true; f.keys.KeyA = true; f.sim(2.5); f.keys.KeyA = false; f.sim(1); f.keys.KeyW = false; return { v: s.v * 3.6, yaw: s.yaw, x: s.x, z: s.z }; }));
await shot(2);
log(await page.evaluate(() => { const f = window.__fulnek; f.press("KeyC"); return f.veh.st.cam; }));
await shot(3);
log(await page.evaluate(() => { const f = window.__fulnek, s = f.veh.st; f.keys.KeyS = true; f.sim(3); f.keys.KeyS = false; const ok = f.press("KeyE"); return { ok, mode: s.mode, st: f.state() }; }));
log(await page.evaluate(() => { const f = window.__fulnek; f.teleport(134.6, -146.5); const r = f.press("KeyE"); f.keys.KeyW = true; f.sim(4); f.keys.KeyW = false; return { r, mode: f.veh.st.mode, v: f.veh.st.v * 3.6, st: f.state() }; }));
await shot(4);
await browser.close();
