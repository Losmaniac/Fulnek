import * as THREE from "three";
import { terrainAt } from "./city.js";
import { decode } from "./decode.js";
import { facadeTextures, roadTextures, groundDetail, leafTexture, rng } from "./textures.js";
import { buildRoads, buildLamps } from "./roads.js";
import { buildTrees, buildBushes, buildGrass } from "./nature.js";
import { buildCars } from "./cars.js";
import { createEnv, uniforms, litWindows, snowy, glossy } from "./env.js";
import { buildPeople } from "./people.js";
import { buildFauna } from "./fauna.js";
import { buildSigns } from "./signs.js";
import { buildSmoke } from "./smoke.js";
import { buildProps } from "./props.js";
import { facadeParams, facadeMaterial } from "./facade.js";
import { buildDoors } from "./doors.js";

export { decode };
const ROOF_TILE = 2.0; // metres per texture repeat
const PASTEL = [0xf0d37a, 0xe9b98a, 0xd9e3c4, 0xf2e6c2, 0xe7c3b8, 0xcfdde2, 0xf4ead6, 0xe6cf98, 0xdcc6e0, 0xf1dca8];

const NOWIN = [0, 0, 0, 0, 0, 0, 0, 0, -9, -9];
class Buf {
  constructor() { this.p = []; this.n = []; this.c = []; this.u = []; this.x = []; this.cur = NOWIN; } // x: facade attributes fw, fs, fd per vertex
  tri(a, b, c, ua, ub, uc, ca, cb = ca, cc = ca) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz);
    if (l < 1e-9) return;
    nx /= l; ny /= l; nz /= l;
    this.p.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
    for (let i = 0; i < 3; i++) this.n.push(nx, ny, nz);
    for (const k of [ca, cb, cc]) this.c.push(k.r, k.g, k.b);
    this.u.push(ua[0], ua[1], ub[0], ub[1], uc[0], uc[1]);
    for (let i = 0; i < 3; i++) this.x.push(...this.cur);
  }
  quad(a, b, c, d, ua, ub, uc, ud, ca, cb, cc, cd) { this.tri(a, b, c, ua, ub, uc, ca, cb, cc); this.tri(a, c, d, ua, uc, ud, ca, cc, cd); }
}

// walls from base to the roof line, split into a darker plinth and the facade; darker low down (fake ambient occlusion)
// fp: facade parameters (null: no windows); uv on facades counts window bays across and storeys up, for the shader
// shop(a, b): true when a shop sign hangs on that wall, which then gets a shop window on its ground floor
function walls(fac, pl, ring, base, g, top, col, pcol, fp, shop, sbuf, doors) {
  const P = g + 0.6, S = g + 3.2, ao = (y, c) => c.clone().multiplyScalar(0.66 + 0.34 * Math.min(1, Math.max(0, (y - g) / 8))), st = fp ? fp.storey : 3;
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length], len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (len < 0.05) continue;
    const ya = top(a), yb = top(b), pa = Math.min(P, ya), pb = Math.min(P, yb), n = fp && len > 2.2 ? Math.max(1, Math.round(len / fp.bay)) : 0, u1 = n || len / 8;
    const v = (y) => (y - g) / st, V = (x, y, z) => [x, y, z];
    pl.quad(V(a[0], base, a[1]), V(b[0], base, b[1]), V(b[0], pb, b[1]), V(a[0], pa, a[1]), [0, 0], [len / 4, 0], [len / 4, 0.15], [0, 0.15], ao(base, pcol), ao(base, pcol), ao(pb, pcol), ao(pa, pcol));
    const sh = shop && ya > S && yb > S && shop(a, b), lo = sh ? S : P;
    if (sh) sbuf.quad(V(a[0], P, a[1]), V(b[0], P, b[1]), V(b[0], S, b[1]), V(a[0], S, a[1]), [0, 0.19], [u1, 0.19], [u1, 1], [0, 1], ao(P, col), ao(P, col), ao(S, col), ao(S, col));
    if (n) { // which bays hold a front door (no window drawn there on the ground floor)
      const dk = [-9, -9]; let m = 0;
      for (const d of doors) { const vx = b[0] - a[0], vz = b[1] - a[1], t = ((d[0] - a[0]) * vx + (d[1] - a[1]) * vz) / (len * len); if (m < 2 && t > 0 && t < 1 && Math.abs((d[0] - a[0]) * vz - (d[1] - a[1]) * vx) / len < 0.4) dk[m++] = Math.floor(t * n); }
      fac.cur = [fp.winW, fp.winH, n, fp.floors, fp.type, fp.frame, fp.decor, fp.seed, dk[0], dk[1]];
    }
    if (ya > lo || yb > lo) fac.quad(V(a[0], lo, a[1]), V(b[0], lo, b[1]), V(b[0], yb, b[1]), V(a[0], ya, a[1]), [0, v(lo)], [u1, v(lo)], [u1, v(yb)], [0, v(ya)], ao(lo, col), ao(lo, col), ao(yb, col), ao(ya, col));
    fac.cur = NOWIN;
  }
}

