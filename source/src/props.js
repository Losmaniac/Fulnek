// Square furniture from OSM: the baroque Holy Trinity column with its saints, the fountain, and benches.
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { waterMaterial } from "./roads.js";

const stone = new THREE.MeshLambertMaterial({ color: 0xcfc6b2 }), gold = new THREE.MeshLambertMaterial({ color: 0xc9a43a, emissive: 0x2a1e05 });

function figure(h) { // a draped stone figure: robe, shoulders, head
  return mergeGeometries([new THREE.CylinderGeometry(0.16 * h, 0.27 * h, 0.95 * h, 8).translate(0, 0.475 * h, 0), new THREE.SphereGeometry(0.19 * h, 8, 6).scale(1, 0.7, 1).translate(0, 0.98 * h, 0), new THREE.SphereGeometry(0.12 * h, 8, 6).translate(0, 1.18 * h, 0)].map((g) => g.toNonIndexed()));
}

export function buildProps(city, groundAt) {
  const meshes = [], segs = [], seats = [];
  const add = (geo, mat, x, y, z, ry = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = m.receiveShadow = true; meshes.push(m); return m; };
  const M = city.monument;
  if (M) {
    const g = M.g - 0.1, parts = [];
    [[3.2, 0.175], [2.7, 0.525], [2.2, 0.875]].forEach(([r, y]) => parts.push(new THREE.CylinderGeometry(r, r, 0.35, 8).translate(0, y, 0)));
    parts.push(new THREE.BoxGeometry(2.4, 3.2, 2.4).translate(0, 2.65, 0), new THREE.BoxGeometry(2.8, 0.3, 2.8).translate(0, 4.4, 0));
    parts.push(new THREE.CylinderGeometry(0.42, 0.5, 8, 12).translate(0, 8.55, 0), new THREE.BoxGeometry(1.2, 0.5, 1.2).translate(0, 12.8, 0));
    parts.push(new THREE.SphereGeometry(1, 10, 8).scale(1.1, 0.7, 1.1).translate(0, 13.6, 0), figure(1.6).translate(0, 13.9, 0));
    add(mergeGeometries(parts.map((p) => (p.index ? p.toNonIndexed() : p))), stone, M.x, g, M.z, Math.PI / 8);
    add(new THREE.TorusGeometry(0.42, 0.05, 6, 16), gold, M.x, g + 15.95, M.z); // the gilded glory on top
    // the saints stand on the pedestal ledge, each on the side OSM puts them
    for (const [sx, sz] of M.statues) {
      let dx = sx - M.x, dz = sz - M.z; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
      add(mergeGeometries([new THREE.BoxGeometry(0.5, 0.35, 0.5).translate(0, 0.175, 0).toNonIndexed(), figure(1.05).translate(0, 0.35, 0)]), stone, M.x + dx * 1.55, g + 4.55, M.z + dz * 1.55, Math.atan2(dx, dz));
    }
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2 + Math.PI / 8, b = ((i + 1) / 8) * Math.PI * 2 + Math.PI / 8; segs.push(M.x + Math.cos(a) * 3.2, M.z + Math.sin(a) * 3.2, M.x + Math.cos(b) * 3.2, M.z + Math.sin(b) * 3.2, g + 16); }
  }

  const water = waterMaterial();
  for (const r of city.fountains) { // stone rim 55 cm high, water inside, a jet in the middle
    const c = r.reduce((s, p) => [s[0] + p[0] / r.length, s[1] + p[1] / r.length], [0, 0]), g = Math.min(...r.map(([x, z]) => groundAt(x, z)));
    const inner = r.map(([x, z]) => { const dx = x - c[0], dz = z - c[1], l = Math.hypot(dx, dz) || 1, k = Math.max(0.2, (l - 0.35) / l); return [c[0] + dx * k, c[1] + dz * k]; });
    const pos = [], top = g + 0.55, low = g - 0.3;
    for (let i = 0; i < r.length; i++) {
      const a = r[i], b = r[(i + 1) % r.length], ia = inner[i], ib = inner[(i + 1) % r.length];
      pos.push(a[0], low, a[1], b[0], low, b[1], b[0], top, b[1], a[0], low, a[1], b[0], top, b[1], a[0], top, a[1]); // outer wall
      pos.push(a[0], top, a[1], b[0], top, b[1], ib[0], top, ib[1], a[0], top, a[1], ib[0], top, ib[1], ia[0], top, ia[1]); // rim top
      pos.push(ia[0], top, ia[1], ib[0], top, ib[1], ib[0], low, ib[1], ia[0], top, ia[1], ib[0], low, ib[1], ia[0], low, ia[1]); // inner wall
      segs.push(a[0], a[1], b[0], b[1], top);
    }
    const rim = new THREE.BufferGeometry(); rim.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); rim.computeVertexNormals();
    const mr = add(rim, stone.clone(), 0, 0, 0); mr.material.side = THREE.DoubleSide;
    const surf = new THREE.BufferGeometry();
    surf.setAttribute("position", new THREE.Float32BufferAttribute(inner.flatMap(([x, z]) => [x, top - 0.12, z]), 3));
    surf.setIndex(THREE.ShapeUtils.triangulateShape(inner.map(([x, z]) => new THREE.Vector2(x, z)), []).flat()); surf.computeVertexNormals();
    meshes.push(new THREE.Mesh(surf, water));
    const jet = add(new THREE.CylinderGeometry(0.05, 0.35, 1.8, 10, 1, true), new THREE.MeshLambertMaterial({ color: 0xe6f0f4, transparent: true, opacity: 0.45, depthWrite: false, side: THREE.DoubleSide }), c[0], top + 0.78, c[1]);
    jet.castShadow = false; jet.userData.jet = true;
  }

  // benches: the ones OSM knows, plus a ring around the column facing it
  const bench = mergeGeometries([new THREE.BoxGeometry(1.8, 0.06, 0.45).translate(0, 0.45, 0), new THREE.BoxGeometry(1.8, 0.42, 0.05).translate(0, 0.75, -0.21), new THREE.BoxGeometry(0.06, 0.45, 0.42).translate(-0.8, 0.22, 0), new THREE.BoxGeometry(0.06, 0.45, 0.42).translate(0.8, 0.22, 0)].map((g) => g.toNonIndexed()));
  const wood = new THREE.MeshLambertMaterial({ color: 0x6b4b32 });
  const spots = city.benches.map(([x, z], i) => [x, z, i * 2.1]);
  if (M) for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2 + 0.3; spots.push([M.x + Math.cos(a) * 7.5, M.z + Math.sin(a) * 7.5, Math.atan2(-Math.cos(a), -Math.sin(a))]); }
  for (const [x, z, yaw] of spots) {
    add(bench, wood, x, groundAt(x, z), z, yaw);
    seats.push([x, z, yaw]); // local +z is the side you sit facing
  }
  const update = (t) => { for (const m of meshes) if (m.userData.jet) { m.scale.set(1 + Math.sin(t * 9) * 0.05, 1 + Math.sin(t * 13) * 0.06, 1 + Math.cos(t * 9) * 0.05); } };
  return { meshes, segs, seats, update };
}
