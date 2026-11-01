import * as THREE from "three";
import { projection } from "./city.js";
import { QUALITY } from "./world.js";
import { uniforms } from "./env.js";
import { createAudio } from "./audio.js";
import { createErrands } from "./errands.js";
import { createVehicles } from "./vehicle.js";
import { createTalk } from "./talk.js";
import { createAircraft, createCrime } from "./crime.js";
import { createFleet, createServices } from "./services.js";
import { createPost } from "./post.js";
import { createInteriors } from "./interior.js";

const EYE = 1.7, R = 0.35, CELL = 8;
const fmt = (n, d = 0) => n.toLocaleString("cs-CZ", { minimumFractionDigits: d, maximumFractionDigits: d });
const COMPASS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

function hashSegments(segs, stride, cell) { // spatial hash: cell -> segment indices
  const grid = new Map(), key = (i, j) => (i + 4096) * 8192 + (j + 4096);
  for (let s = 0; s < segs.length / stride; s++) {
    const o = s * stride, i0 = Math.floor(Math.min(segs[o], segs[o + 2]) / cell), i1 = Math.floor(Math.max(segs[o], segs[o + 2]) / cell);
    const j0 = Math.floor(Math.min(segs[o + 1], segs[o + 3]) / cell), j1 = Math.floor(Math.max(segs[o + 1], segs[o + 3]) / cell);
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) { const k = key(i, j); (grid.get(k) || grid.set(k, []).get(k)).push(s); }
  }
  return (x, z, fn) => { const ci = Math.floor(x / cell), cj = Math.floor(z / cell); for (let i = ci - 1; i <= ci + 1; i++) for (let j = cj - 1; j <= cj + 1; j++) { const l = grid.get(key(i, j)); if (l) for (const s of l) fn(s); } };
}
const closest = (px, pz, ax, az, bx, bz) => { const vx = bx - ax, vz = bz - az, L = vx * vx + vz * vz || 1; const t = Math.max(0, Math.min(1, ((px - ax) * vx + (pz - az) * vz) / L)); return [ax + t * vx, az + t * vz]; };

