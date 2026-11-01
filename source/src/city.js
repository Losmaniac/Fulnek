// Bake-time: raw OSM + ČÚZK grids -> game-ready city. Local metres: x = east, z = south, origin = centre of the Fulnek box
// (BBOX) for every map tile, so neighbouring tiles share one coordinate system.
export const BBOX = { W: 17.885, E: 17.922, S: 49.703, N: 49.722 };

export function projection(b = BBOX) { // b: the tile whose bounds W/E/N/S are returned
  const lat0 = (BBOX.S + BBOX.N) / 2, lon0 = (BBOX.W + BBOX.E) / 2;
  const a = 6378137, e2 = 0.00669437999014, phi = (lat0 * Math.PI) / 180;
  const w = 1 - e2 * Math.sin(phi) ** 2;
  const mx = ((a / Math.sqrt(w)) * Math.cos(phi) * Math.PI) / 180; // m per degree lon
  const mz = ((a * (1 - e2)) / w ** 1.5) * (Math.PI / 180); // m per degree lat
  const x = (lon) => (lon - lon0) * mx, z = (lat) => -(lat - lat0) * mz;
  return { lat0, lon0, mx, mz, x, z, W: x(b.W), E: x(b.E), N: z(b.N), S: z(b.S) };
}

// a raster with its true extent (degrees); row 0 = north. at(x, z) is bilinear on cell centres.
export function raster(data, w, h, ext, P) {
  const X0 = P.x(ext.W), X1 = P.x(ext.E), Z0 = P.z(ext.N), Z1 = P.z(ext.S);
  const dx = (X1 - X0) / w, dz = (Z1 - Z0) / h;
  const at = (x, z) => {
    let fx = (x - X0) / dx - 0.5, fz = (z - Z0) / dz - 0.5;
    fx = Math.min(Math.max(fx, 0), w - 1.001); fz = Math.min(Math.max(fz, 0), h - 1.001);
    const i = fx | 0, j = fz | 0, u = fx - i, v = fz - j, k = j * w + i;
    return data[k] * (1 - u) * (1 - v) + data[k + 1] * u * (1 - v) + data[k + w] * (1 - u) * v + data[k + w + 1] * u * v;
  };
  const cell = (k) => [X0 + ((k % w) + 0.5) * dx, Z0 + (((k / w) | 0) + 0.5) * dz];
  const index = (x, z) => [Math.floor((x - X0) / dx), Math.floor((z - Z0) / dz)];
  return { data, w, h, dx, dz, at, cell, index };
}

// terrain mesh grid: nodes on the bbox edges, the same two-triangle split as the mesh (diagonal b-c)
export function terrainAt(T, x, z) {
  let fx = (x - T.x0) / T.dx, fz = (z - T.z0) / T.dz;
  fx = Math.min(Math.max(fx, 0), T.w - 1.0001); fz = Math.min(Math.max(fz, 0), T.h - 1.0001);
  const i = fx | 0, j = fz | 0, u = fx - i, v = fz - j, k = j * T.w + i, d = T.data;
  const a = d[k], b = d[k + 1], c = d[k + T.w], e = d[k + T.w + 1];
  return u + v <= 1 ? a + (b - a) * u + (c - a) * v : e + (c - e) * (1 - u) + (b - e) * (1 - v);
}

export function cleanGrid(g) {
  let sum = 0, n = 0;
  for (const v of g) if (v > -100 && v < 2000) { sum += v; n++; }
  if (n < g.length * 0.5) throw new Error("terrain grid is mostly empty");
  for (let i = 0; i < g.length; i++) if (!(g[i] > -100 && g[i] < 2000)) g[i] = sum / n;
  return g;
}

const area = (r) => { let s = 0; for (let i = 0; i < r.length; i++) { const a = r[i], b = r[(i + 1) % r.length]; s += a[0] * b[1] - b[0] * a[1]; } return s / 2; };
export function inside(x, z, r) {
  let c = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const [x1, z1] = r[i], [x2, z2] = r[j];
    if ((z1 > z) !== (z2 > z) && x < ((x2 - x1) * (z - z1)) / (z2 - z1) + x1) c = !c;
  }
  return c;
}

function stitch(ways) { // join member ways (arrays of [lonµ, latµ]) into closed rings
  const key = (p) => p[0] + "," + p[1];
  ways = ways.filter((w) => w.length >= 2).map((w) => w.slice());
  const rings = [];
  while (ways.length) {
    let cur = ways.shift(), changed = true;
    while (key(cur[0]) !== key(cur[cur.length - 1]) && changed) {
      changed = false;
      for (let k = 0; k < ways.length; k++) {
        const w = ways[k], end = key(cur[cur.length - 1]), start = key(cur[0]);
        if (key(w[0]) === end) cur = cur.concat(w.slice(1));
        else if (key(w[w.length - 1]) === end) cur = cur.concat(w.slice().reverse().slice(1));
        else if (key(w[w.length - 1]) === start) cur = w.slice(0, -1).concat(cur);
        else if (key(w[0]) === start) cur = w.slice().reverse().slice(0, -1).concat(cur);
        else continue;
        ways.splice(k, 1); changed = true; break;
      }
    }
    if (key(cur[0]) === key(cur[cur.length - 1])) rings.push(cur);
  }
  return rings;
}

