// Procedural textures, drawn once on canvases at start-up (nothing to download).
import * as THREE from "three";

export const rng = (seed) => () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

function canvas(w, h = w) { const c = document.createElement("canvas"); c.width = w; c.height = h; return c; }
function noise(g, w, h, amt, r) { const d = g.getImageData(0, 0, w, h); for (let i = 0; i < d.data.length; i += 4) { const n = (r() - 0.5) * amt; d.data[i] += n; d.data[i + 1] += n; d.data[i + 2] += n; } g.putImageData(d, 0, 0); }
function tex(c, renderer, color = true) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}
const draw = (w, h, fn) => { const c = canvas(w, h), g = c.getContext("2d"); fn(g, w, h); return c; };

// ---- facades: one window bay x one floor, white plaster so vertex colours tint them
const windowAt = (g, x0, y0, x1, y1, mull) => {
  g.fillStyle = "#cfc8bb"; g.fillRect(x0 - 5, y1, x1 - x0 + 10, 5);
  g.fillStyle = "#f7f4ee"; g.fillRect(x0 - 3, y0 - 3, x1 - x0 + 6, y1 - y0 + 6);
  const glass = g.createLinearGradient(0, y0, 0, y1);
  glass.addColorStop(0, "#6f8293"); glass.addColorStop(0.45, "#36434f"); glass.addColorStop(1, "#262f37");
  g.fillStyle = glass; g.fillRect(x0, y0, x1 - x0, y1 - y0);
  g.fillStyle = "#f7f4ee";
  if (mull) { g.fillRect((x0 + x1) / 2 - 2, y0, 4, y1 - y0); g.fillRect(x0, y0 + (y1 - y0) * 0.34, x1 - x0, 3); }
};
const FACADES = {
  classic: (g, s, r) => { g.fillStyle = "#fff"; g.fillRect(0, 0, s, s); noise(g, s, s, 14, r); windowAt(g, s * 0.32, s * 0.22, s * 0.68, s * 0.74, true); },
  panel: (g, s, r) => { // 1970s-80s panel blocks: wide windows, panel seams
    g.fillStyle = "#fff"; g.fillRect(0, 0, s, s); noise(g, s, s, 10, r);
    g.fillStyle = "rgba(0,0,0,0.13)"; g.fillRect(0, s - 3, s, 3); g.fillRect(s - 2, 0, 2, s);
    windowAt(g, s * 0.14, s * 0.3, s * 0.86, s * 0.72, false);
    g.fillStyle = "#f7f4ee"; g.fillRect(s * 0.5 - 2, s * 0.3, 4, s * 0.42);
  },
  baroque: (g, s, r) => { // old-town houses: tall windows in a lighter surround, cornice line
    g.fillStyle = "#fff"; g.fillRect(0, 0, s, s); noise(g, s, s, 14, r);
    g.fillStyle = "rgba(0,0,0,0.10)"; g.fillRect(0, 6, s, 3);
    g.fillStyle = "rgba(255,255,255,0.9)"; g.fillRect(s * 0.3, s * 0.12, s * 0.4, s * 0.72);
    g.fillStyle = "rgba(0,0,0,0.08)"; g.fillRect(s * 0.28, s * 0.1, s * 0.44, 4);
    windowAt(g, s * 0.36, s * 0.17, s * 0.64, s * 0.8, true);
  },
};
export function facadeTextures(renderer) {
  const out = {};
  for (const [k, fn] of Object.entries(FACADES)) out[k] = tex(draw(128, 128, (g, s) => fn(g, s, rng(k.length * 97))), renderer);
  out.shop = tex(draw(128, 128, (g, s) => { // ground-floor shop window: dark frame, big pane with a reflection, v=1 at the top
    g.fillStyle = "#fff"; g.fillRect(0, 0, s, s); noise(g, s, s, 12, rng(9));
    const x0 = s * 0.07, x1 = s * 0.93, y0 = s * 0.14, y1 = s * 0.8;
    g.fillStyle = "#2b2f2c"; g.fillRect(x0 - 4, y0 - 4, x1 - x0 + 8, y1 - y0 + 8);
    const gl = g.createLinearGradient(x0, y0, x1, y1);
    gl.addColorStop(0, "#7f93a3"); gl.addColorStop(0.35, "#3c4a56"); gl.addColorStop(0.55, "#56697a"); gl.addColorStop(1, "#27313a");
    g.fillStyle = gl; g.fillRect(x0, y0, x1 - x0, y1 - y0);
    g.fillStyle = "#2b2f2c"; g.fillRect(s / 2 - 2, y0, 4, y1 - y0); g.fillRect(x0, y1 - 10, x1 - x0, 3);
  }), renderer);
  out.plaster = tex(draw(64, 64, (g, s) => { g.fillStyle = "#fff"; g.fillRect(0, 0, s, s); noise(g, s, s, 16, rng(3)); }), renderer);
  out.tiles = tex(draw(128, 128, (g, s) => { // rows along the ridge (u), v down the slope
    const r = rng(5);
    g.fillStyle = "#fff"; g.fillRect(0, 0, s, s); noise(g, s, s, 22, r);
    const rows = 4, cols = 8, rh = s / rows, cw = s / cols;
    for (let y = 0; y < rows; y++) {
      const grd = g.createLinearGradient(0, y * rh, 0, (y + 1) * rh);
      grd.addColorStop(0, "rgba(255,255,255,0.15)"); grd.addColorStop(0.85, "rgba(0,0,0,0.08)"); grd.addColorStop(1, "rgba(0,0,0,0.35)");
      g.fillStyle = grd; g.fillRect(0, y * rh, s, rh);
      g.fillStyle = "rgba(0,0,0,0.22)";
      for (let c = 0; c < cols; c++) g.fillRect(c * cw + (y % 2) * cw * 0.5, y * rh, 1.5, rh);
    }
  }), renderer);
  return out;
}

