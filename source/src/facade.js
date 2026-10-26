// Procedural facades: windows are drawn in the shader from per-building parameters, so every house differs —
// window size and rhythm, frames, mullions, arches, sills, cornices, panel joints, balconies, curtains, blinds,
// and which rooms are lit at night. Parameters come from the building register (floors, year, use, construction).
import * as THREE from "three";
import { uniforms } from "./env.js";

const pickR = (rnd, a) => a[Math.floor(rnd() * a.length) % a.length];
const range = (rnd, a, b) => a + (b - a) * rnd();
const RENOVATED = [0xe8d9b0, 0xd9e3c4, 0xf0e2d0, 0xcfdde2, 0xe6cf98, 0xf2efe6, 0xe7c3b8, 0xdfe0d6];

// decor bits: 1 window surround, 2 sill, 4 storey cornice, 8 panel joints, 16 balconies, 32 sparser windows
export function facadeParams(B, nearSquare, rnd) {
  const h = B.e - B.g, y = B.y || 0, u = B.u || 0, k = B.k || 0;
  // the register counts attic floors too; when the walls are too short for them, the extra floors are in the roof
  let f = B.f && h / B.f >= 2.5 && h / B.f <= 4.4 ? B.f : Math.max(1, Math.round(h / (B.f && h / B.f < 2.5 ? 2.9 : 3.1)));
  let style;
  if ([4, 41, 43].includes(k) || (u === 6 && f >= 4) || (!u && f >= 5)) style = "panel";
  else if (nearSquare && (!y || y < 1920) && f <= 4) style = "baroque";
  else if ([1, 12, 13, 16, 17].includes(u)) style = "industrial";
  else if ([5, 9, 10, 11, 14, 15, 20].includes(u)) style = "civic";
  else if ([2, 3, 7, 8].includes(u)) style = y >= 1990 ? "newhouse" : y >= 1945 ? "house70" : "oldhouse";
  else style = (y && y < 1945) || f >= 3 ? "classic" : "house70";
  const S = {
    panel: [3.6, 3.6, 0.5, 0.62, 0.46, 0.5, [2, 1, 2], [0, 0, 1], () => 8 | 2 | (rnd() < 0.7 ? 16 : 0)],
    baroque: [2.9, 3.4, 0.36, 0.44, 0.55, 0.6, [0, 0, 3, 5], [0, 5, 2, 1], () => 1 | 2 | 4],
    classic: [3.0, 3.6, 0.38, 0.48, 0.52, 0.58, [0, 4, 0, 5], [0, 1, 2, 0], () => (rnd() < 0.6 ? 1 : 0) | 2 | (rnd() < 0.6 ? 4 : 0)],
    oldhouse: [3.2, 4.2, 0.3, 0.38, 0.42, 0.48, [4, 0, 4], [2, 0, 1, 4], () => 32 | 2 | (rnd() < 0.4 ? 1 : 0)],
    house70: [3.4, 4.4, 0.42, 0.55, 0.45, 0.5, [1, 0, 2], [1, 0, 0], () => 2 | (rnd() < 0.5 ? 32 : 0)],
    newhouse: [3.6, 5.0, 0.4, 0.6, 0.45, 0.55, [1, 1, 5], [3, 0, 0, 3], () => 32 | (rnd() < 0.5 ? 2 : 0)],
    civic: [3.0, 4.0, 0.6, 0.75, 0.52, 0.58, [2, 1], [3, 0], () => 2 | (rnd() < 0.4 ? 4 : 0)],
    industrial: [4.5, 6.0, 0.75, 0.85, 0.3, 0.36, [2], [3, 0], () => 32],
  }[style];
  const p = { style, floors: f, storey: h / f, bay: range(rnd, S[0], S[1]), winW: range(rnd, S[2], S[3]), winH: range(rnd, S[4], S[5]), type: pickR(rnd, S[6]), frame: pickR(rnd, S[7]), decor: S[8](), seed: Math.floor(rnd() * 97) };
  if (style === "panel" && !B.wc) p.wall = pickR(rnd, RENOVATED);
  return p;
}

