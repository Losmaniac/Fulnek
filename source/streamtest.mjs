// map-tile streaming test: a neighbour tile builds in short steps, its ground and walls work, the streamer loads it as you
// walk over and frees it when you leave. node streamtest.mjs  (after a build, with at least tile 1_0 baked in dist/data/tiles)
import { chromium } from "playwright";
import { resolve } from "node:path";

let fails = 0;
const check = (name, ok, info = "") => { console.log(`${ok ? "ok  " : "FAIL"} ${name} ${info}`); if (!ok) fails++; };
const args = ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", "--allow-file-access-from-files"];
const browser = await chromium.launch({ args }).catch(() => chromium.launch({ args, channel: "msedge" })); // no Playwright download: use Windows Edge
const page = await browser.newPage({ viewport: { width: 640, height: 400 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.goto("file://" + resolve("dist/index.html"));
await page.waitForFunction(() => document.body.classList.contains("ready"), null, { timeout: 180000 });

// 1) build tile 1_0 by hand, timing every step (each step is what one frame may run)
const r = await page.evaluate(async () => {
  document.getElementById("start").hidden = true;
  const f = window.__fulnek, w = f.world;
  const s = (src) => new Promise((ok, no) => { const e = document.createElement("script"); e.src = src; e.onload = ok; e.onerror = no; document.head.append(e); });
  await s("data/tiles/1_0/city.js"); const city = window.FULNEK_CITY; await s("data/tiles/1_0/ortho.js");
  const img = new Image(); img.src = window.FULNEK_ORTHO; await img.decode();
  const steps = []; const g = w.addTile("1_0", city, img);
  for (;;) { const t0 = performance.now(), d = g.next().done; steps.push(+(performance.now() - t0).toFixed(1)); if (d) break; }
  const B = city.buildings[0], c = B.r[0].reduce((m, p, _, a) => [m[0] + p[0] / a.length, m[1] + p[1] / a.length], [0, 0]);
  const t = w.tiles.find((t) => t.id === "1_0"), probe = [(t.b[0] + t.b[2]) / 2, (t.b[1] + t.b[3]) / 2];
  // ground: inside the tile it's the tile's own terrain (not the coarse landscape, which sits 0.6 m lower at most points)
  const gTile = w.groundAt(...probe);
  // walls: stand on the middle of a tile building's wall; one step later the walker is pushed off it (to its 0.35 m radius)
  const [a0, a1] = [B.r[0][0], B.r[0][1]], m = [(a0[0] + a1[0]) / 2, (a0[1] + a1[1]) / 2];
  await new Promise((ok) => requestAnimationFrame(() => requestAnimationFrame(ok))); // the game picks up new walls in its frame loop
  f.teleport(...m, B.g); f.sim(0.1); const st = f.state();
  const pushed = Math.hypot(st.x - m[0], st.z - m[1]);
  return { steps, buildings: city.buildings.length, parts: w.segParts.length, gTile, pushed: +pushed.toFixed(2), inside: B.r[0].length };
});
const worst = Math.max(...r.steps);
check("tile builds in short steps", worst < 250, `(${r.steps.length} steps, ms: ${r.steps.join(" ")})`);
check("tile walls joined the collisions", r.parts === 1, `(parts ${r.parts})`);
check("tile ground answers inside the tile", Number.isFinite(r.gTile) && r.gTile > 200 && r.gTile < 500, `(${r.gTile.toFixed(1)} m)`);
check("tile building walls push the walker off", r.pushed > 0.25, `(moved ${r.pushed} m off the wall)`);

// 2) unload, then let the streamer bring it back when you walk over to it
const r2 = await page.evaluate(async () => {
  const f = window.__fulnek, w = f.world, wait = (ms) => new Promise((ok) => setTimeout(ok, ms));
  w.removeTile("1_0"); const afterRemove = { tiles: w.tiles.length, parts: w.segParts.length };
  // the streamer's own copy of 1_0 is still "out", so walking there must load it
  f.pose(1500, 0, -Math.PI / 2, 0, undefined, false);
  for (let k = 0; k < 120 && !w.tiles.some((t) => t.id === "1_0" && t.done); k++) await wait(1000);
  const streamed = w.tiles.some((t) => t.id === "1_0" && t.done);
  // walk far away (south-west corner of the area): it's freed again
  f.pose(-9000, 9000, 0, 0, undefined, false);
  for (let k = 0; k < 30 && w.tiles.some((t) => t.id === "1_0"); k++) await wait(1000);
  return { afterRemove, streamed, freed: !w.tiles.some((t) => t.id === "1_0"), ground: w.groundAt(-9000, 9000) };
});
check("unload removes the tile and its walls", r2.afterRemove.tiles === 0 && r2.afterRemove.parts === 0, JSON.stringify(r2.afterRemove));
check("streamer loads the tile you walk to", r2.streamed);
check("streamer frees it once you're far away", r2.freed);
check("ground exists outside every tile (distant landscape)", Number.isFinite(r2.ground) && r2.ground > 150, `(${r2.ground?.toFixed?.(1)} m)`);
check("no page errors", !errors.length, errors.join(" | "));
await browser.close();
process.exit(fails ? 1 : 0);