// ---- road surfaces (colour textures; ribbons don't use the photo)
const asphaltBase = (g, w, h, r) => {
  g.fillStyle = "#4b4e51"; g.fillRect(0, 0, w, h);
  for (let i = 0; i < (w * h) / 6; i++) { const v = 60 + r() * 70; g.fillStyle = `rgb(${v},${v},${v + 2})`; g.fillRect(r() * w, r() * h, 1 + r(), 1 + r()); }
  for (let i = 0; i < 6; i++) { g.fillStyle = `rgba(0,0,0,${0.04 + r() * 0.06})`; g.beginPath(); g.ellipse(r() * w, r() * h, 20 + r() * 60, 10 + r() * 40, r() * 3, 0, 7); g.fill(); }
};
export function roadTextures(renderer) {
  const t = {};
  t.asphalt = tex(draw(256, 256, (g, w, h) => asphaltBase(g, w, h, rng(11))), renderer);
  for (const m of [1, 2]) t["asphalt" + m] = tex(draw(256, 512, (g, w, h) => { // u: across the full width, v: one 9 m dash period
    asphaltBase(g, w, h, rng(12 + m));
    g.fillStyle = "rgba(236,236,228,0.92)";
    g.fillRect(w / 2 - 2.5, 0, 5, h / 3); // 3 m dash, 6 m gap
    if (m === 2) { g.fillRect(w * 0.035, 0, 4, h); g.fillRect(w * 0.965 - 4, 0, 4, h); }
  }), renderer);
  t.sett = tex(draw(256, 256, (g, w, h) => { // granite setts, ~10 cm
    const r = rng(21), n = 16, s = w / n;
    g.fillStyle = "#3f3c38"; g.fillRect(0, 0, w, h);
    for (let y = 0; y < n; y++) for (let x = -1; x < n; x++) {
      const v = 95 + r() * 55, ox = (y % 2) * s * 0.5 + (r() - 0.5) * 2, px = x * s + ox, py = y * s + (r() - 0.5) * 2;
      g.fillStyle = `rgb(${v + 6},${v},${v - 8})`; g.beginPath(); g.roundRect(px + 1.5, py + 1.5, s - 3, s - 3, 3); g.fill();
      g.fillStyle = "rgba(255,255,255,0.10)"; g.fillRect(px + 2.5, py + 2.5, s - 7, 2);
    }
    noise(g, w, h, 18, r);
  }), renderer);
  t.pavers = tex(draw(256, 256, (g, w, h) => { // concrete pavers, running bond
    const r = rng(31), pw = 32, ph = 16;
    g.fillStyle = "#7d7b76"; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h / ph; y++) for (let x = -1; x < w / pw + 1; x++) {
      const v = 150 + r() * 30, px = x * pw + (y % 2) * pw * 0.5;
      g.fillStyle = `rgb(${v},${v - 3},${v - 9})`; g.fillRect(px + 1, y * ph + 1, pw - 2, ph - 2);
    }
    noise(g, w, h, 16, r);
  }), renderer);
  t.gravel = tex(draw(256, 256, (g, w, h) => {
    const r = rng(41);
    g.fillStyle = "#8a8172"; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) { const v = 90 + r() * 100; g.fillStyle = `rgb(${v + 8},${v},${v - 12})`; g.beginPath(); g.arc(r() * w, r() * h, 0.8 + r() * 2.2, 0, 7); g.fill(); }
  }), renderer);
  t.rail = tex(draw(256, 128, (g, w, h) => { // across 3.4 m: ballast, two sleepers per tile, rails at standard gauge
    const r = rng(51);
    g.fillStyle = "#6f6a62"; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 1800; i++) { const v = 70 + r() * 90; g.fillStyle = `rgb(${v},${v - 4},${v - 10})`; g.fillRect(r() * w, r() * h, 2, 2); }
    g.fillStyle = "#8d8a84"; for (const y of [h * 0.25, h * 0.75]) g.fillRect(w * 0.16, y - 9, w * 0.68, 18);
    g.fillStyle = "#5b544c"; for (const x of [0.5 - 0.211, 0.5 + 0.211]) { g.fillRect(w * x - 3, 0, 6, h); g.fillStyle = "#b8b4ac"; g.fillRect(w * x - 1, 0, 2, h); g.fillStyle = "#5b544c"; }
  }), renderer);
  return t;
}

