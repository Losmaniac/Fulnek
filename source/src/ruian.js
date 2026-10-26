// Bake-time only: the official address and building register (RÚIAN, ČÚZK) on top of the OSM town.
// Every address point becomes a front door with its house-number plate on the wall facing its street,
// buildings get their registered floors / year / use, and real businesses hang their signs at their real address.
import { inside } from "./city.js";

// Storefronts in town with their registered address (firmy.cz listings, October 2026). osm: the OSM place it replaces.
export const SHOPS = [
  ["Potraviny večerka", "grocery", "nám. Komenského 8"], ["Můjobchod OC Linda", "grocery", "nám. Komenského 48"],
  ["COOP Jednota", "grocery", "Masarykova 304"], ["Potraviny U Šromů", "grocery", "Fučíkova 121"],
  ["Penny", "supermarket", "U Sýpky 280"], ["BILLA", "supermarket", "Bílovecká 386"], ["Hruška", "supermarket", "Jerlochovice 148"],
  ["Lékárna U Anny", "pharmacy", "Masarykova 338", "Lékárna U Anny"], ["Lékárna Na Náměstí", "pharmacy", "nám. Komenského 9"],
  ["Pinďova oční optika", "optician", "Masarykova 300"], ["Falhar Optik", "optician", "nám. Komenského 77"],
  ["Květinářství Bártek", "florist", "Masarykova 56"], ["Pěkné kvítko", "florist", "Bílovecká 486"],
  ["Trafika", "newsagent", "nám. Komenského 9"], ["Tabák Valmont", "newsagent", "Bílovecká 486"],
  ["TETA drogerie", "chemist", "Bílovecká 386"], ["Zvěrokruh", "pet shop", "Bílovecká 386"],
  ["PEPCO", "clothes", "Bílovecká 486"], ["Svatební & módní ráj Radka", "clothes", "Masarykova 391"],
  ["Hračky vzdělávačky", "toys", "nám. Komenského 74"], ["Domácí potřeby", "household", "Masarykova 53"],
  ["Cyklo Košárek", "bikes", "Masarykova 58"], ["Montcolor barvy laky", "hardware", "Masarykova 58"],
  ["Nářadí Blaheta", "hardware", "Masarykova 363"], ["TVA servis elektro", "electrical", "Masarykova 63"],
  ["Kavárna Fulnek", "café", "Masarykova 359", "Kavárna & cukrárna Fulnek"], ["Viet Garden", "restaurant", "Masarykova 383"],
  ["Fulnek Kebab", "fast food", "Masarykova 300"], ["Hospoda U Fojtíků", "pub", "Palackého 294"],
  ["U Martiny", "pub", "Fučíkova 173"], ["Hospůdka U přechodu", "pub", "Fučíkova 97"], ["Hospoda Stodola", "pub", "L. Mašínové 620"],
  ["Restaurace Na Stovce", "restaurant", "Říční 261"], ["Česká spořitelna", "bank", "nám. Komenského 78", "Česká spořitelna"],
  ["Česká pojišťovna", "insurance", "Masarykova 49"], ["Studio vit&fit", "massage", "Fučíkova 7"],
  ["DOMOTECH-SERVIS", "service", "Nádražní 335"], ["MORAVIA Stamping", "company", "Nádražní 336"],
  ["ELEKTROVÝZBROJE Fulnek", "company", "Mlýnská 425"], ["MAXIMA Krčmář", "company", "U Sýpky 698"], ["RUPAS METAL", "company", "Masarykova 702"],
];

const r2 = (v) => Math.round(v * 100) / 100;
const segDist = (x, z, ax, az, bx, bz) => { const vx = bx - ax, vz = bz - az, L = vx * vx + vz * vz || 1, t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / L)); return [Math.hypot(x - ax - t * vx, z - az - t * vz), ax + t * vx, az + t * vz]; };
const key = (a) => a.split(",")[0].trim().toLowerCase();

