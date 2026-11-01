// node overview.mjs [radius_km=10] — the distant landscape: one coarse terrain grid and one aerial photo over the whole tiled area,
// drawn wherever no detailed tile is loaded (horizon hills, the big map). Writes dist/data/overview.js.
import { writeFileSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tileBox, TILE } from "./fetch.mjs";

const SQUARE = { lat: 49.7129, lon: 17.9038 }, R = (+process.argv[2] || 10) * 1000;
const mLat = 111200, mLon = 111320 * Math.cos((SQUARE.lat * Math.PI) / 180);
const ni = Math.ceil(R / (TILE.dlon * mLon)) + 1, nj = Math.ceil(R / (TILE.dlat * mLat)) + 1;
const lo = tileBox(-ni, -nj), hi = tileBox(ni, nj), b = { W: lo.W, S: lo.S, E: hi.E, N: hi.N }; // every tile tiles.mjs may list
const UA = { "User-Agent": "Fulnek3D-mapfetch/1.0 (github.com/Losmaniac/Fulnek)" }, AGS = "https://ags.cuzk.gov.cz";
const get = async (u, json = true) => { const r = await fetch(u, { headers: UA }); if (!r.ok) throw new Error(`${r.status} ${u.slice(0, 100)}`); return json ? r.json() : Buffer.from(await r.arrayBuffer()); };
const exp = async (url, p) => { const j = await get(`${url}?${new URLSearchParams({ ...p, bbox: [b.W, b.S, b.E, b.N].join(","), bboxSR: 4326, imageSR: 4326, f: "json" })}`); if (j.error) throw new Error(JSON.stringify(j.error)); return { buf: await get(j.href, false), e: j.extent, w: j.width, h: j.height }; };

// ~40 m terrain: 640 columns over ~22 km
const GW = 640, GH = 640;
const g = await exp(`${AGS}/arcgis2/rest/services/dmr5g/ImageServer/exportImage`, { size: `${GW},${GH}`, format: "bsq", pixelType: "F32", noDataInterpretation: "esriNoDataMatchAny", interpolation: "RSP_BilinearInterpolation" });
const f = new Float32Array(g.buf.buffer.slice(g.buf.byteOffset, g.buf.byteOffset + GW * GH * 4));
let hmin = Infinity, sum = 0, n = 0;
for (const v of f) if (v > -100 && v < 2000) { hmin = Math.min(hmin, v); sum += v; n++; }
if (n < f.length * 0.9) throw new Error("overview terrain mostly empty");
hmin = Math.floor(hmin) - 1;
const dm = Uint16Array.from(f, (v) => Math.round(((v > -100 && v < 2000 ? v : sum / n) - hmin) * 10)); // decimetres above hmin
// the photo: as large as one export allows (~7 m/px), re-encoded smaller with Pillow because it loads at start (the server ignores compressionQuality)
const o = await exp(`${AGS}/arcgis1/rest/services/ORTOFOTO/MapServer/export`, { size: "4096,4096", format: "jpg", transparent: false });
o.buf = execFileSync(process.platform === "win32" ? "python" : "python3", ["-E", "-P", "-c", "import sys,io;from PIL import Image;b=io.BytesIO();Image.open(io.BytesIO(sys.stdin.buffer.read())).save(b,'JPEG',quality=68,optimize=True,progressive=True);sys.stdout.buffer.write(b.getvalue())"], { input: o.buf, maxBuffer: 64e6 });

const ext = (e) => ({ W: e.xmin, S: e.ymin, E: e.xmax, N: e.ymax });
const data = { box: b, ext: ext(g.e), w: GW, h: GH, hmin, dm: Buffer.from(dm.buffer).toString("base64"), photoExt: ext(o.e), photo: "data:image/jpeg;base64," + o.buf.toString("base64") };
if (Math.abs(dm[(GH >> 1) * GW + (GW >> 1)] / 10 + hmin - f[(GH >> 1) * GW + (GW >> 1)]) > 0.1) throw new Error("overview packing mismatch");
mkdirSync("dist/data", { recursive: true });
writeFileSync("dist/data/overview.js", "window.FULNEK_OVERVIEW=" + JSON.stringify(data) + ";");
console.log(JSON.stringify({ box: b, grid: [GW, GH], km: [((b.E - b.W) * mLon / 1000).toFixed(1), ((b.N - b.S) * mLat / 1000).toFixed(1)], photoMB: +(o.buf.length / 1e6).toFixed(2), hmin }));