// ---- ground detail: four greyscale patterns (mean ~0.5) packed into RGBA, used as multipliers on the photo
export function groundDetail() {
  const S = 256, chans = [
    (g, r) => { g.fillStyle = "#808080"; g.fillRect(0, 0, S, S); g.lineCap = "round"; // grass blades
      for (let i = 0; i < 5200; i++) { const v = 50 + r() * 160, x = r() * S, y = r() * S, a = -Math.PI / 2 + (r() - 0.5) * 1.2, l = 3 + r() * 8; g.strokeStyle = `rgb(${v},${v},${v})`; g.lineWidth = 0.8 + r() * 0.8; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke(); } },
    (g, r) => { g.fillStyle = "#7a7a7a"; g.fillRect(0, 0, S, S); // soil: clods and pebbles
      for (let i = 0; i < 260; i++) { const v = 70 + r() * 110; g.fillStyle = `rgba(${v},${v},${v},0.5)`; g.beginPath(); g.arc(r() * S, r() * S, 3 + r() * 12, 0, 7); g.fill(); }
      for (let i = 0; i < 1500; i++) { const v = 60 + r() * 170; g.fillStyle = `rgb(${v},${v},${v})`; g.beginPath(); g.arc(r() * S, r() * S, 0.6 + r() * 1.8, 0, 7); g.fill(); } },
    (g, r) => { g.fillStyle = "#505050"; g.fillRect(0, 0, S, S); // pavers
      for (let y = 0; y < 16; y++) for (let x = -1; x < 9; x++) { const v = 115 + r() * 50; g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(x * 32 + (y % 2) * 16 + 1, y * 16 + 1, 30, 14); } },
    (g, r) => { g.fillStyle = "#808080"; g.fillRect(0, 0, S, S); // asphalt grain
      for (let i = 0; i < 9000; i++) { const v = 70 + r() * 120; g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(r() * S, r() * S, 1, 1); } },
  ];
  const data = new Uint8Array(S * S * 4);
  chans.forEach((fn, ch) => {
    const c = canvas(S), g = c.getContext("2d"), r = rng(101 + ch);
    fn(g, r); noise(g, S, S, 20, r);
    const px = g.getImageData(0, 0, S, S).data;
    for (let i = 0; i < S * S; i++) data[i * 4 + ch] = px[i * 4];
  });
  const t = new THREE.DataTexture(data, S, S, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter; t.generateMipmaps = true; t.anisotropy = 8;
  t.needsUpdate = true;
  return t;
}

// ---- foliage: a cluster of leaves with transparent gaps, for alpha-tested cards
export function leafTexture(renderer, autumn = false) {
  const c = autumn === "bare" ? draw(256, 256, (g, w) => { // winter: a tangle of grey-brown twigs
    const r = rng(79), br = (x, y, a, l, wd, d) => { const x2 = x + Math.cos(a) * l, y2 = y + Math.sin(a) * l; g.strokeStyle = `rgb(${70 + r() * 25},${60 + r() * 20},${52 + r() * 18})`; g.lineWidth = wd; g.beginPath(); g.moveTo(x, y); g.lineTo(x2, y2); g.stroke(); if (d > 0) for (let k = 0; k < 2 + (r() < 0.4); k++) br(x2, y2, a + (r() - 0.5) * 1.6, l * (0.6 + r() * 0.2), wd * 0.7, d - 1); };
    g.lineCap = "round";
    for (let i = 0; i < 7; i++) br(w / 2 + (r() - 0.5) * 30, w / 2 + (r() - 0.5) * 30, r() * Math.PI * 2, 34 + r() * 18, 3.2, 4);
  }) : draw(256, 256, (g, w) => {
    const r = rng(autumn ? 78 : 77);
    for (let i = 0; i < 420; i++) {
      const a = r() * Math.PI * 2, d = Math.sqrt(r()) * w * 0.46, x = w / 2 + Math.cos(a) * d, y = w / 2 + Math.sin(a) * d;
      // autumn mix: mostly yellow and orange, some rust and a few leaves still green
      const hue = autumn ? [18, 30, 38, 44, 52, 70][Math.floor(r() * 6)] + r() * 8 : 88 + r() * 26;
      g.fillStyle = `hsl(${hue},${autumn ? 62 + r() * 22 : 38 + r() * 20}%,${autumn ? 34 + r() * 22 : 24 + r() * 26}%)`;
      g.beginPath(); g.ellipse(x, y, 5 + r() * 5, 2.5 + r() * 2.5, r() * Math.PI, 0, 7); g.fill();
    }
  });
  const t = tex(c, renderer);
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}