function obb(r) { // min-area rectangle over hull edges -> long-axis angle, centre, half sizes
  const pts = r.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const p of pts) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
  for (const p of pts.reverse()) { while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
  const hull = lo.slice(0, -1).concat(up.slice(0, -1));
  let best = null;
  for (let i = 0; i < hull.length; i++) {
    const a = hull[i], b = hull[(i + 1) % hull.length], ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const c = Math.cos(ang), s = Math.sin(ang);
    let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity;
    for (const [x, z] of hull) { const u = x * c + z * s, v = -x * s + z * c; u0 = Math.min(u0, u); u1 = Math.max(u1, u); v0 = Math.min(v0, v); v1 = Math.max(v1, v); }
    const ar = (u1 - u0) * (v1 - v0);
    if (!best || ar < best.ar) best = { ar, ang, c, s, u0, u1, v0, v1 };
  }
  let { ang, c, s, u0, u1, v0, v1 } = best;
  const cu = (u0 + u1) / 2, cv = (v0 + v1) / 2;
  let hl = (u1 - u0) / 2, hs = (v1 - v0) / 2;
  if (hs > hl) { ang += Math.PI / 2; [hl, hs] = [hs, hl]; }
  return { cx: cu * c - cv * s, cz: cu * s + cv * c, ang, hl, hs };
}

const pct = (arr, p) => { const s = Float64Array.from(arr).sort(); return s[Math.min(s.length - 1, Math.floor((p / 100) * s.length))]; };
const num = (v) => { if (v == null) return null; const n = parseFloat(String(v).replace(",", ".")); return Number.isFinite(n) ? n : null; };
const r2 = (v) => Math.round(v * 100) / 100;