function splitRidge(ring, dist) { // insert the points where the ridge line crosses the footprint
  const out = [];
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length], da = dist(a), db = dist(b);
    out.push(a);
    if (da * db < 0) { const t = da / (da - db); out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); }
  }
  return out;
}
const v2 = (r) => r.map(([x, z]) => new THREE.Vector2(x, z));

function buildingsMesh(city, ftex) {
  const order = ["facade", "plain", "plinth", "roof", "shop"], bufs = Object.fromEntries(order.map((k) => [k, new Buf()]));
  const NOSHOP = new Set(["town hall", "police", "fire station", "museum", "company", "tourist information", "hotel", "petrol station", "post office"]);
  const signs = (city.places || []).filter((p) => !NOSHOP.has(p.k)); // these get a shop window on their ground floor
  const shopWall = (a, b) => signs.some((p) => { // sign within half a metre of this wall
    const vx = b[0] - a[0], vz = b[1] - a[1], L = vx * vx + vz * vz || 1, t = ((p.x - a[0]) * vx + (p.z - a[1]) * vz) / L;
    return t > 0 && t < 1 && Math.hypot(p.x - a[0] - t * vx, p.z - a[1] - t * vz) < 0.5;
  });
  const doors = city.doors || [], segs = [], chimneys = [], [sx, sz] = city.spawn, brick = new THREE.Color(0x7a4c3d), stone = new THREE.Color(0x8b877f);
  for (const B of city.buildings) {
    const wall = new THREE.Color(B.w), rc = new THREE.Color(B.c), pcol = wall.clone().lerp(stone, 0.6).multiplyScalar(0.8);
    const [cx, cz, ang, hs, hl] = B.o, rh = B.t - B.e, ux = Math.cos(ang), uz = Math.sin(ang), nx = -uz, nz = ux;
    const dist = (p) => (p[0] - cx) * nx + (p[1] - cz) * nz, along = (p) => (p[0] - cx) * ux + (p[1] - cz) * uz;
    const rnd = rng(Math.round(cx * 31.7 + cz * 117.3));
    const fp = B.win ? facadeParams(B, Math.hypot(cx - sx, cz - sz) < 260, rnd) : null;
    if (fp?.style === "baroque" && !B.wc) wall.setHex(PASTEL[Math.floor(rnd() * 1e4) % PASTEL.length]); // town-square burgher houses
    if (fp?.wall) wall.setHex(fp.wall); // panel blocks, insulated and repainted
    const bd = doors.filter((d) => d[0] > B.o[0] - 80 && d[0] < B.o[0] + 80 && d[1] > B.o[1] - 80 && d[1] < B.o[1] + 80);
    const gable = B.s === "g", top = gable ? (p) => B.e + rh * Math.max(0, 1 - Math.abs(dist(p)) / hs) : () => B.e;
    for (const r of B.r) {
      walls(fp ? bufs.facade : bufs.plain, bufs.plinth, gable ? splitRidge(r, dist) : r, B.b, B.g, top, wall, pcol, fp, fp && shopWall, bufs.shop, bd);
      for (let i = 0; i < r.length; i++) { const a = r[i], b = r[(i + 1) % r.length]; segs.push(a[0], a[1], b[0], b[1], B.t); }
    }
    const roof = bufs.roof, RU = (p) => [along(p) / ROOF_TILE, (Math.abs(dist(p)) * Math.hypot(1, rh / hs)) / ROOF_TILE];
    if (gable) {
      const ring = splitRidge(B.r[0], dist);
      for (const side of [1, -1]) {
        const half = ring.filter((p) => dist(p) * side >= -1e-6);
        if (half.length < 3) continue;
        const P = (p) => [p[0], top(p), p[1]];
        for (const [i, j, k] of THREE.ShapeUtils.triangulateShape(v2(half), [])) roof.tri(P(half[i]), P(half[j]), P(half[k]), RU(half[i]), RU(half[j]), RU(half[k]), rc);
      }
    } else if (B.s === "h") { // hipped, on the footprint's rectangle
      const c = (a, b, y) => [cx + ux * a + nx * b, y, cz + uz * a + nz * b], rl = Math.max(hl - hs, 0);
      const e1 = c(hl, hs, B.e), e2 = c(-hl, hs, B.e), e3 = c(-hl, -hs, B.e), e4 = c(hl, -hs, B.e), r1 = c(rl, 0, B.t), r2 = c(-rl, 0, B.t);
      const U = (p) => RU([p[0], p[2]]);
      roof.quad(e1, e2, r2, r1, U(e1), U(e2), U(r2), U(r1), rc, rc, rc, rc);
      roof.quad(e3, e4, r1, r2, U(e3), U(e4), U(r1), U(r2), rc, rc, rc, rc);
      roof.tri(e4, e1, r1, U(e4), U(e1), U(r1), rc); roof.tri(e2, e3, r2, U(e2), U(e3), U(r2), rc);
    } else if (B.s === "p") {
      const apex = [cx, B.t, cz], r = B.r[0];
      for (let i = 0; i < r.length; i++) { const a = r[i], b = r[(i + 1) % r.length]; roof.tri([a[0], B.e, a[1]], [b[0], B.e, b[1]], apex, [0, 0], [1, 0], [0.5, rh / ROOF_TILE], rc); }
    } else {
      const all = B.r.flat(), U = (p) => [p[0] / 6, p[1] / 6];
      for (const [i, j, k] of THREE.ShapeUtils.triangulateShape(v2(B.r[0]), B.r.slice(1).map(v2)))
        bufs.plain.tri([all[i][0], B.t, all[i][1]], [all[j][0], B.t, all[j][1]], [all[k][0], B.t, all[k][1]], U(all[i]), U(all[j]), U(all[k]), rc);
    }
    // a brick chimney on houses with pitched roofs
    if ((gable || B.s === "h") && B.win && hl * hs < 160 && rh > 1) {
      const rnd = Math.abs(Math.sin(cx * 12.9898 + cz * 78.233)) % 1, a = hl * 0.35 * (rnd > 0.5 ? 1 : -1), b = hs * 0.25;
      const y0 = B.e + rh * 0.6, y1 = B.t + 0.8, w = 0.28;
      const P = (da, db, y) => [cx + ux * (a + da) + nx * (b + db), y, cz + uz * (a + da) + nz * (b + db)];
      const ring = [[-w, -w], [w, -w], [w, w], [-w, w]];
      for (let i = 0; i < 4; i++) { const [a0, b0] = ring[i], [a1, b1] = ring[(i + 1) % 4]; bufs.plain.quad(P(a0, b0, y0), P(a1, b1, y0), P(a1, b1, y1), P(a0, b0, y1), [0, 0], [0.1, 0], [0.1, 0.2], [0, 0.2], brick, brick, brick, brick); }
      bufs.plain.quad(P(-w, -w, y1), P(w, -w, y1), P(w, w, y1), P(-w, w, y1), [0, 0], [0.1, 0], [0.1, 0.1], [0, 0.1], brick, brick, brick, brick);
      if (rnd < 0.55) chimneys.push(P(0, 0, y1 + 0.1)); // about half the stoves are lit
    }
  }
  const geo = new THREE.BufferGeometry(), list = order.map((k) => bufs[k]);
  const cat = (key, n) => { const out = new Float32Array(list.reduce((s, b) => s + b[key].length, 0)); let o = 0; for (const b of list) { out.set(b[key], o); o += b[key].length; } return new THREE.BufferAttribute(out, n); };
  geo.setAttribute("position", cat("p", 3)); geo.setAttribute("normal", cat("n", 3)); geo.setAttribute("color", cat("c", 3)); geo.setAttribute("uv", cat("u", 2));
  const X = cat("x", 10).array, fw = new Float32Array(X.length * 0.4), fs = new Float32Array(X.length * 0.4), fd = new Float32Array(X.length * 0.2);
  for (let i = 0, n = X.length / 10; i < n; i++) { fw.set(X.subarray(i * 10, i * 10 + 4), i * 4); fs.set(X.subarray(i * 10 + 4, i * 10 + 8), i * 4); fd.set(X.subarray(i * 10 + 8, i * 10 + 10), i * 2); }
  geo.setAttribute("fw", new THREE.BufferAttribute(fw, 4)); geo.setAttribute("fs", new THREE.BufferAttribute(fs, 4)); geo.setAttribute("fd", new THREE.BufferAttribute(fd, 2));
  let start = 0;
  list.forEach((b, i) => { geo.addGroup(start, b.p.length / 3, i); start += b.p.length / 3; });
  const mat = (map) => new THREE.MeshLambertMaterial({ map, vertexColors: true, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geo, [glossy(facadeMaterial(ftex.plaster)), mat(ftex.plaster), snowy(mat(ftex.plaster)), snowy(mat(ftex.tiles)), litWindows(mat(ftex.shop))]);
  mesh.castShadow = mesh.receiveShadow = true;
  return { mesh, segs, chimneys };
}

// 1 m/px material map over the town: R = paved/built, G = town (pavers instead of soil), B = water
function splatCanvas(city) {
  const [W, N, E, S] = city.bounds, c = document.createElement("canvas");
  c.width = Math.round(E - W); c.height = Math.round(S - N);
  const g = c.getContext("2d");
  g.fillStyle = "#000"; g.fillRect(0, 0, c.width, c.height);
  g.globalCompositeOperation = "lighter"; g.lineCap = g.lineJoin = "round";
  const path = (pts, close) => { g.beginPath(); pts.forEach(([x, z], i) => g[i ? "lineTo" : "moveTo"](x - W, z - N)); if (close) g.closePath(); };
  g.fillStyle = g.strokeStyle = "rgb(0,255,0)"; g.lineWidth = 36;
  for (const B of city.buildings) { path(B.r[0], true); g.fill(); g.stroke(); }
  for (const rd of city.roads) {
    g.strokeStyle = rd.k === "stream" ? "rgb(0,0,255)" : "rgb(255,0,0)"; g.lineWidth = rd.w + (rd.k === "stream" ? 1 : 0.6);
    path(rd.p, false); g.stroke();
  }
  for (const A of city.areas) { g.fillStyle = A.s === "water" ? "rgb(0,0,255)" : "rgb(255,0,0)"; path(A.r, true); g.fill(); }
  g.fillStyle = "rgb(255,0,0)";
  for (const B of city.buildings) { path(B.r[0], true); g.fill(); }
  const out = document.createElement("canvas"); out.width = c.width; out.height = c.height;
  const o = out.getContext("2d"); o.filter = "blur(1.2px)"; o.drawImage(c, 0, 0);
  return out;
}

function terrainMesh(city, T, ortho, splat, renderer) {
  const [W, N, E, S] = city.bounds, n = T.w * T.h;
  const pos = new Float32Array(n * 3), uv = new Float32Array(n * 2), idx = new Uint32Array((T.w - 1) * (T.h - 1) * 6);
  for (let j = 0, k = 0; j < T.h; j++) for (let i = 0; i < T.w; i++, k++) {
    const x = T.x0 + i * T.dx, z = T.z0 + j * T.dz;
    pos[k * 3] = x; pos[k * 3 + 1] = T.data[k]; pos[k * 3 + 2] = z;
    uv[k * 2] = (x - W) / (E - W); uv[k * 2 + 1] = (S - z) / (S - N);
  }
  for (let j = 0, o = 0; j < T.h - 1; j++) for (let i = 0; i < T.w - 1; i++) {
    const a = j * T.w + i, b = a + 1, c = a + T.w, d = c + 1; // same split as terrainAt
    idx.set([a, c, b, b, c, d], o); o += 6;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3)); geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  geo.setIndex(new THREE.BufferAttribute(idx, 1)); geo.computeVertexNormals();
  let img = ortho;
  const max = renderer.capabilities.maxTextureSize;
  if (ortho.width > max) { // shortcut: weak GPUs get a downscaled photo
    const c = document.createElement("canvas"), s = max / ortho.width;
    c.width = max; c.height = Math.floor(ortho.height * s); c.getContext("2d").drawImage(ortho, 0, 0, c.width, c.height); img = c;
  }
  const tex = new THREE.Texture(img);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = renderer.capabilities.getMaxAnisotropy(); tex.needsUpdate = true;
  const splatTex = new THREE.CanvasTexture(splat);
  splatTex.colorSpace = THREE.NoColorSpace;
  const detail = groundDetail();
  // Up close the photo (0,5-0,8 m/px) is replaced by tiled grass / soil / pavers / asphalt patterns,
  // chosen by the photo's greenness and the material map, and coloured by the blurred photo.
  const mat = new THREE.MeshLambertMaterial({ map: tex });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.splatMap = { value: splatTex }; sh.uniforms.detailMap = { value: detail }; sh.uniforms.uWet = uniforms.uWet; sh.uniforms.uSnow = uniforms.uSnow;
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vWp;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvWp = position;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nuniform sampler2D splatMap; uniform sampler2D detailMap; uniform float uWet; uniform float uSnow; varying vec3 vWp;").replace("#include <map_fragment>", `#include <map_fragment>
      vec3 photo = diffuseColor.rgb;
      vec3 tint = texture2D(map, vMapUv, 2.5).rgb;
      vec4 sp = texture2D(splatMap, vMapUv);
      vec3 sr = sqrt(tint);
      float exg = (2.0 * sr.g - sr.r - sr.b) / (sr.r + sr.g + sr.b + 0.001);
      float veg = smoothstep(0.02, 0.10, exg) * (1.0 - sp.r) * (1.0 - sp.b);
      vec4 dd = texture2D(detailMap, vWp.xz * 0.45) * 0.62 + texture2D(detailMap, vWp.xz * 0.093 + 0.37) * 0.38;
      float pat = mix(mix(mix(dd.g, dd.b, sp.g), dd.a, sp.r), dd.r, veg);
      // even out the photo's own shadows and stains (the scene casts real shadows): pull brightness toward each material's norm
      float lt = dot(tint, vec3(0.2126, 0.7152, 0.0722));
      float target = mix(mix(mix(0.2, 0.28, sp.g), 0.09, sp.r), 0.1, veg);
      vec3 ref = mix(mix(mix(vec3(0.21, 0.18, 0.13), vec3(0.29, 0.28, 0.26), sp.g), vec3(0.09, 0.09, 0.095), sp.r), vec3(0.075, 0.115, 0.04), veg);
      float baked = 1.0 - smoothstep(0.015, 0.11, lt); // deep photo shadows turn blue when brightened, so fade them to the material's colour
      tint = mix(mix(tint, tint * clamp(target / max(lt, 0.004), 0.5, 4.0), 0.85), ref, baked * 0.7);
      tint = mix(tint, vec3(dot(tint, vec3(0.2126, 0.7152, 0.0722))), 0.55 * (1.0 - veg)); // paving is grey; roof colours bleed past footprints in the photo
      float nearF = 1.0 - smoothstep(35.0, 260.0, length(vWp - cameraPosition));
      diffuseColor.rgb = mix(photo, tint * (0.35 + 1.3 * pat), nearF * 0.92);
      diffuseColor.rgb *= 1.0 - uWet * (0.28 * sp.r + 0.14 * (1.0 - veg)); // rain darkens paving more than grass
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.9, 0.92, 0.95) * (0.9 + 0.2 * pat), uSnow * (1.0 - sp.b) * (1.0 - 0.4 * sp.r)); // snow cover, slushy on paving`);
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  // skirt: walls down from the map edge plus a far ground plane, so the world doesn't end in a cliff
  const low = city.hmin - 5, sp = [], ring = [];
  for (let i = 0; i < T.w; i++) ring.push([i, 0]);
  for (let j = 1; j < T.h; j++) ring.push([T.w - 1, j]);
  for (let i = T.w - 2; i >= 0; i--) ring.push([i, T.h - 1]);
  for (let j = T.h - 2; j > 0; j--) ring.push([0, j]);
  for (let q = 0; q < ring.length; q++) {
    const [i0, j0] = ring[q], [i1, j1] = ring[(q + 1) % ring.length];
    const a = [T.x0 + i0 * T.dx, T.data[j0 * T.w + i0], T.z0 + j0 * T.dz], b = [T.x0 + i1 * T.dx, T.data[j1 * T.w + i1], T.z0 + j1 * T.dz];
    sp.push(...a, a[0], low, a[2], ...b, ...b, a[0], low, a[2], b[0], low, b[2]);
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute("position", new THREE.BufferAttribute(Float32Array.from(sp), 3)); sg.computeVertexNormals();
  const ground = new THREE.MeshLambertMaterial({ color: 0x55613f, side: THREE.DoubleSide });
  const far = new THREE.Mesh(new THREE.PlaneGeometry(30000, 30000).rotateX(-Math.PI / 2), ground);
  far.position.y = low;
  return [mesh, new THREE.Mesh(sg, ground), far];
}