export function facadeMaterial(map) {
  const mat = new THREE.MeshStandardMaterial({ map, vertexColors: true, side: THREE.DoubleSide, roughness: 0.92, metalness: 0 }); // window glass turns smooth below
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, { uNight: uniforms.uNight, uLit: uniforms.uLit, uSky: uniforms.uSky });
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nattribute vec4 fw; attribute vec4 fs; attribute vec2 fd; varying vec4 vFw; varying vec4 vFs; varying vec2 vFd; varying vec2 vF;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvFw = fw; vFs = fs; vFd = fd; vF = uv;");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", `#include <common>
        uniform float uNight; uniform float uLit; uniform vec3 uSky; varying vec4 vFw; varying vec4 vFs; varying vec2 vFd; varying vec2 vF;
        float hsh(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        bool bit(float v, float b) { return mod(floor(v / b), 2.0) > 0.5; }
        vec3 frameCol(float i) { return i < 0.5 ? vec3(0.9, 0.9, 0.88) : i < 1.5 ? vec3(0.22, 0.14, 0.09) : i < 2.5 ? vec3(0.42, 0.26, 0.14) : i < 3.5 ? vec3(0.19, 0.2, 0.21) : i < 4.5 ? vec3(0.14, 0.24, 0.17) : vec3(0.84, 0.79, 0.66); }`)
      .replace("#include <color_fragment>", `#include <color_fragment>
        vec3 litC = vec3(0.0); float litA = 0.0, glassR = 0.0;
        vec2 aa = fwidth(vF); // derivatives outside the branch (undefined inside non-uniform flow)
        if (vFw.z > 0.5) {
          vec2 cell = floor(vF), f = fract(vF);
          vec4 S = floor(vFs + 0.5); vec2 dB = floor(vFd + 0.5); // integers again (interpolation adds tiny errors the hash would amplify)
          float seed = S.w, type = S.x, decor = S.z, floorsN = floor(vFw.w + 0.5), nb = floor(vFw.z + 0.5);
          float h1 = hsh(cell + seed), h2 = hsh(cell * 1.37 + seed + 5.1), h3 = hsh(cell.yx + seed * 0.7 + 9.3);
          bool attic = cell.y > floorsN - 0.5;
          bool show = cell.x >= 0.0 && cell.x < nb && cell.y >= 0.0 && cell.y < floorsN + 0.5;
          if (attic) show = show && abs(cell.x + 0.5 - nb * 0.5) < 0.6; // one window in the gable
          bool door = cell.y < 0.5 && (abs(cell.x - dB.x) < 0.5 || abs(cell.x - dB.y) < 0.5);
          show = show && !door && h3 > (bit(decor, 32.0) ? 0.22 : 0.04);
          bool balc = bit(decor, 16.0) && cell.y > 0.5 && !attic && mod(cell.x + seed, 3.0) < 1.0;
          float ww = vFw.x * 0.5, y0 = attic ? 0.12 : 0.32, y1 = attic ? 0.12 + vFw.y * 0.7 : 0.32 + vFw.y;
          if (balc) { y0 = 0.04; ww = max(ww, 0.3); }
          vec2 q = vec2(abs(f.x - 0.5) - ww, max(y0 - f.y, f.y - y1));
          float sp = y1 - ww * 1.1;
          if (type > 2.5 && type < 3.5 && !attic && f.y > sp) q.y = (length(vec2(f.x - 0.5, (f.y - sp) / 1.1)) - ww) * 1.1; // arched head
          float d = max(q.x, q.y), e = max(aa.x, aa.y) * 0.7;
          float inW = show ? 1.0 - smoothstep(-e, e, d) : 0.0;
          float band = show && bit(decor, 1.0) ? (1.0 - smoothstep(-e, e, d - 0.04)) - inW : 0.0;
          float sill = show && bit(decor, 2.0) && !balc ? step(abs(f.x - 0.5), ww + 0.035) * step(y0 - 0.04, f.y) * step(f.y, y0) : 0.0;
          float corn = bit(decor, 4.0) && cell.y > 0.5 && cell.y < floorsN + 0.5 ? 1.0 - smoothstep(0.0, 0.035 + aa.y, f.y) : 0.0;
          float joint = bit(decor, 8.0) ? max(1.0 - smoothstep(0.0, 0.01 + aa.y, f.y), 1.0 - smoothstep(0.0, 0.008 + aa.x, f.x)) : 0.0;
          float para = balc ? step(f.y, 0.37) * step(abs(f.x - 0.5), 0.47) : 0.0;
          // frame and glazing bars
          float lx = (f.x - 0.5) / ww, ly = (f.y - y0) / (y1 - y0), bw = 0.022, fx = aa.x + bw * 0.5;
          float bars = smoothstep(-bw - e, -bw + e, d); // the frame: a band just inside the opening
          float tr = type < 0.5 ? 0.68 : type > 3.5 && type < 4.5 ? 0.5 : type > 4.5 ? 0.76 : type > 2.5 ? (sp - y0) / (y1 - y0) : -1.0;
          if (type < 1.5 || (type > 2.5 && type < 4.5)) bars = max(bars, 1.0 - smoothstep(fx * 0.5, fx, abs(f.x - 0.5)));
          if (type > 1.5 && type < 2.5) bars = max(bars, 1.0 - smoothstep(fx * 0.5, fx, abs(abs(f.x - 0.5) - ww / 3.0)));
          if (tr > 0.0) bars = max(bars, 1.0 - smoothstep(fx * 0.5, fx, abs(f.y - (y0 + tr * (y1 - y0)))));
          // glass: sky reflection over a dark room, curtains, nets or blinds, different in every window
          vec3 room = vec3(0.05, 0.055, 0.06) + 0.05 * h2;
          vec3 glass = mix(room, uSky * 0.75 + 0.05, (0.2 + 0.45 * h2) * (0.4 + 0.6 * ly));
          float cur = h1 < 0.35 ? smoothstep(0.5, 0.75, abs(lx)) : h1 < 0.55 ? step(ly, 0.55) * 0.6 : 0.0;
          vec3 curC = mix(vec3(0.86, 0.82, 0.72), vec3(0.75, 0.55, 0.45), step(0.7, h3));
          glass = mix(glass, curC * (0.55 + 0.25 * h2), cur);
          if (h1 > 0.88) glass = mix(glass, vec3(0.72, 0.71, 0.67) * (0.9 + 0.1 * sin(ly * 70.0) * (1.0 - smoothstep(0.004, 0.012, aa.y))), step(1.0 - h2 * 0.8, ly)); // blinds half down
          vec3 fc = frameCol(S.y), wall = diffuseColor.rgb;
          vec3 col = mix(wall, wall * 0.8, corn);
          col = mix(col, wall * 0.62, joint * 0.7);
          col = mix(col, mix(wall, vec3(0.96, 0.95, 0.92), 0.55), band);
          col = mix(col, vec3(0.7, 0.69, 0.66), sill);
          col = mix(col, mix(wall, vec3(0.93), 0.45), para);
          col = mix(col, mix(glass, fc, bars), inW * (1.0 - para));
          // far away the pattern is below a pixel: show its average instead of shimmering
          float cov = vFw.x * vFw.y * (bit(decor, 32.0) ? 0.78 : 0.96);
          vec3 avg = mix(wall, mix(uSky * 0.4 + 0.04, fc, 0.25), cov);
          float far = smoothstep(0.08, 0.22, max(aa.x, aa.y));
          diffuseColor.rgb = mix(col, avg, far);
          glassR = inW * (1.0 - bars) * (1.0 - para) * (1.0 - far); // panes mirror the sky (sharp only up close)
          float lit = step(hsh(cell + seed * 3.1 + 17.0), uLit);
          litC = mix(vec3(1.0, 0.72, 0.4), vec3(0.82, 0.88, 1.0), step(0.86, h2)) * (0.8 + 0.6 * cur);
          litA = mix(inW * (1.0 - bars) * (1.0 - para) * lit, cov * uLit * 0.8, far);
        }`)
      .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, 0.05, glassR);")
      .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance += litC * litA * uNight * 1.25;");
  };
  return mat;
}