const PLASTER = ["#e9e1cf", "#efe6c8", "#f2efe6", "#e6d3a8", "#d9d4c7", "#ecd9c6", "#dfe0d6", "#e8d9b0", "#f0e2d0", "#cfc6b4"];
const TILES = ["#9c4a32", "#8a3d2b", "#a85a3c", "#7a4434", "#6b5146", "#5c5a58", "#94503a"];
const NAMED = { red: "#a8432f", brown: "#6b4a3a", grey: "#77777a", gray: "#77777a", black: "#3a3a3a", white: "#f0f0ec", yellow: "#e8d48a", green: "#5f7f5a", blue: "#5a6f8f", orange: "#cf7a3c", beige: "#e3d6b8", pink: "#e8c0b8" };
const colour = (v, fb) => { if (!v) return fb; v = v.trim().toLowerCase(); return /^#([0-9a-f]{3}|[0-9a-f]{6})$/.test(v) ? v : NAMED[v] || fb; };
const PLAIN = new Set(["garage", "garages", "shed", "carport", "industrial", "warehouse", "service", "roof", "greenhouse", "church", "chapel", "cathedral", "transformer_tower", "hut", "barn", "farm_auxiliary", "storage_tank"]);
// w width m, r draw rank, d traffic weight, m markings (2 centre+edges, 1 centre), p kerbside parking, s default surface
export const ROAD = {
  trunk: { w: 8, r: 6, d: 1, m: 2 }, primary: { w: 8, r: 6, d: 1, m: 2 }, primary_link: { w: 6, r: 5, d: 1 },
  secondary: { w: 7, r: 5, d: 1, m: 2 }, secondary_link: { w: 6, r: 5, d: 1 }, tertiary: { w: 6.5, r: 4, d: 1, m: 1 }, tertiary_link: { w: 5.5, r: 4, d: 1 },
  residential: { w: 5.5, r: 3, d: 1, p: 1 }, unclassified: { w: 5, r: 3, d: 1, p: 1 }, living_street: { w: 5, r: 3, d: 0.5, p: 1 },
  service: { w: 3.6, r: 2, d: 0.2 }, pedestrian: { w: 5, r: 2, s: "sett" },
  footway: { w: 1.8, r: 1, s: "pavers" }, cycleway: { w: 2, r: 1 }, path: { w: 1.4, r: 1, s: "gravel" }, steps: { w: 1.8, r: 1, s: "pavers" }, bridleway: { w: 1.4, r: 1, s: "gravel" },
  track: { w: 3, r: 1, s: "gravel" }, stream: { w: 2.4, r: 0, s: "water" }, rail: { w: 3.4, r: 2, s: "rail" },
};
const SURF = { asphalt: "asphalt", paved: "asphalt", concrete: "asphalt", "concrete:plates": "asphalt", sett: "sett", cobblestone: "sett", unhewn_cobblestone: "sett", paving_stones: "pavers", gravel: "gravel", fine_gravel: "gravel", compacted: "gravel", dirt: "gravel", ground: "gravel", unpaved: "gravel", grass: "gravel" };
const POI_AMENITY = new Set(["place_of_worship", "townhall", "library", "museum", "theatre", "school"]);

export function buildCity({ osm, dmr, dmp, gw, gh, ext, ortho, bbox = BBOX }) {
  const P = projection(bbox);
  const R = raster(dmr, gw, gh, ext, P), D = raster(dmp, gw, gh, ext, P);

  // terrain mesh grid, ~4 m, nodes exactly on the bbox edges
  const tw = Math.round((P.E - P.W) / 4) + 1, th = Math.round((P.S - P.N) / 4) + 1;
  const T = { w: tw, h: th, x0: P.W, z0: P.N, dx: (P.E - P.W) / (tw - 1), dz: (P.S - P.N) / (th - 1), data: new Float32Array(tw * th) };
  for (let j = 0; j < th; j++) for (let i = 0; i < tw; i++) T.data[j * tw + i] = R.at(T.x0 + i * T.dx, T.z0 + j * T.dz);
  const ground = (x, z) => terrainAt(T, x, z);

  const feats = osm.els.map(([t, id, tags, g]) => {
    const dec = (flat) => { const out = []; let x = 0, y = 0; for (let k = 0; k < flat.length; k += 2) { x += flat[k]; y += flat[k + 1]; out.push([x, y]); } return out; };
    return t === "r" ? { t, id, tags, members: g.map(([role, f]) => ({ role, pts: dec(f) })) } : { t, id, tags, pts: dec(g) };
  });
  const toXZ = (p) => [P.x(osm.lon0 + p[0] / 1e6), P.z(osm.lat0 + p[1] / 1e6)];
  const ring = (pts) => {
    if (pts.length < 4 || pts[0][0] !== pts[pts.length - 1][0] || pts[0][1] !== pts[pts.length - 1][1]) return null;
    const r = pts.slice(0, -1).map(toXZ);
    return Math.abs(area(r)) > 1 ? r : null;
  };
  const inBox = (x, z) => x > P.W + 2 && x < P.E - 2 && z > P.N + 2 && z < P.S - 2;
  const mean = (pts) => pts.reduce((s, p) => [s[0] + p[0] / pts.length, s[1] + p[1] / pts.length], [0, 0]);

  const outlines = [], parts = [];
  for (const f of feats) {
    const t = f.tags;
    if (!t.building && !t["building:part"]) continue;
    let rings = [];
    if (f.t === "w") { const r = ring(f.pts); if (r) rings = [r]; }
    else if (f.t === "r") {
      const outer = stitch(f.members.filter((m) => m.role !== "inner").map((m) => m.pts)).map(ring).filter(Boolean);
      const inner = stitch(f.members.filter((m) => m.role === "inner").map((m) => m.pts)).map(ring).filter(Boolean);
      if (outer.length) rings = [outer[0], ...inner];
    }
    if (!rings.length) continue;
    const c = mean(rings[0]);
    if (inBox(c[0], c[1])) (t["building:part"] && !t.building ? parts : outlines).push({ id: f.id, t, rings, c });
  }
  // an outline that contains parts is drawn by its parts instead (OSM Simple 3D Buildings)
  const kept = outlines.filter((b) => !parts.some((p) => inside(p.c[0], p.c[1], b.rings[0])));

  const bmask = new Uint8Array(gw * gh), buildings = [];
  const stats = { tagHeight: 0, surface: 0, guessed: 0, gabled: 0, flat: 0, pyramidal: 0 };
  for (const { id, t, rings } of kept.concat(parts)) {
    if (area(rings[0]) < 0) rings[0].reverse(); // outer CCW in (x, z), holes CW
    for (let k = 1; k < rings.length; k++) if (area(rings[k]) > 0) rings[k].reverse();
    const outer = rings[0];
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const [x, z] of outer) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
    const inFoot = (x, z) => { let inn = false; for (const r of rings) if (inside(x, z, r)) inn = !inn; return inn; };
    // mark the raster cells under the footprint (for tree removal)
    const [ia, ja] = R.index(x0, z0), [ib, jb] = R.index(x1, z1);
    for (let j = Math.max(ja, 0); j <= Math.min(jb, gh - 1); j++) for (let i = Math.max(ia, 0); i <= Math.min(ib, gw - 1); i++) {
      const [x, z] = R.cell(j * gw + i); if (inFoot(x, z)) bmask[j * gw + i] = 1;
    }
    // sample terrain and surface on a 1 m lattice inside the footprint, keeping 1.5 m clear of walls
    const all = [], core = [];
    const edgeDist = (x, z) => { let m = Infinity; for (const r of rings) for (let i = 0; i < r.length; i++) { const [ax, az] = r[i], [bx, bz] = r[(i + 1) % r.length]; const vx = bx - ax, vz = bz - az, L = vx * vx + vz * vz || 1; const s = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / L)); m = Math.min(m, Math.hypot(x - ax - s * vx, z - az - s * vz)); } return m; };
    for (let z = Math.ceil(z0); z <= z1; z++) for (let x = Math.ceil(x0); x <= x1; x++) if (inFoot(x, z)) { all.push([x, z]); if (edgeDist(x, z) > 1.5) core.push([x, z]); }
    if (!all.length) all.push(mean(outer));
    const use = core.length >= 4 ? core : all;
    const g0 = pct(all.map(([x, z]) => R.at(x, z)), 50);
    const base = Math.min(...outer.map(([x, z]) => ground(x, z))) - 1;

    const tagH = num(t.height), levels = num(t["building:levels"]);
    const minH = num(t.min_height) ?? (num(t["building:min_level"]) || 0) * 3;
    let shape = (t["roof:shape"] || "").toLowerCase();
    let roofH = num(t["roof:height"]) ?? (num(t["roof:levels"]) != null ? num(t["roof:levels"]) * 2.5 : null);
    let top = null, rise = null;
    if (tagH) { top = g0 + tagH; stats.tagHeight++; }
    else if (use.length >= 4) {
      const v = use.map(([x, z]) => D.at(x, z)), cand = pct(v, 92) - g0;
      if (cand >= 2) { top = g0 + cand; rise = pct(v, 92) - pct(v, 25); stats.surface++; }
    }
    if (top == null) { top = g0 + (levels ? levels * 3 + 1.5 : PLAIN.has(t.building) ? 3 : 6); stats.guessed++; }
    const rel = top - g0, ar = Math.abs(area(outer));
    if (!shape) shape = (rise != null && rise >= 1.5 && ar < 1500) || (rise == null && ar < 250 && rel > 4) ? "gabled" : "flat";
    const tagged = !!t["roof:shape"];
    shape = ["pyramidal", "conical", "onion", "dome", "spire", "round"].includes(shape) ? "pyramidal" : shape === "flat" ? "flat" : ["hipped", "half-hipped"].includes(shape) ? "hipped" : "gabled";
    // shortcut: mansard/gambrel and non-rectangular hipped drawn as gabled, courtyards with pitched roofs drawn flat at mid-roof; upgrade with straight-skeleton roofs
    if (shape !== "flat" && shape !== "pyramidal" && rings.length > 1) { shape = "flat"; top -= (roofH ?? Math.min(rise ?? 2, rel * 0.4)) / 2; }
    if (shape === "flat") roofH = 0;
    else if (roofH == null) roofH = Math.min(Math.max((rise ?? rel * 0.4) * 1.1, 1.5), rel * 0.6);
    roofH = rel > 4 ? Math.min(roofH, rel - 2) : Math.min(roofH, rel * 0.4);
    const o = obb(outer), kind = t.building || t["building:part"] || "yes";
    const rnd = Math.imul(id % 1e9, 2654435761) >>> 0;
    // hipped roofs are drawn on the footprint's rectangle, so only near-rectangular footprints get one
    const rect = ar / (4 * o.hl * o.hs) > 0.9 && rings.length === 1;
    if (shape === "gabled" && !tagged && rect && rnd % 5 < 2) shape = "hipped";
    if (shape === "hipped" && !rect) shape = "gabled";
    stats[shape] = (stats[shape] || 0) + 1;
    const grey = PLAIN.has(kind) && !["church", "chapel", "cathedral"].includes(kind);
    buildings.push({
      r: rings.map((rr) => rr.map(([x, z]) => [r2(x), r2(z)])),
      b: r2(minH ? g0 + minH - 0.05 : base), g: r2(g0 + minH), e: r2(top - roofH), t: r2(top), s: shape[0],
      o: [r2(o.cx), r2(o.cz), Math.round(o.ang * 1e4) / 1e4, r2(Math.max(o.hs, 0.5)), r2(o.hl)],
      w: colour(t["building:colour"] || t.colour, grey ? "#b9b6ae" : PLASTER[rnd % PLASTER.length]),
      ...(t["building:colour"] || t.colour ? { wc: 1 } : {}),
      c: colour(t["roof:colour"], shape === "flat" ? "#6d6d6b" : TILES[(rnd >>> 8) % TILES.length]),
      ...(!PLAIN.has(kind) && top - roofH - g0 > 2.6 ? { win: 1 } : {}),
      ...(t.name ? { n: t.name } : {}),
    });
  }

  // ---- streets, rails, streams (as ribbons later) and paved/water areas
  const roads = [], areas = [], forests = [], pois = [];
  for (const f of feats) {
    const t = f.tags;
    if (f.t !== "w") continue;
    const k = t.highway || (t.waterway === "stream" ? "stream" : t.railway === "rail" ? "rail" : null);
    if (k && ROAD[k] && t.area !== "yes" && !t.tunnel) {
      const R0 = ROAD[k], props = {
        k, ...(t.name ? { n: t.name } : {}), s: SURF[t.surface] || R0.s || "asphalt", w: num(t.width) ?? R0.w,
        ...(t.bridge && t.bridge !== "no" ? { br: 1 } : {}), ...(t.oneway === "yes" ? { ow: 1 } : {}),
      };
      // keep only the parts inside the map: outside it there is no terrain to drape on
      let piece = [];
      for (const [x, z] of f.pts.map(toXZ)) {
        if (inBox(x, z)) piece.push([Math.round(x * 10) / 10, Math.round(z * 10) / 10]);
        else { if (piece.length > 1) roads.push({ ...props, p: piece }); piece = []; }
      }
      if (piece.length > 1) roads.push({ ...props, p: piece });
    }
    const r = ring(f.pts);
    if (!r) continue;
    if (t.amenity === "parking" || (t.area === "yes" && t.highway)) areas.push({ s: SURF[t.surface] || (t.highway === "footway" || t.highway === "path" ? "gravel" : "asphalt"), park: t.amenity === "parking" ? 1 : 0, r: r.map(([x, z]) => [r2(x), r2(z)]) });
    else if (t.natural === "water" || t.landuse === "reservoir" || t.landuse === "basin") areas.push({ s: "water", r: r.map(([x, z]) => [r2(x), r2(z)]) });
    if (t.landuse === "forest" || t.natural === "wood") forests.push(r);
  }

  // ---- lookups for placement: photo colour, buildings, roads
  const { data: od, w: ow, h: oh } = ortho;
  const px = (x, z) => { const i = Math.min(ow - 1, Math.max(0, Math.floor(((x - P.W) / (P.E - P.W)) * ow))), j = Math.min(oh - 1, Math.max(0, Math.floor(((z - P.N) / (P.S - P.N)) * oh))); return (j * ow + i) * 3; };
  const greenAt = (x, z) => { const k = px(x, z), r = od[k], g = od[k + 1], b = od[k + 2]; return (2 * g - r - b) / (r + g + b + 1); };
  const lumAt = (x, z) => { const k = px(x, z); return (od[k] + od[k + 1] + od[k + 2]) / 3; };
  const bHash = new Map(), BC = 16, bkey = (i, j) => i * 10007 + j;
  buildings.forEach((B, bi) => {
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const [x, z] of B.r[0]) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
    B._bb = [x0, z0, x1, z1];
    for (let i = Math.floor(x0 / BC); i <= Math.floor(x1 / BC); i++) for (let j = Math.floor(z0 / BC); j <= Math.floor(z1 / BC); j++) { const k = bkey(i, j); (bHash.get(k) || bHash.set(k, []).get(k)).push(bi); }
  });
  const segDist = (x, z, ax, az, bx, bz) => { const vx = bx - ax, vz = bz - az, L = vx * vx + vz * vz || 1, s = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / L)); return Math.hypot(x - ax - s * vx, z - az - s * vz); };
  const nearBuilding = (x, z, margin) => { // inside a footprint, or closer than margin to one
    for (let i = Math.floor((x - margin) / BC); i <= Math.floor((x + margin) / BC); i++) for (let j = Math.floor((z - margin) / BC); j <= Math.floor((z + margin) / BC); j++)
      for (const bi of bHash.get(bkey(i, j)) || []) {
        const B = buildings[bi], [x0, z0, x1, z1] = B._bb;
        if (x < x0 - margin || x > x1 + margin || z < z0 - margin || z > z1 + margin) continue;
        if (inside(x, z, B.r[0])) return true;
        const r = B.r[0];
        for (let q = 0; q < r.length; q++) if (segDist(x, z, r[q][0], r[q][1], r[(q + 1) % r.length][0], r[(q + 1) % r.length][1]) < margin) return true;
      }
    return false;
  };
  const urban = (x, z) => nearBuilding(x, z, 30);
  const rHash = new Map(), RC = 20;
  roads.forEach((rd, ri) => { for (let q = 0; q + 1 < rd.p.length; q++) { const [ax, az] = rd.p[q], [bx, bz] = rd.p[q + 1]; for (let i = Math.floor(Math.min(ax, bx) / RC); i <= Math.floor(Math.max(ax, bx) / RC); i++) for (let j = Math.floor(Math.min(az, bz) / RC); j <= Math.floor(Math.max(az, bz) / RC); j++) { const k = bkey(i, j); (rHash.get(k) || rHash.set(k, []).get(k)).push(ri, q); } } });
  const onRoad = (x, z, extra, skip = -1) => {
    const l = rHash.get(bkey(Math.floor(x / RC), Math.floor(z / RC)));
    if (l) for (let n = 0; n < l.length; n += 2) { const rd = roads[l[n]]; if (l[n] === skip || rd.k === "stream") continue; const a = rd.p[l[n + 1]], b = rd.p[l[n + 1] + 1]; if (segDist(x, z, a[0], a[1], b[0], b[1]) < rd.w / 2 + extra) return true; }
    return false;
  };
  const inForest = (x, z) => forests.some((r) => inside(x, z, r));
  const walk = (pts, step, from, fn) => { // fn(x, z, dirx, dirz, index) every `step` metres along a polyline
    let s0 = 0, next = from, n = 0;
    for (let q = 0; q + 1 < pts.length; q++) {
      const [ax, az] = pts[q], [bx, bz] = pts[q + 1], L = Math.hypot(bx - ax, bz - az);
      if (L < 1e-6) continue;
      while (next <= s0 + L) { const u = (next - s0) / L; fn(ax + (bx - ax) * u, az + (bz - az) * u, (bx - ax) / L, (bz - az) / L, n++); next += step; }
      s0 += L;
    }
    return s0;
  };
  const len = (pts) => pts.reduce((s, p, q) => (q ? s + Math.hypot(p[0] - pts[q - 1][0], p[1] - pts[q - 1][1]) : 0), 0);

  // ---- trees: jittered 6 m lattice over the canopy (surface - terrain > 3.5 m) that is green in the photo.
  // The DMP canopy is too smooth for per-tree maxima, so its height just scales each tree.
  const near = new Uint8Array(gw * gh);
  for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) if (bmask[j * gw + i])
    for (let dj = -2; dj <= 2; dj++) for (let di = -2; di <= 2; di++) { const jj = j + dj, ii = i + di; if (jj >= 0 && jj < gh && ii >= 0 && ii < gw) near[jj * gw + ii] = 1; }
  const hash = (a, b) => { let h = Math.imul(a, 374761393) + Math.imul(b, 668265263); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
  const trees = [], bushes = [];
  for (let a = 0, z = P.N + 3; z < P.S - 3; z += 6, a++) for (let b = 0, x = P.W + 3; x < P.E - 3; x += 6, b++) {
    const jx = x + (hash(a, b) - 0.5) * 5, jz = z + (hash(b + 7, a + 3) - 0.5) * 5;
    const [i, j] = R.index(jx, jz);
    if (i < 0 || j < 0 || i >= gw || j >= gh || near[j * gw + i]) continue;
    const h = D.at(jx, jz) - R.at(jx, jz);
    if (h < 3.5 || greenAt(jx, jz) < 0 || onRoad(jx, jz, 0.5)) continue; // tall but grey = masts, wires, roof edges
    const hh = Math.min(h, 35), pCon = inForest(jx, jz) ? Math.min(0.6, Math.max(0.1, (95 - lumAt(jx, jz)) / 70)) : 0.08;
    trees.push(jx, jz, ground(jx, jz), hh, Math.min(Math.max(0.18 * hh + 1.6, 2), 4.5), hash(b + 31, a + 17) < pCon ? 1 : 0);
  }
  // ---- bushes: low green surface (0.6-3.5 m) on a 3 m lattice
  for (let a = 0, z = P.N + 2; z < P.S - 2; z += 3, a++) for (let b = 0, x = P.W + 2; x < P.E - 2; x += 3, b++) {
    const jx = x + (hash(a + 99, b) - 0.5) * 2.4, jz = z + (hash(b + 5, a + 77) - 0.5) * 2.4;
    const [i, j] = R.index(jx, jz);
    if (i < 0 || j < 0 || i >= gw || j >= gh || bmask[j * gw + i]) continue;
    const h = D.at(jx, jz) - R.at(jx, jz);
    if (h < 0.6 || h > 3.5 || greenAt(jx, jz) < 0.08 || onRoad(jx, jz, 0.6) || nearBuilding(jx, jz, 0.8)) continue;
    bushes.push(jx, jz, ground(jx, jz), Math.min(h, 2.5), Math.min(Math.max(0.45 + 0.35 * h, 0.6), 1.8));
  }

  // ---- parked cars: rows in parking lots, plus kerbside on town streets
  const cars = [];
  for (const A of areas) {
    if (!A.park) continue;
    const o = obb(A.r), U = [Math.cos(o.ang), Math.sin(o.ang)], V = [-U[1], U[0]];
    const parallel = o.hs < 3.2, du = parallel ? 5.8 : 2.6, dv = 5.4;
    for (let u = -o.hl + (parallel ? 3 : 1.4); u <= o.hl - 1; u += du) for (let v = parallel ? 0 : -o.hs + 2.6; v <= (parallel ? 0 : o.hs - 2.4); v += dv) {
      const x = o.cx + u * U[0] + v * V[0], z = o.cz + u * U[1] + v * V[1];
      if (!inside(x, z, A.r) || hash(Math.round(x * 7), Math.round(z * 7)) > 0.72 || nearBuilding(x, z, 1)) continue;
      let edge = Infinity; for (let q = 0; q < A.r.length; q++) edge = Math.min(edge, segDist(x, z, ...A.r[q], ...A.r[(q + 1) % A.r.length]));
      if (edge < 1.2) continue;
      const d = parallel ? U : V, flip = hash(Math.round(x), Math.round(z)) > 0.5 ? Math.PI : 0;
      cars.push(x, z, Math.atan2(-d[1], d[0]) + flip);
    }
  }
  roads.forEach((rd, ri) => {
    if (!ROAD[rd.k].p || rd.br) return;
    const side = ri % 2 ? 1 : -1, L = len(rd.p);
    walk(rd.p, 5.8, 12, (x, z, dx, dz, n) => {
      if (n * 5.8 + 12 > L - 12 || hash(ri, n) > 0.38) return;
      const qx = x - dz * side * (rd.w / 2 + 1.05), qz = z + dx * side * (rd.w / 2 + 1.05);
      if (!urban(qx, qz) || nearBuilding(qx, qz, 1.3) || onRoad(qx, qz, 0.9, ri)) return;
      cars.push(qx, qz, Math.atan2(-dz, dx) + (hash(n, ri) > 0.5 ? Math.PI : 0));
    });
  });

  // ---- street lamps every ~30 m on town streets, arm pointing over the road
  const lamps = [];
  roads.forEach((rd, ri) => {
    if (!(ROAD[rd.k].r >= 3 || rd.k === "pedestrian") || rd.br) return;
    const side = ri % 2 ? -1 : 1;
    walk(rd.p, 30, 8, (x, z, dx, dz) => {
      const nx = -dz * side, nz = dx * side, qx = x + nx * (rd.w / 2 + 0.7), qz = z + nz * (rd.w / 2 + 0.7);
      if (!urban(qx, qz) || nearBuilding(qx, qz, 0.6) || onRoad(qx, qz, 0.3, ri)) return;
      lamps.push(qx, qz, Math.atan2(nz, -nx)); // local +x (the arm) faces back toward the road
    });
  });

  const sq0 = () => { const sq = roads.filter((r) => r.n && /(nám\.|náměstí).*komensk/i.test(r.n)).flatMap((r) => r.p); return sq.length ? mean(sq) : null; }; // Fulnek's square, if in this tile
  // ---- named places from OSM get a sign on the nearest facade; the square's ground floors get generic shop signs
  const KIND = { cafe: "café", restaurant: "restaurant", townhall: "town hall", post_office: "post office", fire_station: "fire station", museum: "museum", information: "tourist information", pharmacy: "pharmacy", police: "police", bank: "bank", fuel: "petrol station", hotel: "hotel", doctors: "doctor", confectionery: "confectionery" };
  const places = [];
  const facade = (x, z, maxD) => { // nearest outer wall: point on it, outward normal, building
    let best = null;
    for (let i = Math.floor((x - maxD) / BC); i <= Math.floor((x + maxD) / BC); i++) for (let j = Math.floor((z - maxD) / BC); j <= Math.floor((z + maxD) / BC); j++)
      for (const bi of bHash.get(bkey(i, j)) || []) {
        const B = buildings[bi], r = B.r[0];
        for (let q = 0; q < r.length; q++) {
          const [ax, az] = r[q], [bx, bz] = r[(q + 1) % r.length], L = Math.hypot(bx - ax, bz - az);
          if (L < 2.5) continue;
          const d = segDist(x, z, ax, az, bx, bz);
          if (d < maxD && (!best || d < best.d)) { const u = Math.max(1.2 / L, Math.min(1 - 1.2 / L, ((x - ax) * (bx - ax) + (z - az) * (bz - az)) / (L * L))); best = { d, x: ax + (bx - ax) * u, z: az + (bz - az) * u, nx: (bz - az) / L, nz: -(bx - ax) / L, B }; }
        }
      }
    return best;
  };
  const sign = (n, k, f, real) => places.push({ n, k, x: r2(f.x + f.nx * 0.12), z: r2(f.z + f.nz * 0.12), y: r2(f.B.g + 3.1), yaw: Math.round(Math.atan2(f.nx, f.nz) * 1000) / 1000, ...(real ? { real: 1 } : {}) });
  for (const f of feats) {
    const t = f.tags, k = KIND[t.amenity] || (t.tourism === "information" ? (t.shop ? KIND.information : null) : KIND[t.tourism]) || KIND[t.shop]; // info boards and guideposts aren't places
    if (!t.name || !k) continue;
    const [x, z] = mean((f.t === "r" ? f.members[0]?.pts || [] : f.pts).map(toXZ));
    const w = inBox(x, z) && facade(x, z, 25);
    const name = t.amenity === "post_office" ? "Pošta" : t.name; // the post office is just "Fulnek 1" in OSM
    if (w && !places.some((p) => p.n === name)) sign(name, k, w, true);
  }
  const GENERIC = [["Pekárna", "bakery"], ["Potraviny", "grocery"], ["Řeznictví", "butcher"], ["Trafika", "newsagent"], ["Květiny", "florist"], ["Kadeřnictví", "hairdresser"], ["Hospoda", "pub"], ["Papírnictví", "stationery"], ["Železářství", "hardware"], ["Optika", "optician"], ["Cukrárna", "sweet shop"], ["Drogerie", "chemist"]];
  const [sqx, sqz] = sq0() || [NaN, NaN];
  const fronts = [];
  if (sq0()) buildings.forEach((B) => {
    if (!B.win || B.e - B.g < 5) return;
    const r = B.r[0];
    for (let q = 0; q < r.length; q++) {
      const [ax, az] = r[q], [bx, bz] = r[(q + 1) % r.length], L = Math.hypot(bx - ax, bz - az), mx = (ax + bx) / 2, mz = (az + bz) / 2, d = Math.hypot(mx - sqx, mz - sqz);
      if (L < 6 || d > 150) continue;
      const nx = (bz - az) / L, nz = -(bx - ax) / L;
      if ((nx * (sqx - mx) + nz * (sqz - mz)) / d < 0.55 || places.some((p) => Math.hypot(p.x - mx, p.z - mz) < 12)) continue;
      fronts.push({ d, x: mx, z: mz, nx, nz, B });
      return; // one shop per building
    }
  });
  fronts.sort((a, b) => a.d - b.d).slice(0, GENERIC.length).forEach((f, i) => sign(...GENERIC[i], f, false));

  for (const f of feats) {
    const t = f.tags;
    if (t.name && (t.historic || t.tourism || POI_AMENITY.has(t.amenity))) {
      const pts = f.t === "r" ? f.members[0]?.pts || [] : f.pts;
      if (!pts.length) continue;
      const [x, z] = mean(pts.map(toXZ));
      if (inBox(x, z)) pois.push({ n: t.name, k: t.historic || t.tourism || t.amenity, p: [r2(x), r2(z), r2(ground(x, z))] });
    }
  }
  const spawn = (sq0() || [(P.W + P.E) / 2, (P.N + P.S) / 2]).map(r2);

  // ---- square furniture from OSM: the Trinity column with its saints, fountains, benches
  const memorials = feats.filter((f) => f.t === "n" && f.tags.historic === "memorial").map((f) => ({ n: f.tags.name || "", p: toXZ(f.pts[0]) }));
  const col = memorials.find((m) => /trojice/i.test(m.n));
  const monument = col ? { x: r2(col.p[0]), z: r2(col.p[1]), g: r2(ground(...col.p)), statues: memorials.filter((m) => m !== col && Math.hypot(m.p[0] - col.p[0], m.p[1] - col.p[1]) < 5).map((m) => [r2(m.p[0]), r2(m.p[1])]) } : null;
  const fountains = feats.filter((f) => f.t === "w" && f.tags.amenity === "fountain").map((f) => ring(f.pts)).filter(Boolean).map((r) => r.map(([x, z]) => [r2(x), r2(z)]));
  const benches = feats.filter((f) => f.t === "n" && f.tags.amenity === "bench").map((f) => toXZ(f.pts[0])).filter(([x, z]) => inBox(x, z)).map(([x, z]) => [r2(x), r2(z)]);
  for (const B of buildings) delete B._bb;

  // no cars parked in the fountain, on the column's steps or on the benches
  const keepCar = (x, z) => !fountains.some((r) => inside(x, z, r) || r.some(([fx, fz]) => Math.hypot(fx - x, fz - z) < 3.2)) && !(monument && Math.hypot(monument.x - x, monument.z - z) < 9) && !benches.some(([bx, bz]) => Math.hypot(bx - x, bz - z) < 3);
  const parked = []; for (let i = 0; i < cars.length; i += 3) if (keepCar(cars[i], cars[i + 1])) parked.push(cars[i], cars[i + 1], cars[i + 2]);
  stats.carsRemoved = (cars.length - parked.length) / 3;
  return { P, terrain: T, buildings, places, monument, fountains, benches, trees: Float32Array.from(trees), bushes: Float32Array.from(bushes), cars: Float32Array.from(parked), lamps: Float32Array.from(lamps), roads, areas, pois, spawn, stats };
}

