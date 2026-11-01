// Walk-in interiors: E at any building's wall (or its RÚIAN front door) steps inside. The ground floor is built on demand
// from the real footprint: rooms split off with doorways, windows on the outer walls, and furniture by the building's use
// (homes, offices and shops, halls, garages). Random per building but seeded by it, so a house looks the same every visit.
import * as THREE from "three";
import { rng } from "./textures.js";
import { uniforms } from "./env.js";

const HOME = [2, 3, 7, 8], CIVIC = [5, 9, 10, 11, 14, 15, 20], INDUSTRY = [1, 12, 13, 16, 17]; // RÚIAN use codes, as in facade.js
const FABRIC = [0x7b4b3a, 0x3f5b78, 0x55704a, 0x8d7f6a, 0x5e4a6e, 0x9b9b95, 0x2f3a45, 0xa0603a];
const WOOD = [0x8a6240, 0xb08a5c, 0x5f4330, 0xc9a77c, 0x6e4b33];
const WALLS = [0xe9e4d8, 0xf1ece0, 0xdfe6e3, 0xefe2cf, 0xe2dccf, 0xd9e2d0];
const FLOORS = [0x9c7a54, 0xb89466, 0x7d5e43, 0xa9a49a, 0x8f8a80];
const WHITE = 0xf2f2ee, DARK = 0x26282b, METAL = 0x9aa1a8;

const inside = (x, z, ring) => { let c = false; for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) { const [xi, zi] = ring[i], [xj, zj] = ring[j]; if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c; } return c; };

