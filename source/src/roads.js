// Streets, paths, rails and streams as 3D ribbons draped on the terrain, water surfaces, street lamps,
// and the drivable street graph the traffic runs on.
import * as THREE from "three";
import { snowy, glossy } from "./env.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { ROAD } from "./city.js";
import { decode } from "./decode.js";

const TILE = { asphalt: 4, sett: 1.6, pavers: 1.2, gravel: 2, water: 5 }; // metres per texture repeat
// how much pedestrians like each kind of way
const WALK = { footway: 3, pedestrian: 3, steps: 1, path: 1.5, cycleway: 1, living_street: 2, residential: 1.2, unclassified: 1, service: 0.6, tertiary: 0.8, secondary: 0.5, track: 0.4 };
const SPEED = { primary: 13.9, trunk: 13.9, secondary: 13.9, tertiary: 12.5, residential: 8.3, unclassified: 8.3, living_street: 5.5, service: 5.5 };

export function waterMaterial() {
  return glossy(new THREE.MeshStandardMaterial({ color: 0x2b4644, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.92, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }));
}

export function buildRoads(city, groundAt, tex) {
  const groups = new Map(); // material key -> {pos, uv, idx}
  const grp = (k) => groups.get(k) || groups.set(k, { pos: [], uv: [], idx: [] }).get(k);
  const graphOf = () => { const list = [], at = new Map(); return { list, node: (x, z, y) => { const k = x.toFixed(1) + "," + z.toFixed(1); let i = at.get(k); if (i == null) { i = list.length; at.set(k, i); list.push({ x, y, z, out: [] }); } return i; } }; };
  const drive = graphOf(), walk = graphOf(), nodes = drive.list, node = drive.node;

  city.roads.forEach((rd, ri) => {
    const R0 = ROAD[rd.k];
    const pts = rd.p.filter((p, i) => !i || Math.hypot(p[0] - rd.p[i - 1][0], p[1] - rd.p[i - 1][1]) > 0.05);
    if (pts.length < 2) return;
    const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const L = cum[cum.length - 1], lift = rd.k === "stream" ? 0.12 : 0.04 + R0.r * 0.012 + (ri % 4) * 0.004;
    const y0 = groundAt(...pts[0]) + lift, y1 = groundAt(...pts[pts.length - 1]) + lift;
    const height = (x, z, s) => (rd.br ? y0 + ((y1 - y0) * s) / L : groundAt(x, z) + lift); // bridges span straight between their ends

    // resample to <= 3 m so the ribbon follows the 4 m terrain grid
    const S = [];
    for (let i = 0; i + 1 < pts.length; i++) {
      const n = Math.max(1, Math.ceil((cum[i + 1] - cum[i]) / 3));
      for (let k = 0; k < n; k++) { const u = k / n; S.push([pts[i][0] + (pts[i + 1][0] - pts[i][0]) * u, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * u, cum[i] + (cum[i + 1] - cum[i]) * u]); }
    }
    S.push([...pts[pts.length - 1], L]);
    const marked = rd.s === "asphalt" && R0.m, key = marked ? "asphalt" + R0.m : rd.s, G = grp(key), K = rd.s === "water" ? null : grp("kerb");
    const hw = rd.w / 2, base = G.pos.length / 3, kb = K ? K.pos.length / 3 : 0;
    S.forEach(([x, z, s], i) => {
      const a = S[Math.max(0, i - 1)], b = S[Math.min(S.length - 1, i + 1)];
      let dx = b[0] - a[0], dz = b[1] - a[1]; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
      const nx = -dz, nz = dx, y = height(x, z, s);
      for (const side of [-1, 1]) {
        const ex = x + nx * hw * side, ez = z + nz * hw * side, ey = rd.br ? y : Math.max(y, groundAt(ex, ez) + lift * 0.6);
        G.pos.push(ex, ey, ez);
        G.uv.push(marked || rd.s === "rail" ? (side + 1) / 2 : ((side + 1) / 2) * (rd.w / (TILE[rd.s] || 4)), s / (marked ? 9 : rd.s === "rail" ? 1.2 : TILE[rd.s] || 4));
        if (K) K.pos.push(ex, ey, ez, ex, rd.br ? ey - 0.9 : groundAt(ex, ez) - 0.15, ez); // kerb / bridge deck edge
      }
      if (i) {
        const q = base + (i - 1) * 2; G.idx.push(q, q + 1, q + 2, q + 1, q + 3, q + 2); // faces up
        if (K) for (const e of [0, 2]) { const k = kb + (i - 1) * 4 + e; K.idx.push(k, k + 4, k + 1, k + 1, k + 4, k + 5); }
      }
    });

    // traffic graph on the original vertices; lanes keep right
    if (R0.d && rd.k !== "stream" && rd.k !== "rail") {
      const ids = pts.map((p, i) => node(p[0], p[1], height(p[0], p[1], cum[i])));
      const v = SPEED[rd.k.replace("_link", "")] || 8.3, off = rd.ow ? 0 : Math.min(hw * 0.5, 1.8);
      for (let i = 0; i + 1 < ids.length; i++) {
        nodes[ids[i]].out.push({ to: ids[i + 1], d: R0.d, v, off });
        if (!rd.ow) nodes[ids[i + 1]].out.push({ to: ids[i], d: R0.d, v, off });
      }
    }
    if (WALK[rd.k]) { // footways down the middle, streets along their edge
      const ids = pts.map((p, i) => walk.node(p[0], p[1], height(p[0], p[1], cum[i])));
      const off = rd.w <= 2.6 ? 0 : hw - 0.55;
      for (let i = 0; i + 1 < ids.length; i++) {
        walk.list[ids[i]].out.push({ to: ids[i + 1], d: WALK[rd.k], off });
        walk.list[ids[i + 1]].out.push({ to: ids[i], d: WALK[rd.k], off });
      }
    }
  });

  const water = waterMaterial(), meshes = [], wetMaterials = [];
  const kerb = new THREE.MeshLambertMaterial({ color: 0x8e8b84, side: THREE.DoubleSide });
  for (const [k, G] of groups) {
    if (!G.idx.length) continue;
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(G.pos, 3));
    if (G.uv.length) g.setAttribute("uv", new THREE.Float32BufferAttribute(G.uv, 2));
    g.setIndex(G.idx); g.computeVertexNormals();
    const mat = k === "water" ? water : k === "kerb" ? kerb : glossy(snowy(new THREE.MeshStandardMaterial({ map: tex[k], roughness: 0.9, metalness: 0, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }), 0.6));
    if (mat !== water && mat !== kerb) wetMaterials.push(mat); // rain makes them darker and glossy; snow settles
    const m = new THREE.Mesh(g, mat);
    m.receiveShadow = true;
    meshes.push(m);
  }
  // ponds and reservoirs: flat surfaces just above the lowest bank
  for (const A of city.areas) {
    if (A.s !== "water") continue;
    const y = Math.min(...A.r.map(([x, z]) => groundAt(x, z))) + 0.1;
    const tris = THREE.ShapeUtils.triangulateShape(A.r.map(([x, z]) => new THREE.Vector2(x, z)), []);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(A.r.flatMap(([x, z]) => [x, y, z]), 3));
    g.setIndex(tris.flat()); g.computeVertexNormals();
    meshes.push(new THREE.Mesh(g, water));
  }
  return { meshes, graph: nodes, walk: walk.list, wetMaterials };
}