export function applyRuian(city, R, P, ground) {
  const B = city.buildings, xz = ([lon, lat]) => [P.x(lon), P.z(lat)];
  const containing = (x, z) => { for (let i = 0; i < B.length; i++) if (inside(x, z, B[i].r[0])) return i; return -1; };
  const nearestWall = (x, z, max) => { let best = -1, bd = max; B.forEach((b, i) => { const r = b.r[0]; for (let q = 0; q < r.length; q++) { const d = segDist(x, z, ...r[q], ...r[(q + 1) % r.length])[0]; if (d < bd) { bd = d; best = i; } } }); return best; };

  // 1) register attributes onto the OSM footprints (the biggest registered building whose centre lies inside)
  let tagged = 0;
  const best = new Map();
  for (const s of R.so) {
    const ring = s[12]?.[0]; if (!ring) continue;
    const pts = ring.slice(0, -1).map(xz), c = pts.reduce((m, p) => [m[0] + p[0] / pts.length, m[1] + p[1] / pts.length], [0, 0]);
    const i = containing(c[0], c[1]); if (i < 0) continue;
    if (!best.has(i) || (s[9] || 0) > (best.get(i)[9] || 0)) best.set(i, s);
  }
  for (const [i, s] of best) {
    const [, hn, , use, year, cons, flats, floors] = s, b = B[i];
    Object.assign(b, { ...(floors ? { f: floors } : {}), ...(year ? { y: year } : {}), ...(use ? { u: use } : {}), ...(cons ? { k: cons } : {}), ...(flats ? { fl: flats } : {}), ...(hn ? { hn } : {}) });
    if (use === 18 || use === 21 || use === 16) delete b.win; // garages, greenhouses, technical: no windows
    tagged++;
  }

  // 2) a door per address point, on the wall of its building that faces its street
  const streets = new Map();
  for (const rd of city.roads) if (rd.n && rd.k !== "stream") { if (!streets.has(rd.n)) streets.set(rd.n, []); streets.get(rd.n).push(rd.p); }
  const anyRoads = city.roads.filter((rd) => rd.k !== "stream" && rd.k !== "rail" && rd.k !== "footway" && rd.k !== "path" && rd.k !== "track").map((rd) => rd.p);
  const nearOn = (x, z, lines) => { let bd = Infinity, bx = 0, bz = 0; for (const p of lines) for (let k = 1; k < p.length; k++) { const [d, qx, qz] = segDist(x, z, ...p[k - 1], ...p[k]); if (d < bd) { bd = d; bx = qx; bz = qz; } } return [bd, bx, bz]; };
  const doors = [], byAddr = new Map(), wallUse = new Map();
  for (const [adresa, cp, co, coL, , lon, lat] of R.adr) {
    const [x, z] = xz([lon, lat]);
    if (!(x > P.W + 5 && x < P.E - 5 && z > P.N + 5 && z < P.S - 5)) continue;
    let bi = containing(x, z); if (bi < 0) bi = nearestWall(x, z, 12); if (bi < 0) continue;
    const b = B[bi], ring = b.r[0], street = adresa.match(/^(.*?) (č\.ev\. )?\d/)?.[1], lines = streets.get(street) || anyRoads;
    let pick = null;
    for (let q = 0; q < ring.length; q++) {
      const [ax, az] = ring[q], [bx, bz] = ring[(q + 1) % ring.length], L = Math.hypot(bx - ax, bz - az);
      if (L < 1.8) continue;
      const nx = (bz - az) / L, nz = -(bx - ax) / L, mx = (ax + bx) / 2, mz = (az + bz) / 2;
      const [dS, sx, sz] = nearOn(mx + nx * 2, mz + nz * 2, lines), face = (nx * (sx - mx) + nz * (sz - mz)) / (Math.hypot(sx - mx, sz - mz) || 1);
      const dA = segDist(x, z, ax, az, bx, bz)[0], score = (face > 0.25 ? dS : 1e3 + dS) + 0.35 * dA;
      if (!pick || score < pick.score) pick = { score, ax, az, bx, bz, L, nx, nz, q };
    }
    if (!pick) continue;
    const { ax, az, L, nx, nz, q } = pick, ux = (pick.bx - ax) / L, uz = (pick.bz - az) / L;
    const wk = bi + ":" + q, used = wallUse.get(wk) || [];
    let t = Math.max(0.8, Math.min(L - 0.8, (x - ax) * ux + (z - az) * uz));
    for (const u of used) if (Math.abs(u - t) < 1.6) t = Math.min(L - 0.8, u + 1.8 <= L - 0.8 ? u + 1.8 : Math.max(0.8, u - 1.8)); // neighbouring entrances don't overlap
    used.push(t); wallUse.set(wk, used);
    const dx = ax + ux * t + nx * 0.04, dz = az + uz * t + nz * 0.04, gy = Math.min(b.g + 1.2, Math.max(b.b + 0.3, ground(dx + nx * 0.6, dz + nz * 0.6)));
    const no = co ? `${cp}/${co}${coL || ""}` : String(cp);
    doors.push([r2(dx), r2(dz), Math.round(Math.atan2(nx, nz) * 1000) / 1000, no, r2(gy), street || ""]); // street (or village) for deliveries
    byAddr.set(key(adresa), { bi, ax, az, ux, uz, nx, nz, L, t, gy });
  }

  // 3) real businesses at their address (several at one address share the wall, side by side)
  const replaced = new Set(SHOPS.filter((s) => s[3]).map((s) => s[3]));
  city.places = city.places.filter((p) => p.real && !replaced.has(p.n)); // the invented square shops go; OSM landmarks stay
  const perAddr = new Map(), missing = [];
  for (const [n, k, addr] of SHOPS) {
    const a = byAddr.get(key(addr)); if (!a) { missing.push(addr); continue; }
    const i = perAddr.get(addr) || 0; perAddr.set(addr, i + 1);
    const off = [0, 3.4, -3.4, 6.8, -6.8][i % 5], t = Math.max(1.2, Math.min(a.L - 1.2, a.t + off));
    const b = B[a.bi], x = a.ax + a.ux * t + a.nx * 0.12, z = a.az + a.uz * t + a.nz * 0.12;
    city.places.push({ n, k, x: r2(x), z: r2(z), y: r2(Math.max(b.g, a.gy) + 3.1), yaw: Math.round(Math.atan2(a.nx, a.nz) * 1000) / 1000, real: 1, a: addr });
  }
  city.doors = doors;
  return { tagged, doors: doors.length, shops: SHOPS.length - missing.length, missing };
}