function labels(city) {
  const keep = new Set(["castle", "place_of_worship", "museum", "townhall", "monastery", "church", "chapel", "manor", "ruins", "attraction", "viewpoint"]);
  const seen = new Set(), out = [];
  for (const poi of city.pois) {
    if (!keep.has(poi.k) || seen.has(poi.n)) continue;
    seen.add(poi.n);
    const c = document.createElement("canvas"), g = c.getContext("2d"), font = "600 44px 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif";
    g.font = font; const w = Math.ceil(g.measureText(poi.n).width) + 40;
    c.width = w; c.height = 72; g.font = font;
    g.fillStyle = "rgba(20,24,22,0.72)"; g.beginPath(); g.roundRect(0, 0, w, 72, 10); g.fill();
    g.fillStyle = "#f3ead2"; g.textBaseline = "middle"; g.fillText(poi.n, 20, 38);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true, fog: false }));
    sp.scale.set((w / 72) * 2.6, 2.6, 1);
    sp.position.set(poi.p[0], poi.p[2] + 16, poi.p[1]);
    sp.renderOrder = 10;
    out.push(sp);
  }
  return out;
}

export const QUALITY = ["low", "medium", "high"];

export function buildWorld(city, ortho, renderer) {
  const scene = new THREE.Scene();
  const cm = decode(city.terrain.cm, Uint16Array), T = { ...city.terrain, data: Float32Array.from(cm, (v) => city.hmin + v / 100) };
  const groundAt = (x, z) => terrainAt(T, x, z);
  const env = createEnv(scene), sun = env.sun;
  const splat = splatCanvas(city);
  scene.add(...terrainMesh(city, T, ortho, splat, renderer));
  const ftex = facadeTextures(renderer), rtex = roadTextures(renderer), leaves = leafTexture(renderer, [11, 0, 1, 2].includes(new Date().getMonth()) ? "bare" : false), autumn = leafTexture(renderer, true); // broadleaf trees are bare in winter
  const { mesh, segs, chimneys } = buildingsMesh(city, ftex), smoke = buildSmoke(chimneys);
  scene.add(smoke.mesh);
  const roads = buildRoads(city, groundAt, rtex), lamps = buildLamps(city, groundAt);
  const trees = buildTrees(city, leaves, autumn), bushes = buildBushes(city, leaves), grass = buildGrass(city, ortho, splat, groundAt);
  const cars = buildCars(city, roads.graph, groundAt);
  const props = buildProps(city, groundAt);
  scene.add(...props.meshes);
  const signs = labels(city), people = buildPeople(roads.walk, city.spawn, groundAt, props.seats), fauna = buildFauna(city.spawn, groundAt), boards = buildSigns(city), doors = buildDoors(city);
  scene.add(...people.meshes, ...fauna.meshes, ...boards.meshes, ...doors.meshes);
  scene.add(mesh, ...roads.meshes, ...lamps.meshes, ...trees.meshes, ...bushes.meshes, grass.mesh, ...cars.meshes, ...signs);


  let quality = "medium";
  const setQuality = (q) => {
    quality = q;
    renderer.setPixelRatio(Math.min(devicePixelRatio, q === "high" ? 2 : q === "medium" ? 1.25 : 1));
    sun.castShadow = q !== "low";
    const size = q === "high" ? 4096 : 2048;
    if (sun.shadow.mapSize.x !== size) { sun.shadow.map?.dispose(); sun.shadow.map = null; sun.shadow.mapSize.set(size, size); }
    grass.mesh.visible = q !== "low";
  };
  setQuality(quality);

  const segAll = Float32Array.from([...segs, ...cars.segs, ...props.segs]);
  cars.parked.bind(segAll, segs.length);
  const update = (dt, cam, player, t) => {
    env.update(dt, cam, t);
    const snap = 280 / sun.shadow.mapSize.x; // move the shadow box in whole texels to stop shimmering
    sun.target.position.set(Math.round(cam.x / snap) * snap, cam.y, Math.round(cam.z / snap) * snap);
    sun.position.copy(sun.target.position).addScaledVector(env.st.lightDir, 450);
    const wet = uniforms.uWet.value, night = uniforms.uNight.value;
    for (const m of roads.wetMaterials) { m.color.setScalar(1 - 0.35 * wet); m.roughness = 0.9 - 0.72 * wet; } // wet: darker, and smooth enough to mirror the sky
    lamps.update(night);
    const h = env.st.hour, stoves = 0.35 + 0.45 * Math.max(Math.exp(-(((h - 7.5) / 2) ** 2)), Math.exp(-(((h - 19) / 2.5) ** 2))); // mornings and evenings
    smoke.update(dt, cam, uniforms.uWind.value, stoves, 1 - night, innerHeight * renderer.getPixelRatio() * 0.71);
    trees.update(cam); bushes.update(cam);
    if (quality !== "low") { grass.mesh.visible = cam.y - groundAt(cam.x, cam.z) < 40 && uniforms.uSnow.value < 0.5; if (grass.mesh.visible) grass.update(cam); }
    cars.update(dt, player, night); people.update(dt, player, { night, rain: Math.min(1, env.st.rain + env.st.snow * 0.4) }); fauna.update(dt, player, t); boards.update(night); props.update(t);
    for (const s of signs) s.visible = s.position.distanceToSquared(cam) < 380 * 380;
  };
  return {
    scene, groundAt, segs: segAll, update, T, setQuality, quality: () => quality, env, cars, people, chimneys, smoke,
    counts: { trees: trees.count, bushes: bushes.count, cars: cars.count, traffic: cars.traffic, people: people.count, dogs: people.dogs, lamps: city.lamps ? decode(city.lamps, Int16Array).length / 3 : 0 },
  };
}