export function buildLamps(city, groundAt) {
  const L = decode(city.lamps, Int16Array), n = L.length / 3;
  const pole = new THREE.CylinderGeometry(0.06, 0.09, 6.6, 6).translate(0, 3.3, 0);
  const arm = new THREE.BoxGeometry(1.3, 0.08, 0.08).translate(0.62, 6.45, 0);
  const poles = new THREE.InstancedMesh(mergeGeometries([pole, arm]), new THREE.MeshLambertMaterial({ color: 0x39403d }), n);
  const headMat = new THREE.MeshBasicMaterial({ color: 0x55574f });
  const heads = new THREE.InstancedMesh(new THREE.BoxGeometry(0.55, 0.14, 0.26).translate(1.25, 6.38, 0), headMat, n);
  // warm pools of light on the ground under each lamp, faded in after dusk
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d"), grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, "rgba(255,255,255,1)"); grd.addColorStop(0.5, "rgba(255,255,255,0.35)"); grd.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  const poolMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), color: 0xffc77a, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
  const pools = new THREE.InstancedMesh(new THREE.PlaneGeometry(13, 13).rotateX(-Math.PI / 2), poolMat, n);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    const x = L[i * 3] / 10, z = L[i * 3 + 1] / 10, yaw = L[i * 3 + 2] / 1000;
    m.compose(p.set(x, groundAt(x, z) - 0.1, z), q.setFromAxisAngle(up, yaw), one);
    poles.setMatrixAt(i, m); heads.setMatrixAt(i, m);
    const hx = x + Math.cos(yaw) * 1.25, hz = z - Math.sin(yaw) * 1.25;
    pools.setMatrixAt(i, m.compose(p.set(hx, groundAt(hx, hz) + 0.2, hz), q.identity(), one));
  }
  poles.castShadow = poles.receiveShadow = true;
  for (const im of [poles, heads, pools]) im.computeBoundingSphere();
  pools.renderOrder = 2;
  const day = new THREE.Color(0x55574f), lit = new THREE.Color(0xfff1c8).multiplyScalar(2.5); // brighter than white: the lamp glows (bloom on high)
  const update = (night) => { headMat.color.copy(day).lerp(lit, night); poolMat.opacity = night * 0.85; pools.visible = night > 0.02; };
  return { meshes: [poles, heads, pools], update };
}