export function startPlay({ world, city, renderer, camera, ortho }) {
  const $ = (id) => document.getElementById(id);
  const [W, N, E, S] = city.bounds, P = projection();
  const { groundAt, segs } = world;
  let nearWalls = hashSegments(segs, 5, CELL);
  const named = [], namedIdx = [];
  city.roads.forEach((r, ri) => { if (r.n) for (let i = 0; i + 1 < r.p.length; i++) { named.push(r.p[i][0], r.p[i][1], r.p[i + 1][0], r.p[i + 1][1]); namedIdx.push(ri); } });
  const nearRoads = hashSegments(named, 4, 20);

  const pos = new THREE.Vector3(city.spawn[0], 0, city.spawn[1]), vel = new THREE.Vector3();
  pos.y = groundAt(pos.x, pos.z);
  const castle = city.pois.find((p) => p.k === "castle");
  let yaw = castle ? Math.atan2(-(castle.p[0] - pos.x), -(castle.p[1] - pos.z)) : 0, pitch = 0.05, fly = false, flightType = "helicopter", flightModel = null, onGround = true;
  const keys = {};

  // ---- input
  const canvas = renderer.domElement, overlay = $("start"), map = $("bigmap");
  let dragging = false, firing = false;
  const locked = () => document.pointerLockElement === canvas;
  const orbit = { yaw: 0, pitch: 0, t: 0 }; // mouse look while driving or riding: turn the head, it drifts back
  const look = (dx, dy) => {
    if (veh && veh.st.mode !== "walk") { orbit.yaw = Math.max(-2.6, Math.min(2.6, orbit.yaw - dx * 0.0022)); orbit.pitch = Math.max(-0.6, Math.min(0.5, orbit.pitch - dy * 0.0022)); orbit.t = 1.5; return; }
    yaw -= dx * 0.0022; pitch = Math.max(-1.5, Math.min(1.5, pitch - dy * 0.0022));
  };
  const audio = createAudio();
  let veh = null;
  let crime = null, services = null, room = null; // room: the building you're inside (interior.js), or null
  const fire = () => crime && overlay.hidden && map.hidden && !talk.isOpen() && !errands.isOpen() && !room && !services.hose(pos) && crime.shoot(veh.st.mode); // a fire hose in hand sprays instead (services.update)
  const play = () => {
    overlay.hidden = true; map.hidden = true; audio.start();
    try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch { /* drag-to-look still works */ }
  };
  $("go").addEventListener("click", play);
  document.addEventListener("pointerlockchange", () => { if (!locked() && map.hidden) overlay.hidden = false; });
  addEventListener("mousemove", (e) => { if (locked() || dragging) look(e.movementX, e.movementY); });
  canvas.addEventListener("mousedown", (e) => {
    if (!locked()) dragging = true;
    else if (e.button === 0) { firing = true; fire(); }
  });
  addEventListener("mouseup", () => { dragging = false; firing = false; });
  const press = (code) => { // one-shot actions, shared by the keyboard and the touch buttons
    const driving = veh.st.mode !== "walk", playing = overlay.hidden && map.hidden;
    if (playing && talk.key(code)) return true;
    if (playing && phone.key(code)) return true;
    if (playing && summary.key(code)) return true;
    if (playing && services.key(code, pos)) return true;
    if (playing && room && code === "KeyE" && atDoor()) { goOut(); return true; }
    if (playing && !driving && errands.key(code, world.env.st.hour)) return true;
    if (code === "KeyX" && playing && !talk.isOpen() && crime) { crime.toggle(); return true; }
    if (code === "KeyB" && playing && crime) { crime.cycle(); return true; }
    if (/^Digit[1-5]$/.test(code) && playing && crime) { crime.select(Number(code.slice(-1)) - 1); return true; }
    if (code === "KeyR" && playing && crime) { crime.reload(); return true; }
    if (code === "KeyP" && playing) { phone.toggle(); return true; }
    if (code === "KeyE" && playing && !driving && !room && talk.start(pos)) return true;
    if (code === "KeyE" && playing && !room) {
      if (driving) { const was = veh.st.mode; if (veh.exit(pos)) { yaw = veh.st.yaw - Math.PI / 2; pitch = 0; nearWalls = hashSegments(segs, 5, CELL); toast(was === "car" ? "Parked" : "Bike left here", "E to get back on"); } else toast("Too fast", "Stop first, then E"); }
      else { if (fly && flightModel) world.scene.remove(flightModel.group); flightModel = null; fly = false; const m = veh.enter(pos); if (m) { orbit.yaw = orbit.pitch = 0; if (m === "car") crime.carjacked(); if (m === "service") toast(veh.st.svc.name, "W/S · A/D steer · L blue lights and siren · C camera · E get out"); else toast(m === "car" ? "Driving" : "Cycling", m === "car" ? "W/S throttle and brake · A/D steer · Space handbrake · C camera · H horn · E get out" : "W pedal · S brake · A/D steer · E get off"); } else if (onGround) { const e = interiors.near(pos, yaw); if (e) goIn(e); } }
      return true;
    }
    if (driving && code === "KeyC") { veh.toggleCam(); return true; }
    if (driving && code === "KeyH") { audio.horn(); return true; }
    if (code === "KeyF" && !driving && !room) { fly = !fly; vel.set(0, 0, 0); if (fly) { flightType = "helicopter"; flightModel = createAircraft(flightType); world.scene.add(flightModel.group); toast("Helicopter", "WASD fly · Space climb · C descend · J jet · H helicopter · F land"); } else { if (flightModel) world.scene.remove(flightModel.group); flightModel = null; } }
    if (fly && (code === "KeyJ" || code === "KeyH")) { const next = code === "KeyJ" ? "jet" : "helicopter"; if (next !== flightType) { if (flightModel) world.scene.remove(flightModel.group); flightType = next; flightModel = createAircraft(flightType); world.scene.add(flightModel.group); toast(flightType === "jet" ? "Jet" : "Helicopter", flightType === "jet" ? "WASD fly fast · Space climb · C descend · H helicopter · F land" : "WASD fly · Space climb · C descend · J jet · F land"); } }
    if (code === "KeyM") toggleMap();
    if (code === "KeyT") world.env.skipHour();
    if (code === "KeyV") toast("Sound", audio.toggle() ? "off" : "on");
    if (code === "KeyY") world.env.nextWeather();
    if (code === "KeyG") world.setQuality(QUALITY[(QUALITY.indexOf(world.quality()) + 1) % QUALITY.length]);
    return false;
  };
  addEventListener("keydown", (e) => {
    if (press(e.code)) { e.preventDefault(); return; }
    keys[e.code] = true;
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) e.preventDefault();
  });
  addEventListener("keyup", (e) => (keys[e.code] = false));
  addEventListener("blur", () => { for (const k in keys) keys[k] = false; });

  // ---- touch: left side is a joystick, right side drags the view, buttons for the rest
  const touchUI = matchMedia("(pointer: coarse)").matches || "ontouchstart" in window, stick = { id: null, ox: 0, oy: 0, x: 0, y: 0 }, lookT = { id: null, x: 0, y: 0 };
  if (touchUI) {
    document.body.classList.add("touch");
    world.setQuality("low"); // phones and tablets: no shadows, lighter rendering
    const knob = $("stick");
    canvas.addEventListener("touchstart", (e) => {
      for (const t of e.changedTouches) {
        if (t.clientX < innerWidth * 0.45 && stick.id == null) { Object.assign(stick, { id: t.identifier, ox: t.clientX, oy: t.clientY, x: 0, y: 0 }); knob.hidden = false; knob.style.left = t.clientX + "px"; knob.style.top = t.clientY + "px"; }
        else if (lookT.id == null) Object.assign(lookT, { id: t.identifier, x: t.clientX, y: t.clientY });
      }
      e.preventDefault();
    }, { passive: false });
    canvas.addEventListener("touchmove", (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === stick.id) { stick.x = Math.max(-1, Math.min(1, (t.clientX - stick.ox) / 55)); stick.y = Math.max(-1, Math.min(1, (t.clientY - stick.oy) / 55)); }
        if (t.identifier === lookT.id) { look((t.clientX - lookT.x) * 1.8, (t.clientY - lookT.y) * 1.8); lookT.x = t.clientX; lookT.y = t.clientY; }
      }
      e.preventDefault();
    }, { passive: false });
    const end = (e) => { for (const t of e.changedTouches) { if (t.identifier === stick.id) { stick.id = null; stick.x = stick.y = 0; knob.hidden = true; } if (t.identifier === lookT.id) lookT.id = null; } };
    canvas.addEventListener("touchend", end); canvas.addEventListener("touchcancel", end);
    for (const b of document.querySelectorAll("#touchpad button")) b.addEventListener("click", () => {
      const c = b.dataset.key;
      if (c === "Space") { keys.Space = true; setTimeout(() => (keys.Space = false), 180); }
      else if (c === "Pause") overlay.hidden = false;
      else if (c === "Fire") fire();
      else press(c);
    });
  }

  // ---- places to discover: landmarks and named places from OSM; generic shop signs only show a hint
  const KINDS = new Set(["castle", "place_of_worship", "museum", "townhall", "monastery", "memorial", "monument", "church", "chapel", "manor", "ruins", "attraction", "viewpoint", "wayside_shrine", "wayside_cross"]);
  const spots = [], seen = new Set();
  for (const p of city.pois) if (KINDS.has(p.k) && !seen.has(p.n)) { seen.add(p.n); spots.push({ n: p.n, k: p.k.replace(/_/g, " ").replace("place of worship", "church"), x: p.p[0], z: p.p[1], real: true, landmark: true }); }
  for (const p of city.places) if (!seen.has(p.n) && p.k !== "company") { seen.add(p.n); spots.push({ n: p.n, k: p.k, x: p.x, z: p.z, real: !!p.real }); }
  const total = spots.filter((s) => s.real).length, KEY = "fulnek3d.found.v1";
  let found = new Set();
  try { found = new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { /* private window: progress just isn't kept */ }
  const toastEl = $("toast"), logEl = $("log");
  let toastT = 0, lastHint = "";
  const toast = (title, line) => { toastEl.innerHTML = ""; const a = document.createElement("small"), b = document.createElement("strong"); a.textContent = title; b.textContent = line; toastEl.append(a, b); toastEl.hidden = false; toastT = 4; };
  const errands = createErrands({ city, toast, landmarks: spots.filter((s) => s.landmark), el: { list: $("errlist"), money: $("errmoney"), hint: $("hint"), shop: $("shop") } });
  const discover = () => {
    for (const sp of spots) {
      const d = Math.hypot(pos.x - sp.x, pos.z - sp.z);
      if (sp.real && d < 14 && !found.has(sp.n)) {
        found.add(sp.n);
        try { localStorage.setItem(KEY, JSON.stringify([...found])); } catch { /* not kept */ }
        toast(`Discovered · ${found.size} of ${total}`, `${sp.n} · ${sp.k}`); foundToday++;
      } else if (!sp.real && d < 9 && lastHint !== sp.n) { lastHint = sp.n; toast("Shop", `${sp.n} · ${sp.k}`); }
    }
    logEl.textContent = `Places found ${found.size}/${total}`;
  };

  // ---- maps: ortho at 2 m/px with streets drawn over it
  const mc = document.createElement("canvas");
  mc.width = Math.round((E - W) / 2); mc.height = Math.round((S - N) / 2);
  const mg = mc.getContext("2d");
  mg.drawImage(ortho, 0, 0, mc.width, mc.height);
  mg.lineCap = mg.lineJoin = "round";
  const major = new Set(["primary", "secondary", "tertiary", "trunk"]), minor = new Set(["residential", "unclassified", "service", "living_street", "pedestrian"]);
  for (const r of city.roads) {
    mg.strokeStyle = r.k === "stream" ? "rgba(120,190,230,0.8)" : r.k === "rail" ? "rgba(40,40,40,0.7)" : major.has(r.k) ? "rgba(255,236,190,0.85)" : "rgba(255,255,255,0.55)";
    mg.lineWidth = major.has(r.k) ? 3 : minor.has(r.k) || r.k === "rail" ? 2 : 1;
    mg.beginPath(); r.p.forEach(([x, z], i) => mg[i ? "lineTo" : "moveTo"]((x - W) / 2, (z - N) / 2)); mg.stroke();
  }
  const mini = $("minimap"), mx = mini.getContext("2d");
  const arrow = (g, x, y, a, s) => { g.save(); g.translate(x, y); g.rotate(a); g.beginPath(); g.moveTo(0, -s); g.lineTo(s * 0.62, s * 0.7); g.lineTo(0, s * 0.35); g.lineTo(-s * 0.62, s * 0.7); g.closePath(); g.fillStyle = "#e0a43a"; g.strokeStyle = "#14181a"; g.lineWidth = 2; g.fill(); g.stroke(); g.restore(); };
  const drawMini = () => {
    const s = mini.width, px = (pos.x - W) / 2, pz = (pos.z - N) / 2, span = 120; // 240 m across
    mx.fillStyle = "#3b4430"; mx.fillRect(0, 0, s, s);
    mx.drawImage(mc, px - span / 2, pz - span / 2, span, span, 0, 0, s, s);
    if (target) { // the waypoint: a pin inside the minimap, or an arrow on its rim pointing the way
      const k = s / (span * 2), dx = (target.x - pos.x) * k, dz = (target.z - pos.z) * k, r = s / 2 - 14, d = Math.hypot(dx, dz);
      const [x, y] = d < r ? [s / 2 + dx, s / 2 + dz] : [s / 2 + (dx / d) * r, s / 2 + (dz / d) * r];
      mx.beginPath(); mx.arc(x, y, s * 0.028, 0, 7); mx.fillStyle = "#d9442b"; mx.strokeStyle = "#fff"; mx.lineWidth = 3; mx.fill(); mx.stroke();
    }
    arrow(mx, s / 2, s / 2, -yaw, s * 0.06);
  };
  let target = null; // {x, z, label}
  const setTarget = (x, z, label, quiet = false) => { target = x == null ? null : { x, z, label, quiet }; }; // quiet: its owner clears it, no "You're there"
  const big = $("bigcanvas"), bg = big.getContext("2d");
  // big map: the full-resolution photo with crisp streets, buildings and names drawn on top; wheel zooms, drag pans
  const view = { zoom: 1, cx: (W + E) / 2, cz: (N + S) / 2 }; // metres
  let mpp = 1; // metres per canvas pixel at the current zoom
  const drawBig = () => {
    const dpr = devicePixelRatio, cw = innerWidth * 0.94, ch = innerHeight * 0.84;
    big.width = Math.round(cw * dpr); big.height = Math.round(ch * dpr); big.style.width = cw + "px"; big.style.height = ch + "px";
    mpp = Math.max((E - W) / big.width, (S - N) / big.height) / view.zoom;
    const hw = (big.width * mpp) / 2, hh = (big.height * mpp) / 2;
    view.cx = Math.min(Math.max(view.cx, W + hw), E - hw); view.cz = Math.min(Math.max(view.cz, N + hh), S - hh);
    if (hw * 2 > E - W) view.cx = (W + E) / 2;
    if (hh * 2 > S - N) view.cz = (N + S) / 2;
    const X = (x) => (x - view.cx + hw) / mpp, Z = (z) => (z - view.cz + hh) / mpp;
    bg.fillStyle = "#20261f"; bg.fillRect(0, 0, big.width, big.height);
    bg.drawImage(ortho, 0, 0, ortho.width, ortho.height, X(W), Z(N), (E - W) / mpp, (S - N) / mpp);
    bg.lineCap = bg.lineJoin = "round";
    if (view.zoom >= 2) { // building outlines
      bg.strokeStyle = "rgba(255,255,255,0.35)"; bg.lineWidth = dpr;
      for (const B of city.buildings) { const r = B.r[0]; bg.beginPath(); r.forEach(([x, z], i) => bg[i ? "lineTo" : "moveTo"](X(x), Z(z))); bg.closePath(); bg.stroke(); }
    }
    for (const r of city.roads) {
      bg.strokeStyle = r.k === "stream" ? "rgba(120,190,230,0.85)" : r.k === "rail" ? "rgba(40,40,40,0.8)" : major.has(r.k) ? "rgba(255,236,190,0.9)" : "rgba(255,255,255,0.65)";
      bg.lineWidth = Math.max(dpr, (r.w / mpp) * 0.8);
      bg.beginPath(); r.p.forEach(([x, z], i) => bg[i ? "lineTo" : "moveTo"](X(x), Z(z))); bg.stroke();
    }
    const label = (text, x, y, size, color = "#f3ead2") => { bg.font = `600 ${size * dpr}px 'IBM Plex Sans Condensed', 'Arial Narrow', sans-serif`; bg.lineWidth = 3 * dpr; bg.strokeStyle = "rgba(20,24,26,0.85)"; bg.strokeText(text, x, y); bg.fillStyle = color; bg.fillText(text, x, y); };
    if (view.zoom >= 3) { // street names once per street, at the middle of its longest piece
      const done = new Set();
      for (const r of city.roads.filter((r) => r.n).sort((a, b) => b.p.length - a.p.length)) {
        if (done.has(r.n)) continue; done.add(r.n);
        const [x, z] = r.p[Math.floor(r.p.length / 2)];
        bg.textAlign = "center"; label(r.n, X(x), Z(z), 11, "#fff3cf"); bg.textAlign = "left";
      }
    }
    for (const sp of spots) { // found places in ochre with their names, the rest as hollow rings to go and find
      if (!sp.real && view.zoom < 3) continue;
      const x = X(sp.x), y = Z(sp.z), got = found.has(sp.n), r = 4 * dpr;
      bg.beginPath(); bg.arc(x, y, r, 0, 7);
      if (got || !sp.real) { bg.fillStyle = sp.real ? "#e0a43a" : "#8fb3d9"; bg.fill(); } else { bg.lineWidth = 2 * dpr; bg.strokeStyle = "#f3ead2"; bg.stroke(); }
      if (got || !sp.real || view.zoom >= 4 || ["castle", "place_of_worship", "museum"].includes(sp.k)) label(sp.n, x + 7 * dpr, y + 4 * dpr, 12);
    }
    if (view.zoom >= 6) { // house numbers, for finding a front door
      bg.textAlign = "center";
      for (const d of city.doors || []) { const x = X(d[0]), y = Z(d[1]); if (x > -20 && y > -20 && x < big.width + 20 && y < big.height + 20) label(String(d[3]), x, y, 10, "#ffd2c8"); }
      bg.textAlign = "left";
    }
    if (target) { const x = X(target.x), y = Z(target.z); bg.beginPath(); bg.arc(x, y, 7 * dpr, 0, 7); bg.fillStyle = "#d9442b"; bg.strokeStyle = "#fff"; bg.lineWidth = 2 * dpr; bg.fill(); bg.stroke(); label(target.label, x + 10 * dpr, y - 8 * dpr, 13, "#ffd9cf"); }
    arrow(bg, X(pos.x), Z(pos.z), -yaw, 11 * dpr);
    $("mapzoom").textContent = `${view.zoom.toLocaleString("cs-CZ", { maximumFractionDigits: 1 })}×`;
  };
  const toggleMap = () => {
    if (map.hidden) { view.cx = pos.x; view.cz = pos.z; drawBig(); map.hidden = false; overlay.hidden = true; if (locked()) document.exitPointerLock(); }
    else play();
  };
  const toWorld = (e) => { const r = big.getBoundingClientRect(), k = big.width / r.width; return [view.cx + ((e.clientX - r.left) * k - big.width / 2) * mpp, view.cz + ((e.clientY - r.top) * k - big.height / 2) * mpp]; };
  const zoomAt = (e, f) => { // keep the point under the cursor where it is
    const [wx, wz] = toWorld(e), z0 = view.zoom;
    view.zoom = Math.min(16, Math.max(1, view.zoom * f));
    const k = z0 / view.zoom; view.cx = wx + (view.cx - wx) * k; view.cz = wz + (view.cz - wz) * k;
    drawBig();
  };
  big.addEventListener("wheel", (e) => { e.preventDefault(); zoomAt(e, e.deltaY < 0 ? 1.25 : 0.8); }, { passive: false });
  let drag = null;
  big.addEventListener("pointerdown", (e) => { drag = { x: e.clientX, y: e.clientY, cx: view.cx, cz: view.cz, moved: false }; big.setPointerCapture(e.pointerId); });
  big.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const r = big.getBoundingClientRect(), k = (big.width / r.width) * mpp, dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (Math.hypot(dx, dy) > 4) drag.moved = true;
    if (drag.moved) { view.cx = drag.cx - dx * k; view.cz = drag.cz - dy * k; drawBig(); }
  });
  big.addEventListener("pointerup", (e) => { // a click without dragging travels there, on foot
    const d = drag; drag = null;
    if (!d || d.moved) return;
    const [x, z] = toWorld(e); teleport(x, z); play();
  });
  for (const [id, f] of [["mapin", 1.6], ["mapout", 0.625]]) $(id).addEventListener("click", () => { view.zoom = Math.min(16, Math.max(1, view.zoom * f)); drawBig(); });
  $("closemap").addEventListener("click", play);
  const teleport = (x, z, y) => { if (room) { room.dispose(); room = null; } if (veh && veh.st.mode !== "walk") { veh.st.v = 0; veh.exit(pos); nearWalls = hashSegments(segs, 5, CELL); } pos.set(Math.min(Math.max(x, W + 3), E - 3), 0, Math.min(Math.max(z, N + 3), S - 3)); pos.y = y ?? groundAt(pos.x, pos.z); vel.set(0, 0, 0); };

  // ---- simulation
  const collide = () => {
    const out = ([qx, qz], r) => { const dx = pos.x - qx, dz = pos.z - qz, d = Math.hypot(dx, dz); if (d < r && d > 1e-6) { pos.x += (dx / d) * (r - d); pos.z += (dz / d) * (r - d); } };
    for (let it = 0; it < 2; it++) {
      const sg = room ? room.segs : segs;
      (room ? room.near : nearWalls)(pos.x, pos.z, (s) => {
        const o = s * 5;
        if (pos.y + 0.3 > sg[o + 4]) return; // above this roof
        out(closest(pos.x, pos.z, sg[o], sg[o + 1], sg[o + 2], sg[o + 3]), R);
      });
      if (!room) for (const a of world.cars.agentPos) if (pos.y > a[6] - 1 && pos.y < a[6] + 2.5) out(closest(pos.x, pos.z, a[0] - a[3] * a[5], a[1] - a[4] * a[5], a[0] + a[3] * a[5], a[1] + a[4] * a[5]), R + a[2]); // moving traffic
    }
  };
  const fwd = new THREE.Vector3(), right = new THREE.Vector3(), wish = new THREE.Vector3();
  const step = (dt) => {
    const k = (...c) => c.some((x) => keys[x]);
    if (veh.st.mode !== "walk") { // driving or riding
      veh.step(dt, { throttle: k("KeyW", "ArrowUp") || stick.y < -0.3, brake: k("KeyS", "ArrowDown") || stick.y > 0.3, steer: k("KeyA", "ArrowLeft") - k("KeyD", "ArrowRight") - (Math.abs(stick.x) > 0.15 ? stick.x : 0), hand: k("Space") }, { nearWalls, segs, closest, onRunOver: (x, z) => veh.st.mode === "car" && crime.runOver(x, z) });
      pos.set(veh.st.x, veh.st.y, veh.st.z); wish.set(0, 0, 0);
      if ((orbit.t -= dt) < 0) { orbit.yaw *= Math.exp(-dt * 2.5); orbit.pitch *= Math.exp(-dt * 2.5); }
      return;
    }
    fwd.set(-Math.sin(yaw), 0, -Math.cos(yaw)); right.set(Math.cos(yaw), 0, -Math.sin(yaw));
    wish.set(0, 0, 0).addScaledVector(fwd, k("KeyW", "ArrowUp") - k("KeyS", "ArrowDown") - stick.y).addScaledVector(right, k("KeyD", "ArrowRight") - k("KeyA", "ArrowLeft") + stick.x);
    const push = Math.min(1, wish.length()); // the touch stick can ask for less than full speed
    if (wish.lengthSq()) wish.normalize().multiplyScalar(stick.id != null ? push : 1);
    const run = k("ShiftLeft", "ShiftRight") || Math.hypot(stick.x, stick.y) > 0.95;
    if (fly) {
      const sp = flightType === "jet" ? (run ? 170 : 115) : (run ? 75 : 28);
      pos.addScaledVector(wish, sp * dt); pos.y += (k("Space") - k("KeyC", "ControlLeft") + (stick.id != null ? -stick.y * Math.sin(pitch) : 0)) * sp * dt; // on touch, fly where you look
      collide();
      pos.y = Math.max(pos.y, groundAt(pos.x, pos.z));
    } else {
      const sp = run ? 9 : 4.2;
      pos.x += wish.x * sp * dt; pos.z += wish.z * sp * dt;
      collide();
      vel.y -= 22 * dt;
      if (keys.Space && onGround) { vel.y = 6.2; onGround = false; }
      pos.y += vel.y * dt;
      const g = room ? room.y : groundAt(pos.x, pos.z); // indoors: the ground floor is flat
      if (pos.y <= g || (onGround && vel.y <= 0 && pos.y - g < 0.6)) { pos.y = g; vel.y = 0; onGround = true; } else onGround = false;
    }
    pos.x = Math.min(Math.max(pos.x, W + 3), E - 3); pos.z = Math.min(Math.max(pos.z, N + 3), S - 3);
  };

  // ---- HUD text, a few times per second
  const street = $("street"), coords = $("coords"), fpsEl = $("fps"), speedo = $("speedo");
  let hudT = 0, frames = 0, fpsT = performance.now();
  const autoQ = { t: 0, d: [] }; // d: raw frame times; the median ignores one-off shader-compile stalls
  const hud = () => {
    let best = 20, name = "";
    nearRoads(pos.x, pos.z, (s) => { const o = s * 4, [qx, qz] = closest(pos.x, pos.z, named[o], named[o + 1], named[o + 2], named[o + 3]), d = Math.hypot(pos.x - qx, pos.z - qz); if (d < best) { best = d; name = city.roads[namedIdx[s]].n; } });
    street.textContent = name; street.hidden = !name;
    const lat = P.lat0 - pos.z / P.mz, lon = P.lon0 + pos.x / P.mx, head = ((((-yaw * 180) / Math.PI) % 360) + 360) % 360;
    coords.textContent = `${fmt(lat, 5)}° N  ${fmt(lon, 5)}° E  ·  ${fmt(pos.y)} m a.s.l.  ·  ${COMPASS[Math.round(head / 45) % 8]} ${fmt(head)}°  ·  ${world.env.clock()} ${world.env.weather()}${fly ? `  ·  ${flightType}` : ""}`;
  };

  const resize = () => { renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); if (!map.hidden) drawBig(); };
  addEventListener("resize", resize); resize();

  world.scene.add(camera); // the bike's handlebars ride along as a child of the camera
  const fleet = createFleet({ city, scene: world.scene, groundAt, agentPos: world.cars.agentPos, parked: world.cars.parked });
  const post = createPost({ renderer, world, camera });
  // ---- inside buildings: the room replaces the town on screen and in collisions while you're in it
  const interiors = createInteriors(city);
  const atDoor = () => room && Math.hypot(pos.x - room.start.x, pos.z - room.start.z) < 1.3;
  const goIn = (e) => { room = interiors.build(e); room.near = hashSegments(room.segs, 5, CELL); pos.set(room.start.x, room.y, room.start.z); vel.set(0, 0, 0); yaw = room.yawIn; pitch = 0; toast("Inside", "E at the door to go back out"); };
  const goOut = () => { const r = room; room = null; r.dispose(); pos.set(r.out.x, groundAt(r.out.x, r.out.z), r.out.z); vel.set(0, 0, 0); yaw = r.yawOut; pitch = 0; };
  veh = createVehicles({ world, city, groundAt, camera, scene: world.scene, audio, fleet });
  world.env.onThunder = (pw) => audio.thunder(pw);
  const undiscovered = (x, z) => { let best = null, bd = Infinity; for (const sp of spots) if (sp.real && !found.has(sp.n)) { const d = Math.hypot(sp.x - x, sp.z - z); if (d < bd && d > 30) { bd = d; best = sp; } } return best; };
  const talk = createTalk({ city, world, errands, el: $("talk"), toast, setTarget, undiscovered });
  const station = city.places.find((p) => p.k === "police" || /police|policie/i.test(p.n));
  crime = createCrime({
    camera, scene: world.scene, people: world.people, groundAt,
    wantedEl: $("wanted"), weaponEl: $("weapon"), toast, audio,
    onArrest: () => {
      const x = station ? station.x + 5 : city.spawn[0], z = station ? station.z + 5 : city.spawn[1];
      teleport(x, z); nearWalls = hashSegments(segs, 5, CELL); errands.fine(250);
    },
  });
  services = createServices({ city, world, scene: world.scene, camera, renderer, veh, fleet, errands, toast, setTarget, audio });
  // ---- distance per mode and found places, for the phone and the end-of-day card
  const dist = { walk: 0, car: 0, bike: 0 };
  let lastDay = null, foundToday = 0;
  const km = (m) => `${fmt(m / 1000, 1)} km`;
  const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dateOf = (day) => { const d = new Date(day * 864e5); return `${DAYS[d.getUTCDay()]} ${d.getUTCDate()}. ${d.getUTCMonth() + 1}.`; };
  const card = (el, title, parts) => { // build a card from [kind, content] parts; returns the guide buttons in order
    el.innerHTML = ""; const h = document.createElement("h2"); h.textContent = title; el.append(h);
    const btns = [];
    for (const [k, c] of parts) {
      if (k === "h") { const e = document.createElement("h3"); e.textContent = c; el.append(e); }
      else if (k === "p") { const e = document.createElement("p"); e.textContent = c; el.append(e); }
      else if (k === "rows") { const t = document.createElement("table"); for (const [a, b] of c) { const tr = t.insertRow(); tr.insertCell().textContent = a; tr.insertCell().textContent = b; } el.append(t); }
      else if (k === "go") { const [label, x, z, name] = c, b = document.createElement("button"), kb = document.createElement("kbd"), sp = document.createElement("span"), r = document.createElement("span"); kb.textContent = btns.length + 1; sp.textContent = label; r.textContent = `${fmt(Math.hypot(x - pos.x, z - pos.z))} m`; b.type = "button"; b.append(kb, sp, r); const fn = () => { setTarget(x, z, name || label); toast("Guiding you", name || label); }; b.addEventListener("click", fn); btns.push(fn); el.append(b); }
    }
    return btns;
  };
  const phone = (() => {
    const el = $("phone"); let open = false, btns = [], t = 0;
    const build = () => {
      const st = world.env.st, s = errands.stats(), parts = [["p", `${dateOf(st.day)} · ${world.env.clock()} · ${world.env.weather()} · ${errands.kc(errands.money())}`], ["h", "Tasks"]];
      for (const k of errands.tasks()) {
        if (k.done) continue;
        if (k.type === "buy") parts.push(["go", [`Buy ${k.item} · ${k.shop}`, k.x, k.z, k.shop]]);
        else if (k.type === "visit") parts.push(["go", [`Visit ${k.place}`, k.x, k.z, k.place]]);
        else parts.push(["go", k.got ? [`Bring ${k.item} to ${k.from} · ${k.addr}`, k.x, k.z, k.addr] : [`Buy ${k.item} for ${k.from} · ${k.shop}`, k.sx, k.sz, k.shop]]);
      }
      if (!errands.tasks().some((k) => !k.done)) parts.push(["p", "All done. Ask people if they need a hand (E)."]);
      if (errands.bag().length) parts.push(["p", `Bag: ${errands.bag().slice(-8).join(", ")}`]);
      if (services.status()) parts.push(["h", "Duty"], ["p", services.status()]);
      parts.push(["h", "Forecast"], ["rows", [["now", world.env.weather()], ...world.env.forecast().map((f) => [f.at, f.name])]]);
      const u = undiscovered(pos.x, pos.z);
      parts.push(["h", `Places · ${found.size} of ${total} found`]);
      if (u) parts.push(["go", [`Nearest new: ${u.n}`, u.x, u.z, u.n]]);
      parts.push(["h", "Today"], ["rows", [["walked", km(dist.walk)], ["driven", km(dist.car)], ["cycled", km(dist.bike)], ["errands done", fmt(s.done)], ["spent", errands.kc(s.spent)], ["earned", errands.kc(s.earned)]]]);
      parts.push(["p", "1–9 guide me there · P or Esc to close"]);
      btns = card(el, "Phone", parts);
    };
    return {
      toggle: () => { open = !open; el.hidden = !open; if (open) build(); },
      refresh: () => { if (open && (t += 0.25) >= 1) { t = 0; build(); } },
      key: (code) => {
        if (!open) return false;
        if (code === "Escape" || code === "KeyP") { open = false; el.hidden = true; return true; }
        const n = /^Digit([1-9])$/.exec(code); if (n && btns[n[1] - 1]) { btns[n[1] - 1](); open = false; el.hidden = true; return true; }
        return false;
      },
    };
  })();
  const summary = (() => {
    const el = $("summary"); let t = 0;
    return {
      show: (day) => {
        const s = errands.resetStats();
        card(el, `${dateOf(day)} is over`, [["rows", [["walked", km(dist.walk)], ["driven", km(dist.car)], ["cycled", km(dist.bike)], ["errands done", fmt(s.done)], ["spent", errands.kc(s.spent)], ["earned", errands.kc(s.earned)], ["places found", fmt(foundToday)], ["wallet", errands.kc(errands.money())]]], ["p", "Good night, Fulnek. E to continue."]]);
        el.hidden = false; t = 12; dist.walk = dist.car = dist.bike = 0; foundToday = 0;
        const tick = () => { if ((t -= 1) <= 0) el.hidden = true; else setTimeout(tick, 1000); }; setTimeout(tick, 1000);
      },
      key: (code) => { if (el.hidden || !(code === "KeyE" || code === "Escape")) return false; el.hidden = true; return true; },
    };
  })();
  let last = performance.now();
  const frame = (now) => {
    const raw = now - last, dt = Math.max(0, Math.min(raw / 1000, 0.05)); last = now; // rAF can report a time before startPlay
    const playing = overlay.hidden && map.hidden;
    if (playing) { const ox = pos.x, oz = pos.z; step(dt); if (!fly) dist[veh.st.mode] += Math.min(50, Math.hypot(pos.x - ox, pos.z - oz)); }
    if (playing && firing) fire();
    if (playing) crime.update(dt, pos, yaw, fly ? "fly" : veh.st.mode, nearWalls, segs, veh.st.mode === "car" ? veh.st : null, world.cars.agentPos);
    if (playing) services.update(dt, { pos, firing: firing && map.hidden && !talk.isOpen() });
    const st = world.env.st, walking = playing && !fly && onGround && wish.lengthSq() > 0;
    if (world.cars.honk) { world.cars.honk = false; audio.horn(); }
    if (world.people.dogDist < 9 && Math.random() < dt * 0.12) audio.bark(); // a dog nearby sometimes says hello
    audio.update({ dt, wind: uniforms.uWind.value, rain: st.rain, day: 1 - uniforms.uNight.value, carDist: world.cars.nearest, drive: veh.st.mode === "car" ? Math.min(1, Math.abs(veh.st.v) / 20) : undefined, moving: walking, running: walking && (keys.ShiftLeft || keys.ShiftRight), hour: st.hour });
    if (fly && flightModel) {
      flightModel.group.position.set(pos.x, pos.y + 1.2, pos.z); flightModel.group.rotation.set(0, yaw, 0); flightModel.rotors.forEach((r, i) => { r.rotation.y += dt * (i ? 22 : 34); });
      const fx = -Math.sin(yaw), fz = -Math.cos(yaw); camera.position.set(pos.x - fx * (flightType === "jet" ? 18 : 14), pos.y + (flightType === "jet" ? 7 : 6), pos.z - fz * (flightType === "jet" ? 18 : 14)); camera.lookAt(pos.x + fx * 14, pos.y + 1.5, pos.z + fz * 14);
    } else if (!veh.view(dt, uniforms.uNight.value, orbit.yaw, orbit.pitch)) { camera.position.set(pos.x, pos.y + EYE, pos.z); camera.rotation.set(pitch, yaw, 0, "YXZ"); }
    world.update(dt, camera.position, pos, now / 1000);
    if (room) { room.update(pos); camera.updateMatrixWorld(); renderer.render(room.scene, camera); } else post.render(dt); // the camera's parent is the town scene: update it by hand
    drawMini();
    if ((hudT += dt) > 0.25) {
      hudT = 0; hud(); discover(); errands.update(pos, world.env.st.hour, world.env.st.day);
      const driving = veh.st.mode !== "walk", hint = $("hint");
      speedo.hidden = !driving; if (driving) speedo.textContent = `${fmt(veh.speed())} km/h`;
      talk.update(pos);
      const sh = services.hint(pos);
      if (sh) { hint.hidden = false; hint.textContent = sh; }
      else if (driving || talk.isOpen()) hint.hidden = true;
      else if (hint.hidden && !errands.isOpen()) { const nm = !room && talk.nearName(pos), h = room ? (atDoor() ? "E · go outside" : "") : nm ? `E · talk to ${nm}` : veh.nearHint(pos) || (onGround && !fly && interiors.near(pos, yaw) ? "E · go inside" : ""); hint.hidden = !h; hint.textContent = h; }
      const tEl = $("target");
      if (target) {
        const d = Math.hypot(target.x - pos.x, target.z - pos.z), b = ((Math.atan2(target.x - pos.x, -(target.z - pos.z)) * 180) / Math.PI + 360) % 360;
        if (d < 12 && !target.quiet) { toast("You're there", target.label); target = null; tEl.hidden = true; }
        else { tEl.hidden = false; tEl.textContent = `→ ${target.label} · ${fmt(d)} m ${COMPASS[Math.round(b / 45) % 8]}`; }
      } else tEl.hidden = true;
      phone.refresh();
      if (st.day !== lastDay) { if (lastDay !== null) summary.show(lastDay); lastDay = st.day; }
    }
    if (toastT > 0 && (toastT -= dt) <= 0) toastEl.hidden = true;
    if (playing && autoQ.t < 6) { // first seconds of play: if the machine struggles, step the graphics down once
      autoQ.t += dt; autoQ.d.push(raw);
      if (autoQ.t >= 6) { const fps = 1000 / autoQ.d.sort((a, b) => a - b)[autoQ.d.length >> 1]; if (fps < 24 && world.quality() !== "low") { world.setQuality(QUALITY[Math.max(0, QUALITY.indexOf(world.quality()) - 1)]); toast("Graphics", `Lowered to ${world.quality()} for smoother play · G to change`); } }
    }
    frames++; if (now - fpsT >= 1000) { fpsEl.textContent = `${Math.round((frames * 1000) / (now - fpsT))} fps · ${world.quality()} quality (G)`; frames = 0; fpsT = now; } // wall-clock, not the clamped dt
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  hud();
  // test hook: place the camera without input devices
  window.__fulnek = { world, renderer, teleport, pose: (x, z, yw, pt, y, f = false) => { teleport(x, z, y); yaw = yw; pitch = pt; fly = f; }, state: () => ({ x: pos.x, y: pos.y, z: pos.z, yaw, pitch, fly, mode: veh.st.mode }), press, keys, veh, crime, services, post, room: () => room, interiors, goIn, talk, phone, summary, errands, setTarget, sim: (sec) => { for (let t = 0; t < sec; t += 1 / 60) step(1 / 60); } };
}
