// Front doors at every registered address (RÚIAN), each with its red house-number plate, as two merged meshes.
import * as THREE from "three";

const TINTS = [0x6b4a32, 0x4a3222, 0xe8e6e0, 0x3c3f42, 0x2f4a38, 0x7a3328, 0x8a6038, 0xd9d4c7];

function doorTexture() { // greyscale leaf (tinted per door), dark frame, glazed top, handle
  const c = document.createElement("canvas"); c.width = 128; c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#3a3633"; g.fillRect(0, 0, 128, 256);
  g.fillStyle = "#e6e6e6"; g.fillRect(10, 10, 108, 246);
  g.fillStyle = "#1c2329"; g.fillRect(24, 24, 80, 70);
  g.fillStyle = "rgba(140,170,190,0.35)"; g.fillRect(28, 28, 36, 30);
  g.strokeStyle = "rgba(0,0,0,0.28)"; g.lineWidth = 4; g.strokeRect(24, 112, 80, 56); g.strokeRect(24, 180, 80, 62);
  g.fillStyle = "rgba(255,255,255,0.25)"; g.fillRect(26, 114, 76, 3); g.fillRect(26, 182, 76, 3);
  g.fillStyle = "#c9c4b8"; g.fillRect(94, 150, 14, 5); g.fillRect(99, 150, 4, 14);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}

export function buildDoors(city) {
  const D = city.doors || [];
  if (!D.length) return { meshes: [] };
  // plate atlas: 32 columns of 64x40 px
  const cols = 32, rows = Math.ceil(D.length / cols), atlas = document.createElement("canvas");
  atlas.width = cols * 64; atlas.height = rows * 40;
  const g = atlas.getContext("2d");
  g.textAlign = "center"; g.textBaseline = "middle";
  D.forEach((d, i) => {
    const x = (i % cols) * 64, y = Math.floor(i / cols) * 40;
    g.fillStyle = "#b8232b"; g.fillRect(x + 1, y + 1, 62, 38);
    g.strokeStyle = "#f4f1ea"; g.lineWidth = 2; g.strokeRect(x + 4, y + 4, 56, 32);
    g.fillStyle = "#f4f1ea"; g.font = `700 ${String(d[3]).length > 4 ? 15 : 21}px 'IBM Plex Sans Condensed', Arial, sans-serif`;
    g.fillText(String(d[3]), x + 32, y + 21, 52);
  });
  const ptex = new THREE.CanvasTexture(atlas); ptex.colorSpace = THREE.SRGBColorSpace; ptex.anisotropy = 4;

  const dp = [], du = [], dc = [], pp = [], pu = [], col = new THREE.Color();
  const quad = (P, U, x, z, yaw, along, y0, w, h, uv) => {
    const tx = Math.cos(yaw), tz = -Math.sin(yaw), nx = Math.sin(yaw), nz = Math.cos(yaw); // along the wall / out of it
    const cx = x + tx * along + nx * 0.01, cz = z + tz * along + nz * 0.01, hw = w / 2;
    const a = [cx - tx * hw, y0, cz - tz * hw], b = [cx + tx * hw, y0, cz + tz * hw], c = [cx + tx * hw, y0 + h, cz + tz * hw], d = [cx - tx * hw, y0 + h, cz - tz * hw];
    P.push(...a, ...b, ...c, ...a, ...c, ...d);
    const [u0, v0, u1, v1] = uv;
    U.push(u0, v0, u1, v0, u1, v1, u0, v0, u1, v1, u0, v1);
  };
  D.forEach(([x, z, yaw, , y], i) => {
    quad(dp, du, x, z, yaw, 0, y, 1.1, 2.2, [0, 0, 1, 1]);
    col.setHex(TINTS[i % TINTS.length]);
    for (let k = 0; k < 6; k++) dc.push(col.r, col.g, col.b);
    const cx = (i % cols) / cols, cy = 1 - Math.floor(i / cols) / rows, du_ = 1 / cols, dv = 1 / rows;
    quad(pp, pu, x, z, yaw, 0.95, y + 1.75, 0.3, 0.19, [cx, cy - dv, cx + du_, cy]);
  });
  const mk = (P, U, C) => { const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.Float32BufferAttribute(P, 3)); geo.setAttribute("uv", new THREE.Float32BufferAttribute(U, 2)); if (C) geo.setAttribute("color", new THREE.Float32BufferAttribute(C, 3)); geo.computeVertexNormals(); return geo; };
  const doors = new THREE.Mesh(mk(dp, du, dc), new THREE.MeshLambertMaterial({ map: doorTexture(), vertexColors: true, polygonOffset: true, polygonOffsetFactor: -1 }));
  const plates = new THREE.Mesh(mk(pp, pu), new THREE.MeshLambertMaterial({ map: ptex, polygonOffset: true, polygonOffsetFactor: -2 }));
  doors.receiveShadow = plates.receiveShadow = true;
  return { meshes: [doors, plates] };
}
