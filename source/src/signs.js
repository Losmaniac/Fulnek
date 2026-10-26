// Shop and office signs on the facades (text drawn on canvases), softly lit at night.
import * as THREE from "three";

const BOARD = { "café": "#5b3b2b", restaurant: "#7a2a22", pub: "#4a2a1c", pharmacy: "#1f6b43", bank: "#1d3f73", hotel: "#26324f", "post office": "#d2a823", police: "#1f3f7a", "fire station": "#9b1d1d", "town hall": "#3b3b3b", museum: "#4b2d55", florist: "#2f6a3a", grocery: "#3d6b2f", supermarket: "#7b1f24", optician: "#2a4d6e", newsagent: "#5a4a2a", chemist: "#6b3f7a", "pet shop": "#7a5a1f", clothes: "#444b6e", toys: "#b4502b", household: "#556b2f", bikes: "#2b5d7a", hardware: "#5b4636", electrical: "#2f4f6f", "fast food": "#9b3a1a", insurance: "#1d4f73", massage: "#4f7a6a", service: "#4a4f55", company: "#3a4048" };

export function buildSigns(city) {
  const meshes = [], mats = [];
  for (const p of city.places) {
    const c = document.createElement("canvas"), g = c.getContext("2d"), font = "600 76px 'IBM Plex Sans Condensed', 'Arial Narrow', Arial, sans-serif";
    g.font = font;
    const w = Math.ceil(g.measureText(p.n).width) + 90;
    c.width = Math.min(2048, w); c.height = 128;
    const bg = BOARD[p.k] || "#2f3634", dark = p.k === "post office";
    g.fillStyle = bg; g.fillRect(0, 0, c.width, c.height);
    g.strokeStyle = "rgba(255,255,255,0.35)"; g.lineWidth = 6; g.strokeRect(8, 8, c.width - 16, c.height - 16);
    g.font = font; g.fillStyle = dark ? "#1f2a44" : "#f6efdc"; g.textBaseline = "middle"; g.textAlign = "center";
    g.fillText(p.n, c.width / 2, 68, c.width - 60);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const mat = new THREE.MeshLambertMaterial({ map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0, polygonOffset: true, polygonOffsetFactor: -2 });
    const h = 0.62, m = new THREE.Mesh(new THREE.PlaneGeometry((c.width / c.height) * h, h), mat);
    m.position.set(p.x, p.y, p.z); m.rotation.y = p.yaw;
    meshes.push(m); mats.push(mat);
  }
  return { meshes, update: (night) => { for (const m of mats) m.emissiveIntensity = night * 0.55; } };
}
