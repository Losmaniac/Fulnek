// every map tile: builds, runs a minute of traffic and people without an error, has ground and walls, unloads cleanly.
// node alltilestest.mjs  (after tiles.mjs; uses the real GPU through Edge when there is one)
import { chromium } from "playwright";
import { resolve } from "node:path";

const args = ["--use-angle=d3d11", "--force_high_performance_gpu", "--allow-file-access-from-files"];
const browser = await chromium.launch({ channel: "msedge", args }).catch(() => chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--allow-file-access-from-files"] }));
const page = await browser.newPage({ viewport: { width: 640, height: 400 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text().slice(0, 200)); });
await page.goto("file://" + resolve("dist/index.html"));
await page.waitForFunction(() => document.body.classList.contains("ready"), null, { timeout: 180000 });
const res = await page.evaluate(async () => {
  const f = window.__fulnek, w = f.world, out = [];
  window.requestAnimationFrame = () => 0; // the test drives everything itself: no streamer, no rendering
  const s = (src) => new Promise((ok, no) => { const e = document.createElement("script"); e.src = src; e.onload = () => { e.remove(); ok(); }; e.onerror = no; document.head.append(e); });
  for (const T of window.FULNEK_TILES.filter((t) => t.id !== "0_0")) {
    const r = { id: T.id };
    try {
      await s(`data/tiles/${T.id}/city.js`); const city = window.FULNEK_CITY; await s(`data/tiles/${T.id}/ortho.js`);
      const img = new Image(); img.src = window.FULNEK_ORTHO; await img.decode();
      const g = w.addTile(T.id, city, img); let worst = 0;
      for (;;) { const t0 = performance.now(), d = g.next().done; worst = Math.max(worst, performance.now() - t0); if (d) break; }
      const t = w.tiles.find((q) => q.id === T.id), cx = (t.b[0] + t.b[2]) / 2, cz = (t.b[1] + t.b[3]) / 2;
      for (let k = 0; k < 600; k++) for (const u of t.live) u(0.1, { x: cx, y: w.groundAt(cx, cz), z: cz }, 0); // a minute of street life
      r.ground = w.groundAt(cx, cz); r.walls = t.segs.length / 5; r.buildings = city.buildings.length; r.worst = Math.round(worst);
      w.removeTile(T.id); r.freed = !w.tiles.some((q) => q.id === T.id);
    } catch (e) { r.error = e.message; try { w.removeTile(T.id); } catch {} }
    out.push(r);
  }
  return out;
});
let fails = 0;
for (const r of res) {
  const bad = r.error || !(r.ground > 150 && r.ground < 700) || !r.freed || (r.buildings > 0 && !r.walls);
  if (bad) { fails++; console.log("FAIL", JSON.stringify(r)); }
}
const worst = res.filter((r) => r.worst).sort((a, b) => b.worst - a.worst)[0];
console.log(`${res.length - fails} of ${res.length} tiles ok; slowest build step ${worst?.worst} ms (tile ${worst?.id})`);
console.log(errors.length ? "page errors: " + [...new Set(errors)].slice(0, 5).join(" | ") : "no page errors");
await browser.close();
process.exit(fails || errors.length ? 1 : 0);
