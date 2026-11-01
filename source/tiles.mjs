// node tiles.mjs [radius_km=10] — fetch (raw/tiles/i_j.bin, kept between runs) and bake every map tile within the radius
// of the Fulnek square into dist/data/tiles/i_j/{city,ortho}.js, plus dist/data/tiles.js listing them for the game.
// Tile 0_0 is the original Fulnek box (baked by build.sh into dist/data/); it is listed but not rebaked here.
import { existsSync, mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fetchTile, tileBox, TILE } from "./fetch.mjs";

const SQUARE = { lat: 49.7129, lon: 17.9038 }, R = (+process.argv[2] || 10) * 1000;
const mLat = 111200, mLon = 111320 * Math.cos((SQUARE.lat * Math.PI) / 180);
const near = (b) => { // does the circle reach this tile? (distance from the square to the box)
  const dx = Math.max(b.W - SQUARE.lon, 0, SQUARE.lon - b.E) * mLon, dy = Math.max(b.S - SQUARE.lat, 0, SQUARE.lat - b.N) * mLat;
  return Math.hypot(dx, dy) <= R;
};
const ni = Math.ceil(R / (TILE.dlon * mLon)) + 1, nj = Math.ceil(R / (TILE.dlat * mLat)) + 1, list = [];
for (let j = -nj; j <= nj; j++) for (let i = -ni; i <= ni; i++) if (near(tileBox(i, j))) list.push([i, j]);
console.log(`${list.length} tiles within ${R / 1000} km`);

mkdirSync("raw/tiles", { recursive: true });
const py = process.platform === "win32" ? "python" : "python3";
const done = [], failed = [];
for (const [i, j] of list) {
  const id = `${i}_${j}`, raw = `raw/tiles/${id}.bin`, out = `dist/data/tiles/${id}`;
  if (i === 0 && j === 0) { done.push({ id, i, j, ...tileBox(i, j) }); continue; }
  if (!existsSync(raw)) {
    for (let k = 1; ; k++) {
      try { const t = await fetchTile(i, j); writeFileSync(raw, t.bundle); console.log(id, "fetched", JSON.stringify(t.counts)); break; }
      catch (e) { if (k >= 3) throw e; console.log(id, "retry after", e.message); await new Promise((r) => setTimeout(r, 30000 * k)); }
    }
  }
  if (!existsSync(`${out}/ortho.js`)) { // ortho.js is written last: its absence means the bake didn't finish
    try {
      // -E -P instead of -I: still no env vars or script-folder imports, but a per-user Pillow stays importable
      execFileSync(py, ["-E", "-P", "ortho.py", raw, `raw/tiles/${id}.jpg`, "1"], { stdio: "inherit" });
      const s = JSON.parse(execFileSync("node", ["bake.mjs", raw, `raw/tiles/${id}.jpg`, out]).toString());
      console.log(id, "baked", s.buildings, "buildings,", s.city, "+", s.ortho);
    } catch (e) { console.log(id, "FAILED, left out:", String(e.message).split("\n")[0]); failed.push(id); continue; }
  }
  done.push({ id, i, j, ...tileBox(i, j) });
}
// the game's tile list: bounds in degrees (the game projects them with the shared origin)
writeFileSync("dist/data/tiles.js", "window.FULNEK_TILES=" + JSON.stringify(done) + ";");
console.log(`listed ${done.length} tiles in dist/data/tiles.js` + (failed.length ? `; failed: ${failed.join(" ")}` : ""));
JSON.parse(readFileSync("dist/data/tiles.js", "utf8").slice(20, -1)); // self-check: the list is valid JSON
