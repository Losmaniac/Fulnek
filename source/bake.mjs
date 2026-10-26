// node bake.mjs <fulnek-data.bin> <ortho.jpg> <out_dir> — writes city.js + ortho.js for the game
import { readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { gunzipSync } from "node:zlib";
import { join } from "node:path";
import { buildCity, cleanGrid, terrainAt } from "./src/city.js";
import { applyRuian } from "./src/ruian.js";
import { existsSync } from "node:fs";

const [src, orthoJpg, out] = process.argv.slice(2);
const raw = readFileSync(src);
if (raw.readUInt32LE(0) !== 0x4e4c5546) throw new Error("not a fulnek bundle");
const hlen = raw.readUInt32LE(4), hdr = JSON.parse(raw.subarray(8, 8 + hlen));
const file = (n) => { const f = hdr.files.find((x) => x.name === n); return raw.subarray(8 + hlen + f.offset, 8 + hlen + f.offset + f.length); };
const gw = 1334, gh = 1056;
// true extent reported by the ImageServer (it stretched the request to square degree pixels)
const ext = { W: 17.885, E: 17.922, S: 49.69785532233883, N: 49.72714467766117 };
const grid = (n) => { const b = gunzipSync(file(n)); return cleanGrid(new Float32Array(b.buffer.slice(b.byteOffset, b.byteOffset + gw * gh * 4))); };
const osm = JSON.parse(gunzipSync(file("osm.json.gz")));

const ortho = { data: readFileSync(orthoJpg.replace(/\.jpg$/, "_small.rgb")), w: 1334, h: 1057 };
if (ortho.data.length !== ortho.w * ortho.h * 3) throw new Error("ortho_small.rgb has the wrong size");
const city = buildCity({ osm, dmr: grid("dmr5g.f32.gz"), dmp: grid("dmp1g.f32.gz"), gw, gh, ext, ortho });
const T = city.terrain;
// official addresses + building register (fetched separately as raw/ruian.json.gz)
const ruianFile = join(src, "..", "ruian.json.gz");
const reg = existsSync(ruianFile) ? applyRuian(city, JSON.parse(gunzipSync(readFileSync(ruianFile))), city.P, (x, z) => terrainAt(T, x, z)) : null;
if (reg && (reg.doors < 500 || reg.shops < 30)) throw new Error("RÚIAN matching failed: " + JSON.stringify(reg));
let hmin = Infinity; for (const v of T.data) hmin = Math.min(hmin, v);
hmin = Math.floor(hmin) - 1;
const b64 = (ta) => Buffer.from(ta.buffer, ta.byteOffset, ta.byteLength).toString("base64");
const t16 = Uint16Array.from(T.data, (v) => Math.round((v - hmin) * 100)); // cm above hmin
// decimetres in int16; the third field of trees/bushes is ground height above hmin, angles are milliradians
const pack = (a, stride, scale) => Int16Array.from(a, (v, k) => Math.round((k % stride === 2 && stride > 3 ? v - hmin : v) * scale[k % stride]));
const ti = pack(city.trees, 6, [10, 10, 10, 10, 10, 1]), bi = pack(city.bushes, 5, [10, 10, 10, 10, 10]);
const ci = pack(city.cars, 3, [10, 10, 1000]), li = pack(city.lamps, 3, [10, 10, 1000]);
if (ti[2] !== Math.round((city.trees[2] - hmin) * 10) || ci[2] !== Math.round(city.cars[2] * 1000)) throw new Error("packing mismatch");

// self-checks: spawn is on the square, the terrain sampler matches the grid, sizes are sane
const P = city.P;
if (!(city.spawn[0] > P.W && city.spawn[0] < P.E && city.spawn[1] > P.N && city.spawn[1] < P.S)) throw new Error("spawn outside map");
if (Math.abs(terrainAt(T, T.x0 + 10 * T.dx, T.z0 + 7 * T.dz) - T.data[7 * T.w + 10]) > 1e-3) throw new Error("terrain sampler mismatch");
if (city.buildings.length < 300) throw new Error("too few buildings: " + city.buildings.length);

mkdirSync(out, { recursive: true });
const data = {
  bounds: [P.W, P.N, P.E, P.S], hmin, spawn: city.spawn,
  terrain: { w: T.w, h: T.h, x0: T.x0, z0: T.z0, dx: T.dx, dz: T.dz, cm: b64(t16) },
  trees: b64(ti), bushes: b64(bi), cars: b64(ci), lamps: b64(li), buildings: city.buildings, places: city.places, doors: city.doors || [], monument: city.monument, fountains: city.fountains, benches: city.benches, roads: city.roads, areas: city.areas, pois: city.pois,
  credits: "Map data © OpenStreetMap contributors (ODbL) · Terrain, surface model, orthophoto and RÚIAN addresses © ČÚZK (CC BY 4.0) · Businesses: firmy.cz listings",
  fetched: hdr.meta.fetched,
};
writeFileSync(join(out, "city.js"), "window.FULNEK_CITY=" + JSON.stringify(data) + ";");
writeFileSync(join(out, "ortho.js"), "window.FULNEK_ORTHO=" + JSON.stringify("data:image/jpeg;base64," + readFileSync(orthoJpg).toString("base64")) + ";");
const mb = (f) => (statSync(join(out, f)).size / 1e6).toFixed(2) + " MB";
console.log(JSON.stringify({ reg, buildings: city.buildings.length, trees: ti.length / 6, bushes: bi.length / 5, cars: ci.length / 3, lamps: li.length / 3, areas: city.areas.length, monument: city.monument, fountains: city.fountains.length, benches: city.benches.length, places: city.places.map((p) => p.n), roads: city.roads.length, pois: city.pois.map((p) => p.n), spawn: city.spawn, stats: city.stats, terrain: [T.w, T.h, hmin], city: mb("city.js"), ortho: mb("ortho.js") }, null, 1));