export function createInteriors(city) {
  const B = city.buildings, doors = city.doors || [];
  // the wall the player stands at and faces, outside a building: { i, x, z, nx, nz } (point on the wall, outward normal)
  const near = (pos, yaw) => {
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
    let best = null, bd = 0.9;
    B.forEach((b, i) => {
      const [cx, cz, , hs, hl] = b.o;
      if (Math.abs(pos.x - cx) > hs + hl + 2 || Math.abs(pos.z - cz) > hs + hl + 2) return;
      const ring = b.r[0];
      if (inside(pos.x, pos.z, ring)) return;
      for (let k = 0; k < ring.length; k++) {
        const [ax, az] = ring[k], [bx, bz] = ring[(k + 1) % ring.length], vx = bx - ax, vz = bz - az, L = Math.hypot(vx, vz);
        if (L < 1.4) continue;
        const t = Math.max(0.6 / L, Math.min(1 - 0.6 / L, ((pos.x - ax) * vx + (pos.z - az) * vz) / (L * L))), qx = ax + vx * t, qz = az + vz * t, d = Math.hypot(pos.x - qx, pos.z - qz);
        if (d >= bd) continue;
        let nx = vz / L, nz = -vx / L; if (inside(qx + nx * 0.1, qz + nz * 0.1, ring)) { nx = -nx; nz = -nz; }
        if (fx * -nx + fz * -nz < 0.3) continue; // facing the wall
        const sx = qx - nx * 0.8, sz = qz - nz * 0.8; // where you'd stand inside: needs room (narrow sheds and notches can't be entered from here)
        if (!inside(sx, sz, ring) || ring.some((p, j) => { const q = ring[(j + 1) % ring.length], wx = q[0] - p[0], wz = q[1] - p[1], l2 = wx * wx + wz * wz || 1, s2 = Math.max(0, Math.min(1, ((sx - p[0]) * wx + (sz - p[1]) * wz) / l2)); return Math.hypot(sx - p[0] - wx * s2, sz - p[1] - wz * s2) < 0.45; })) continue;
        bd = d; best = { i, x: qx, z: qz, nx, nz };
      }
    });
    if (best) { // snap to the front door when one is close
      const d = doors.find((d) => Math.hypot(d[0] - best.x, d[1] - best.z) < 2);
      if (d) { best.x = d[0]; best.z = d[1]; }
    }
    return best;
  };

  const build = (e) => {
    const b = B[e.i], ring = b.r[0], [cx, cz, ang] = b.o, ux = Math.cos(ang), uz = Math.sin(ang);
    const rnd = rng(e.i * 7919 + 13), pick = (a) => a[Math.floor(rnd() * a.length)], range = (a, c) => a + rnd() * (c - a);
    // local frame: u along the building, v across, y up from the ground floor; mesh.rotation.y = -ang maps it back
    const L = (x, z) => [(x - cx) * ux + (z - cz) * uz, -(x - cx) * uz + (z - cz) * ux], W = (u, v) => [cx + u * ux - v * uz, cz + u * uz + v * ux];
    const poly = ring.map(([x, z]) => L(x, z)), inPoly = (u, v) => inside(u, v, poly);
    let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity;
    for (const [u, v] of poly) { u0 = Math.min(u0, u); u1 = Math.max(u1, u); v0 = Math.min(v0, v); v1 = Math.max(v1, v); }
    const area = Math.abs(poly.reduce((a, p, k) => { const q = poly[(k + 1) % poly.length]; return a + p[0] * q[1] - q[0] * p[1]; }, 0) / 2);
    const floors = Math.max(1, b.f || Math.round((b.e - b.g) / 3)), H = Math.max(2.4, Math.min(3.4, (b.e - b.g) / floors, b.e - b.g - 0.1));
    const kind = b.u === 18 || area < 25 ? "garage" : INDUSTRY.includes(b.u) || area > 900 ? "hall" : CIVIC.includes(b.u) ? "civic" : "home";
    const P = [], N = [], C = [], segs = [], col = new THREE.Color(), WIN = [];
    // normals from the winding: with a double-sided material each face is then lit on whichever side you see it from
    const tri = (a, b2, c, _n, hex) => {
      const e1 = [b2[0] - a[0], b2[1] - a[1], b2[2] - a[2]], e2 = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
      let n = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]]; const l = Math.hypot(...n) || 1; n = n.map((x) => x / l);
      col.setHex(hex); for (const p of [a, b2, c]) { P.push(...p); N.push(...n); C.push(col.r, col.g, col.b); }
    };
    const quad = (a, b2, c, d, n, hex) => { tri(a, b2, c, n, hex); tri(a, c, d, n, hex); };
    const seg = (au, av, bu, bv, top) => { const [ax, az] = W(au, av), [bx, bz] = W(bu, bv); segs.push(ax, az, bx, bz, b.g + top); };
    // a box: centre (u, v) on the floor at height y, size su x sy x sv, turned by yaw; collide: its footprint blocks walking
    const box = (u, v, y, su, sy, sv, yaw, hex, collide = false) => {
      const c = Math.cos(yaw), s = Math.sin(yaw), at = (du, dv, dy) => [u + du * c + dv * s, y + dy, v - du * s + dv * c], hu = su / 2, hv = sv / 2;
      const p = [at(-hu, -hv, 0), at(hu, -hv, 0), at(hu, hv, 0), at(-hu, hv, 0), at(-hu, -hv, sy), at(hu, -hv, sy), at(hu, hv, sy), at(-hu, hv, sy)];
      quad(p[4], p[7], p[6], p[5], [0, 1, 0], hex);
      quad(p[0], p[1], p[5], p[4], [s, 0, -c], hex); quad(p[2], p[3], p[7], p[6], [-s, 0, c], hex);
      quad(p[1], p[2], p[6], p[5], [c, 0, -s], hex); quad(p[3], p[0], p[4], p[7], [-c, 0, s], hex);
      if (collide) for (let k = 0; k < 4; k++) seg(p[k][0], p[k][2], p[(k + 1) % 4][0], p[(k + 1) % 4][2], y + sy);
    };

    // outer walls, windows, floor and ceiling
    const wallC = pick(WALLS), floorC = pick(FLOORS), entry = L(e.x, e.z), inN = [-(e.nx * ux + e.nz * uz), -(-e.nx * uz + e.nz * ux)];
    for (let k = 0; k < poly.length; k++) {
      const [au, av] = poly[k], [bu, bv] = poly[(k + 1) % poly.length], len = Math.hypot(bu - au, bv - av);
      if (len < 0.01) continue;
      let nu = -(bv - av) / len, nv = (bu - au) / len; if (!inPoly((au + bu) / 2 + nu * 0.1, (av + bv) / 2 + nv * 0.1)) { nu = -nu; nv = -nv; } // inward
      quad([au, 0, av], [bu, 0, bv], [bu, H, bv], [au, H, av], [nu, 0, nv], wallC);
      seg(au, av, bu, bv, H);
      const n = Math.floor(len / 3), top = Math.min(H - 0.25, 2.3);
      for (let w = 0; w < n; w++) { // panes just inside the wall, lit by the sky (see update)
        const t = (w + 0.5) / n, mu = au + (bu - au) * t, mv = av + (bv - av) * t;
        if (Math.hypot(mu - entry[0], mv - entry[1]) < 1.2) continue;
        const du = ((bu - au) / len) * 0.55, dv = ((bv - av) / len) * 0.55, o = 0.03;
        WIN.push([mu - du + nu * o, 0.95, mv - dv + nv * o], [mu + du + nu * o, 0.95, mv + dv + nv * o], [mu + du + nu * o, top, mv + dv + nv * o], [mu - du + nu * o, top, mv - dv + nv * o]);
      }
    }
    for (const t of THREE.ShapeUtils.triangulateShape(poly.map(([u, v]) => new THREE.Vector2(u, v)), [])) {
      const [a, b2, c] = t.map((k) => poly[k]);
      tri([a[0], 0, a[1]], [b2[0], 0, b2[1]], [c[0], 0, c[1]], [0, 1, 0], floorC);
      tri([a[0], H, a[1]], [b2[0], H, b2[1]], [c[0], H, c[1]], [0, -1, 0], 0xf4f2ec);
    }
    // the door you came in by
    { const tu = -inN[1], tv = inN[0], o = 0.04; quad([entry[0] - tu * 0.5 + inN[0] * o, 0, entry[1] - tv * 0.5 + inN[1] * o], [entry[0] + tu * 0.5 + inN[0] * o, 0, entry[1] + tv * 0.5 + inN[1] * o], [entry[0] + tu * 0.5 + inN[0] * o, 2.05, entry[1] + tv * 0.5 + inN[1] * o], [entry[0] - tu * 0.5 + inN[0] * o, 2.05, entry[1] - tv * 0.5 + inN[1] * o], [inN[0], 0, inN[1]], 0x6b4a30); }

    // rooms: split the box lengthwise or crosswise until rooms are home-sized; every split wall gets a doorway
    const start = [entry[0] + inN[0] * 0.8, entry[1] + inN[1] * 0.8], rooms = [], keep = [[entry[0] + inN[0] * 0.9, entry[1] + inN[1] * 0.9, 1.4]]; // keep-out circles: entry, doorways
    const target = kind === "hall" ? Infinity : kind === "civic" ? 30 : 24, cap = 24; // m² per room: big enough for its furniture
    const split = (r) => {
      const w = r.u1 - r.u0, d = r.v1 - r.v0;
      if (rooms.length >= cap || w * d < target * 1.6 || Math.max(w, d) < 6.4) { rooms.push(r); return; }
      const along = w >= d, a = along ? r.u0 : r.v0, len = along ? w : d, at = a + len * range(0.38, 0.62);
      const lo = along ? r.v0 : r.u0, hi = along ? r.v1 : r.u1, [sa, sb] = along ? start : [start[1], start[0]];
      const gap = Math.abs(sa - at) < 0.9 && sb > lo && sb < hi ? Math.max(lo + 0.05, Math.min(hi - 1, sb - 0.475)) : range(lo + 0.6, hi - 1.5); // a wall across the way in gets its doorway right there
      for (const [p, q] of [[lo, gap], [gap + 0.95, hi]]) if (q - p > 0.05) {
        const m = (p + q) / 2;
        if (along) { box(at, m, 0, 0.1, H, q - p, 0, wallC); seg(at, p, at, q, H); } else { box(m, at, 0, q - p, H, 0.1, 0, wallC); seg(p, at, q, at, H); }
      }
      if (along) box(at, gap + 0.475, 2.05, 0.1, H - 2.05, 0.95, 0, wallC); else box(gap + 0.475, at, 2.05, 0.95, H - 2.05, 0.1, 0, wallC); // lintel
      keep.push(along ? [at, gap + 0.475, 1.0] : [gap + 0.475, at, 1.0]);
      if (along) { split({ ...r, u1: at }); split({ ...r, u0: at }); } else { split({ ...r, v1: at }); split({ ...r, v0: at }); }
    };
    split({ u0: u0 + 0.1, u1: u1 - 0.1, v0: v0 + 0.1, v1: v1 - 0.1 });

    // furniture: things against a wall (front = local +z faces the room) or free-standing; nothing on doorways or outside the walls
    const placed = [];
    const free = (a0, a1, b0, b1) => {
      for (const [p, q] of [[a0, b0], [a1, b0], [a1, b1], [a0, b1], [(a0 + a1) / 2, (b0 + b1) / 2]]) if (!inPoly(p, q)) return false;
      for (const [ku, kv, kr] of keep) if (ku > a0 - kr && ku < a1 + kr && kv > b0 - kr && kv < b1 + kr) return false;
      for (const [p0, p1, q0, q1] of placed) if (a0 < p1 && a1 > p0 && b0 < q1 && b1 > q0) return false;
      return true;
    };
    const room = (r) => ({ ...r, w: r.u1 - r.u0, d: r.v1 - r.v0 });
    const wall = (r, w, d, model, tries = 8) => { // against a random wall of room r
      for (let k = 0; k < tries; k++) {
        const side = Math.floor(rnd() * 4), lenS = side < 2 ? r.w : r.d;
        if (lenS < w + 0.2) continue;
        const t = range(w / 2 + 0.1, lenS - w / 2 - 0.1);
        const [u, v, yaw] = [[r.u0 + t, r.v0 + d / 2 + 0.06, 0], [r.u0 + t, r.v1 - d / 2 - 0.06, Math.PI], [r.u0 + d / 2 + 0.06, r.v0 + t, Math.PI / 2], [r.u1 - d / 2 - 0.06, r.v0 + t, -Math.PI / 2]][side];
        const hu = side < 2 ? w / 2 : d / 2, hv = side < 2 ? d / 2 : w / 2;
        if (!free(u - hu, u + hu, v - hv, v + hv)) continue;
        placed.push([u - hu, u + hu, v - hv, v + hv]); model(u, v, yaw); return [u, v, yaw];
      }
      return null;
    };
    const centre = (r, w, d, model) => { // free-standing, leaving a walkway round it
      if (r.w < w + 1.8 || r.d < d + 1.8) return null;
      const u = (r.u0 + r.u1) / 2 + range(-0.3, 0.3), v = (r.v0 + r.v1) / 2 + range(-0.3, 0.3);
      if (!free(u - w / 2 - 0.5, u + w / 2 + 0.5, v - d / 2 - 0.5, v + d / 2 + 0.5)) return null;
      placed.push([u - w / 2, u + w / 2, v - d / 2, v + d / 2]); model(u, v, 0); return [u, v];
    };
    // models: (u, v, yaw) at the floor; parts are offset in the model's own frame (x across its front, z towards the room)
    const part = (u, v, yaw, x, z, y, sx, sy, sz, hex, collide) => { const c = Math.cos(yaw), s = Math.sin(yaw); box(u + x * c + z * s, v - x * s + z * c, y, sx, sy, sz, yaw, hex, collide); };
    const fabric = pick(FABRIC), wood = pick(WOOD), wood2 = pick(WOOD);
    const M = {
      sofa: (u, v, y) => { part(u, v, y, 0, 0, 0, 2, 0.42, 0.9, fabric, true); part(u, v, y, 0, -0.35, 0.42, 2, 0.45, 0.2, fabric); for (const s of [-1, 1]) part(u, v, y, s * 0.9, 0, 0.42, 0.2, 0.22, 0.9, fabric); },
      coffee: (u, v, y) => { part(u, v, y, 0, 0, 0.38, 1, 0.05, 0.55, wood, true); for (const [a, c] of [[-0.45, -0.22], [0.45, -0.22], [-0.45, 0.22], [0.45, 0.22]]) part(u, v, y, a, c, 0, 0.05, 0.38, 0.05, wood); },
      tv: (u, v, y) => { part(u, v, y, 0, 0, 0, 1.4, 0.5, 0.4, wood2, true); part(u, v, y, 0, -0.08, 0.5, 1.1, 0.65, 0.06, DARK); },
      shelf: (u, v, y) => { part(u, v, y, 0, 0, 0, 0.9, 1.9, 0.35, wood, true); for (let k = 0; k < 4; k++) for (let j = 0; j < 4; j++) part(u, v, y, -0.3 + j * 0.2, 0.03, 0.1 + k * 0.45, 0.16, 0.3, 0.26, pick(FABRIC)); },
      plant: (u, v, y) => { part(u, v, y, 0, 0, 0, 0.32, 0.32, 0.32, 0xa5552f, true); part(u, v, y, 0, 0, 0.32, 0.5, 0.75, 0.5, 0x3f6b35); },
      rug: (u, v) => box(u, v, 0, range(1.6, 2.4), 0.012, range(1.2, 1.8), 0, pick(FABRIC)),
      counter: (len) => (u, v, y) => { part(u, v, y, 0, 0, 0, len, 0.86, 0.6, pick([WHITE, wood, 0x50555a]), true); part(u, v, y, 0, 0, 0.86, len + 0.02, 0.04, 0.62, 0x3b3b3a); part(u, v, y, -len / 4, 0.02, 0.9, 0.5, 0.01, 0.4, 0x8e9499); },
      fridge: (u, v, y) => part(u, v, y, 0, 0, 0, 0.6, 1.8, 0.65, WHITE, true),
      chair: (u, v, y) => { part(u, v, y, 0, 0, 0.43, 0.45, 0.05, 0.45, wood, true); part(u, v, y, 0, -0.2, 0.48, 0.45, 0.45, 0.05, wood); for (const [a, c] of [[-0.19, -0.19], [0.19, -0.19], [-0.19, 0.19], [0.19, 0.19]]) part(u, v, y, a, c, 0, 0.04, 0.43, 0.04, wood); },
      table: (w, d, chairs) => (u, v, y) => {
        part(u, v, y, 0, 0, 0.72, w, 0.04, d, wood, true); for (const [a, c] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) part(u, v, y, a * (w / 2 - 0.06), c * (d / 2 - 0.06), 0, 0.06, 0.72, 0.06, wood);
        if (chairs) for (const [a, c, r] of [[-w / 4, -d / 2 - 0.35, 0], [w / 4, -d / 2 - 0.35, 0], [-w / 4, d / 2 + 0.35, Math.PI], [w / 4, d / 2 + 0.35, Math.PI]]) M.chair(u + a * Math.cos(y) + c * Math.sin(y), v - a * Math.sin(y) + c * Math.cos(y), y + r);
      },
      bed: (u, v, y) => { const b2 = pick(FABRIC); part(u, v, y, 0, 0, 0, 1.6, 0.35, 2, wood, true); part(u, v, y, 0, 0, 0.35, 1.5, 0.18, 1.9, WHITE); part(u, v, y, 0, 0.3, 0.53, 1.52, 0.06, 1.3, b2); for (const s of [-1, 1]) part(u, v, y, s * 0.38, -0.75, 0.53, 0.6, 0.12, 0.35, WHITE); part(u, v, y, 0, -0.97, 0, 1.6, 0.95, 0.07, wood); },
      wardrobe: (u, v, y) => { part(u, v, y, 0, 0, 0, 1.2, 2, 0.6, wood2, true); part(u, v, y, 0, 0.301, 0.1, 0.02, 1.8, 0.01, DARK); },
      night: (u, v, y) => { part(u, v, y, 0, 0, 0, 0.45, 0.5, 0.4, wood2, true); part(u, v, y, 0, 0, 0.5, 0.18, 0.3, 0.18, 0xe8d7a8); },
      tub: (u, v, y) => { part(u, v, y, 0, 0, 0, 1.7, 0.55, 0.75, WHITE, true); part(u, v, y, 0, 0, 0.551, 1.5, 0.002, 0.55, 0xa9c4cc); },
      toilet: (u, v, y) => { part(u, v, y, 0, 0.05, 0, 0.38, 0.42, 0.5, WHITE, true); part(u, v, y, 0, -0.22, 0.42, 0.4, 0.4, 0.16, WHITE); },
      sink: (u, v, y) => { part(u, v, y, 0, 0, 0, 0.55, 0.82, 0.45, wood2, true); part(u, v, y, 0, 0, 0.82, 0.58, 0.06, 0.48, WHITE); part(u, v, y, 0, -0.22, 1.1, 0.5, 0.65, 0.03, 0xbfd3db); },
      desk: (u, v, y) => { part(u, v, y, 0, -0.4, 0.73, 1.4, 0.04, 0.7, wood, true); for (const s of [-1, 1]) part(u, v, y, s * 0.66, -0.4, 0, 0.05, 0.73, 0.66, METAL); part(u, v, y, 0, -0.6, 0.77, 0.6, 0.38, 0.04, DARK); M.chair(u + 0.4 * Math.sin(y), v + 0.4 * Math.cos(y), y + Math.PI); }, // footprint: desk at the wall, chair in front
      rack: (u, v, y) => { part(u, v, y, 0, 0, 0, 2.4, 0.08, 0.8, 0x3d6fa6, true); for (const s of [-1, 1]) part(u, v, y, s * 1.17, 0, 0, 0.06, 2.6, 0.8, 0x3d6fa6); for (let k = 1; k < 4; k++) { part(u, v, y, 0, 0, k * 0.85, 2.4, 0.05, 0.8, 0xd08a2a); for (let j = 0; j < 3; j++) if (rnd() < 0.7) part(u, v, y, -0.8 + j * 0.8, 0, k * 0.85 + 0.05, 0.6, 0.45, 0.6, pick([0xb58a5a, 0xc9a77c, 0x8a6a4a])); } },
      crate: (u, v, y) => part(u, v, y, 0, 0, 0, 1, range(0.6, 1.1), 1, pick([0xb58a5a, 0x8a6a4a]), true),
      bench: (u, v, y) => { part(u, v, y, 0, 0, 0.88, 2, 0.06, 0.7, wood, true); for (const s of [-1, 1]) part(u, v, y, s * 0.94, 0, 0, 0.08, 0.88, 0.66, METAL); part(u, v, y, 0, -0.33, 1.1, 2, 0.6, 0.03, 0x6b6f72); },
      car: (u, v, y) => { const c2 = pick([0x8c1c1c, 0x1f5f8b, 0xf2f2ef, 0x1c1d20, 0x9fa3a8]); part(u, v, y, 0, 0, 0.3, 1.75, 0.65, 4.2, c2, true); part(u, v, y, 0, -0.3, 0.95, 1.6, 0.5, 2.2, 0x1d252c); },
      counterShop: (u, v, y) => { part(u, v, y, 0, 0, 0, 2.2, 1, 0.7, wood, true); part(u, v, y, 0.6, 0, 1, 0.4, 0.3, 0.35, DARK); },
    };
    const furnish = (r, type) => {
      if (type === "living") { wall(r, 2, 0.9, M.sofa) && centre(r, 1, 0.55, M.coffee); wall(r, 1.4, 0.4, M.tv); wall(r, 0.9, 0.35, M.shelf); wall(r, 0.4, 0.4, M.plant); if (rnd() < 0.7) M.rug((r.u0 + r.u1) / 2, (r.v0 + r.v1) / 2); }
      else if (type === "kitchen") { const len = Math.min(3, Math.max(1.2, Math.min(r.w, r.d) - 1)); wall(r, len, 0.62, M.counter(len)); wall(r, 0.6, 0.65, M.fridge); centre(r, 1.4, 0.8, M.table(1.4, 0.8, true)); }
      else if (type === "bedroom") { wall(r, 1.6, 2, M.bed); wall(r, 1.2, 0.6, M.wardrobe); wall(r, 0.45, 0.4, M.night); if (rnd() < 0.5) wall(r, 0.4, 0.4, M.plant); }
      else if (type === "bath") { wall(r, 1.7, 0.75, M.tub); wall(r, 0.4, 0.62, M.toilet); wall(r, 0.6, 0.48, M.sink); }
      else if (type === "studio") { wall(r, 1.6, 2, M.bed); wall(r, 1.8, 0.6, M.counter(1.8)); centre(r, 1, 0.7, M.table(1, 0.7, true)); wall(r, 1.2, 0.6, M.wardrobe); }
      else if (type === "office") { const n = Math.max(1, Math.floor((r.w * r.d) / 9)); for (let k = 0; k < n; k++) wall(r, 1.4, 1.5, M.desk); wall(r, 0.9, 0.35, M.shelf); wall(r, 0.4, 0.4, M.plant); }
      else if (type === "shop") { wall(r, 2.2, 0.7, M.counterShop); for (let k = 0; k < 5; k++) wall(r, 2.4, 0.8, M.rack); }
      else if (type === "garage") { if (r.w > 3 && r.d > 5.5 || r.d > 3 && r.w > 5.5) { const u = (r.u0 + r.u1) / 2, v = (r.v0 + r.v1) / 2, yaw = r.w > r.d ? Math.PI / 2 : 0, hu = r.w > r.d ? 2.1 : 0.9, hv = r.w > r.d ? 0.9 : 2.1; if (free(u - hu, u + hu, v - hv, v + hv)) { placed.push([u - hu, u + hu, v - hv, v + hv]); M.car(u, v, yaw); } } wall(r, 2, 0.7, M.bench); wall(r, 2.4, 0.8, M.rack); }
      else if (type === "hall") { // aisles of racks across the hall
        for (let a = r.u0 + 2.5; a < r.u1 - 2.5; a += 4) for (let c = r.v0 + 2; c < r.v1 - 2; c += 3) {
          if (rnd() < 0.15) continue;
          if (free(a - 1.2, a + 1.2, c - 0.4, c + 0.4)) { placed.push([a - 1.2, a + 1.2, c - 0.4, c + 0.4]); (rnd() < 0.8 ? M.rack : M.crate)(a, c, 0); }
        }
      }
    };
    const R = rooms.map(room).filter((r) => inPoly((r.u0 + r.u1) / 2, (r.v0 + r.v1) / 2) || r.w * r.d > 4).sort((a, c) => c.w * c.d - a.w * a.d);
    const plan = kind === "home" ? (R.length === 1 ? ["studio"] : ["living", "kitchen", "bedroom", "bath", "bedroom", "bedroom", "kitchen", "living", "bath"]) : kind === "civic" ? ["shop", "office", "office", "office"] : [kind];
    R.forEach((r, k) => {
      const type = plan[k % plan.length];
      if (type === "bath" || type === "kitchen") box((r.u0 + r.u1) / 2, (r.v0 + r.v1) / 2, 0.006, r.w, 0.004, r.d, 0, pick([0xd9dcdb, 0xc8cfd2, 0xe6e1d6])); // tiles
      furnish(r, type);
    });

    // assemble: one mesh for everything solid, one for the window panes
    const scene = new THREE.Scene(), group = new THREE.Group();
    scene.background = new THREE.Color(0x1a1c1f);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(P, 3)); g.setAttribute("normal", new THREE.Float32BufferAttribute(N, 3)); g.setAttribute("color", new THREE.Float32BufferAttribute(C, 3));
    group.add(new THREE.Mesh(g, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide })));
    const winMat = new THREE.MeshBasicMaterial({ color: 0xbfd3e6, side: THREE.DoubleSide }), wp = [];
    for (let k = 0; k < WIN.length; k += 4) { const [a, b2, c, d] = WIN.slice(k, k + 4); wp.push(...a, ...b2, ...c, ...a, ...c, ...d); }
    const wg = new THREE.BufferGeometry(); wg.setAttribute("position", new THREE.Float32BufferAttribute(wp, 3));
    group.add(new THREE.Mesh(wg, winMat));
    group.position.set(cx, b.g, cz); group.rotation.y = -ang;
    const lamp = new THREE.PointLight(0xfff0d8, 18, 14, 1.6), hemi = new THREE.HemisphereLight(0xfff8ee, 0xd2c8b8, 1.5);
    scene.add(group, lamp, hemi);
    const [sx, sz] = W(...start);
    return {
      scene, segs: Float32Array.from(segs), y: b.g, start: { x: sx, z: sz }, out: { x: e.x + e.nx * 0.9, z: e.z + e.nz * 0.9 }, yawIn: Math.atan2(e.nx, e.nz), yawOut: Math.atan2(-e.nx, -e.nz), // facing in through the door, then back out
 kind, rooms: R.length, tris: P.length / 9,
      // the lamp follows you under the ceiling; the panes show the sky outside
      update: (pos) => { lamp.position.set(pos.x, b.g + H - 0.3, pos.z); winMat.color.copy(uniforms.uSky.value).multiplyScalar(1.15 - 0.85 * uniforms.uNight.value); },
      dispose: () => { g.dispose(); wg.dispose(); group.children.forEach((m) => m.material.dispose()); },
    };
  };
  return { near, build };
}
