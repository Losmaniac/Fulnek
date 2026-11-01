// node fetch.mjs <i> <j> <out.bin> — downloads one map tile into a raw bundle for bake.mjs.
// Tile (0,0) is the original Fulnek box; tile (i,j) sits i boxes east and j boxes north of it.
// Sources: ČÚZK DMR 5G terrain, DMP 1G surface and orthophoto (ArcGIS services), OSM (Overpass), RÚIAN (ArcGIS).
import { writeFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { BBOX } from "./src/city.js";

export const TILE = { dlon: BBOX.E - BBOX.W, dlat: BBOX.N - BBOX.S };
export const tileBox = (i, j) => ({ W: +(BBOX.W + i * TILE.dlon).toFixed(6), E: +(BBOX.E + i * TILE.dlon).toFixed(6), S: +(BBOX.S + j * TILE.dlat).toFixed(6), N: +(BBOX.N + j * TILE.dlat).toFixed(6) });
const GW = 1334, GH = 1056, OW = 2668, OH = 2112; // grid 2 m along x; ortho quadrants ~0.5 m/px (as the original bundle)
const UA = { "User-Agent": "Fulnek3D-mapfetch/1.0 (github.com/Losmaniac/Fulnek)" };
const AGS = "https://ags.cuzk.gov.cz";
const RUIAN = `${AGS}/arcgis/rest/services/RUIAN/Prohlizeci_sluzba_nad_daty_RUIAN/MapServer`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(url, params, as = "json", tries = 4) {
  const u = params ? `${url}?${new URLSearchParams(params)}` : url;
  for (let k = 1; ; k++) {
    try {
      const r = await fetch(u, { headers: UA });
      if (!r.ok) throw new Error(`${r.status} ${u.slice(0, 120)}`);
      if (as === "json") { const j = await r.json(); if (j.error) throw new Error(JSON.stringify(j.error)); return j; }
      return Buffer.from(await r.arrayBuffer());
    } catch (e) { if (k >= tries) throw e; await sleep(2000 * k); }
  }
}
// ArcGIS export: f=json gives the true extent (the server widens it to square degree pixels) and a link to the file
async function exportTo(url, params) {
  const j = await get(url, { ...params, bboxSR: 4326, imageSR: 4326, f: "json" });
  const e = j.extent;
  return { buf: await get(j.href, null, "buf"), ext: { W: e.xmin, S: e.ymin, E: e.xmax, N: e.ymax } };
}

async function grid(name, b) {
  const { buf, ext } = await exportTo(`${AGS}/arcgis2/rest/services/${name}/ImageServer/exportImage`, { bbox: [b.W, b.S, b.E, b.N].join(","), size: `${GW},${GH}`, format: "bsq", pixelType: "F32", noDataInterpretation: "esriNoDataMatchAny", interpolation: "RSP_BilinearInterpolation" });
  if (buf.length < GW * GH * 4) throw new Error(`${name}: short grid ${buf.length}`);
  return { buf, ext };
}

async function ortho(b) {
  const mx = (b.W + b.E) / 2, my = (b.S + b.N) / 2, out = {};
  const q = { nw: [b.W, my, mx, b.N], ne: [mx, my, b.E, b.N], sw: [b.W, b.S, mx, my], se: [mx, b.S, b.E, my] };
  for (const [k, box] of Object.entries(q)) {
    out[k] = await exportTo(`${AGS}/arcgis1/rest/services/ORTOFOTO/MapServer/export`, { bbox: box.join(","), size: `${OW},${OH}`, format: "jpg", transparent: false });
  }
  return out;
}

// OSM in the bundle's compact form: [type, id, tags, coords] with µ-degree deltas from the tile centre ([lon, lat] pairs)
async function osm(b) {
  const q = `[out:json][timeout:180][bbox:${b.S},${b.W},${b.N},${b.E}];
(nwr[building];nwr["building:part"];way[highway];node[highway=street_lamp];way[railway];way[waterway];wr[landuse];wr[natural];wr[leisure];wr[water];
 nwr[amenity];nwr[historic];nwr[tourism];nwr[shop];way[barrier];wr[man_made];);out geom;`; // "out tags geom" would drop relation members
  const j = await get("https://overpass-api.de/api/interpreter", { data: q });
  const lat0 = (b.S + b.N) / 2, lon0 = (b.W + b.E) / 2;
  const enc = (pts) => { const f = []; let x = 0, y = 0; for (const p of pts) { const X = Math.round((p.lon - lon0) * 1e6), Y = Math.round((p.lat - lat0) * 1e6); f.push(X - x, Y - y); x = X; y = Y; } return f; };
  const els = [];
  for (const e of j.elements) {
    if (!e.tags) continue;
    if (e.type === "node") els.push(["n", e.id, e.tags, enc([e])]);
    else if (e.type === "way" && e.geometry) els.push(["w", e.id, e.tags, enc(e.geometry)]);
    else if (e.type === "relation" && e.members) els.push(["r", e.id, e.tags, e.members.filter((m) => m.type === "way" && m.geometry).map((m) => [m.role, enc(m.geometry)])]);
  }
  return { lat0, lon0, osm3s: j.osm3s, els };
}

// RÚIAN address points and buildings in the grid's extent, in the rows ruian.js reads
async function ruian(ext) {
  const env = [ext.W, ext.S, ext.E, ext.N].join(",");
  const all = async (layer, outFields, geom) => {
    const rows = [];
    for (let off = 0; ; off += 1000) {
      const j = await get(`${RUIAN}/${layer}/query`, { where: "1=1", geometry: env, geometryType: "esriGeometryEnvelope", inSR: 4326, spatialRel: "esriSpatialRelIntersects", outFields, returnGeometry: geom, outSR: 4326, resultOffset: off, resultRecordCount: 1000, orderByFields: "objectid", f: "json" });
      rows.push(...j.features);
      if (!j.exceededTransferLimit && j.features.length < 1000) return rows;
    }
  };
  const r6 = (v) => Math.round(v * 1e6) / 1e6;
  const year = (ms) => (ms == null ? null : new Date(ms).getUTCFullYear());
  const adr = (await all(1, "adresa,cislodomovni,cisloorientacni,cisloorientacnipismeno,stavebniobjekt", true)).map(({ attributes: a, geometry: g }) => [a.adresa, a.cislodomovni, a.cisloorientacni, a.cisloorientacnipismeno, a.stavebniobjekt, r6(g.x), r6(g.y)]);
  const so = (await all(3, "kod,cisladomovni,typstavebnihoobjektukod,zpusobvyuzitikod,dokonceni,druhkonstrukcekod,pocetbytu,pocetpodlazi,podlahovaplocha,zastavenaplocha,vybavenivytahemkod,obestavenyprostor", true))
    .map(({ attributes: a, geometry: g }) => [a.kod, a.cisladomovni, a.typstavebnihoobjektukod, a.zpusobvyuzitikod, year(a.dokonceni), a.druhkonstrukcekod, a.pocetbytu, a.pocetpodlazi, a.podlahovaplocha, a.zastavenaplocha, a.vybavenivytahemkod, a.obestavenyprostor, (g?.rings || []).map((r) => r.map(([x, y]) => [r6(x), r6(y)]))]);
  const layer = await get(`${RUIAN}/3`, { f: "json" }), domains = {};
  for (const f of layer.fields) if (f.domain?.codedValues && ["zpusobvyuzitikod", "druhkonstrukcekod"].includes(f.name)) domains[f.name] = f.domain.codedValues;
  return { fetched: new Date().toISOString(), env: [ext.W, ext.S, ext.E, ext.N].map((v) => +v.toFixed(4)).join(","), domains, adr, so };
}

export async function fetchTile(i, j) {
  const b = tileBox(i, j);
  const dmr = await grid("dmr5g", b), dmp = await grid("dmp1g", b), o = await ortho(b), m = await osm(b), r = await ruian(dmr.ext);
  const files = [["dmr5g.f32.gz", gzipSync(dmr.buf)], ["dmp1g.f32.gz", gzipSync(dmp.buf)], ...Object.entries(o).map(([k, v]) => [`ortho_${k}.jpg`, v.buf]), ["osm.json.gz", gzipSync(JSON.stringify(m))], ["ruian.json.gz", gzipSync(JSON.stringify(r))]];
  let offset = 0;
  const meta = {
    bbox: b, tile: [i, j], ext: dmr.ext, orthoExt: Object.fromEntries(Object.entries(o).map(([k, v]) => [k, v.ext])),
    grid: { w: GW, h: GH, format: "f32le bsq, row0=north, followed by 1-bit mask" }, ortho: { tiles: `2x2 nw,ne,sw,se each ${OW}x${OH}` },
    source: "ČÚZK DMR5G, DMP1G, Ortofoto, RÚIAN (CC BY 4.0); OSM (ODbL)", fetched: new Date().toISOString(),
  };
  const hdr = Buffer.from(JSON.stringify({ meta, files: files.map(([name, buf]) => { const f = { name, offset, length: buf.length }; offset += buf.length; return f; }) }));
  const head = Buffer.alloc(8); head.writeUInt32LE(0x4e4c5546, 0); head.writeUInt32LE(hdr.length, 4);
  return { bundle: Buffer.concat([head, hdr, ...files.map(([, buf]) => buf)]), meta, counts: { osm: m.els.length, adr: r.adr.length, so: r.so.length } };
}

if (process.argv[1]?.endsWith("fetch.mjs")) {
  const [i, j, out] = [+process.argv[2], +process.argv[3], process.argv[4]];
  if (!Number.isInteger(i) || !Number.isInteger(j) || !out) { console.error("usage: node fetch.mjs <i> <j> <out.bin>"); process.exit(2); }
  const t = await fetchTile(i, j);
  writeFileSync(out, t.bundle);
  console.log(JSON.stringify({ tile: [i, j], bbox: t.meta.bbox, mb: +(t.bundle.length / 1e6).toFixed(1), ...t.counts }));
}
