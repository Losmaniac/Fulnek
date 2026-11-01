import * as THREE from "three";
import { buildWorld } from "./world.js";
import { startPlay } from "./play.js";
import { createStream } from "./stream.js";

const status = document.getElementById("status");
const say = (t) => { status.textContent = t; return new Promise((r) => setTimeout(r, 30)); }; // let the text paint

async function boot() {
  const city = window.FULNEK_CITY, src = window.FULNEK_ORTHO;
  if (!city || !src) throw new Error("The map data didn't load. Keep the data folder next to index.html.");
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.NeutralToneMapping;
  document.getElementById("view").appendChild(renderer.domElement);
  await say("Developing the aerial photo");
  const img = new Image();
  img.src = src;
  await img.decode();
  // the 10 km map: the tile list and the coarse landscape around them (both optional: without them it's the town alone)
  const ov = window.FULNEK_OVERVIEW, overview = ov ? { data: ov, img: new Image() } : null;
  if (overview) { overview.img.src = ov.photo; await overview.img.decode(); }
  await say(`Raising ${city.buildings.length.toLocaleString("cs-CZ")} buildings and planting trees`);
  const world = buildWorld(city, img, renderer, overview);
  const stream = createStream({ world, list: window.FULNEK_TILES || [] });
  world.extent = stream.extent; // where cars may drive
  const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.25, 16000); // far enough for the hills on the horizon
  startPlay({ world, city, renderer, camera, ortho: img, stream, overview });
  const n = (v) => v.toLocaleString("cs-CZ");
  const c = world.counts;
  document.getElementById("facts").textContent = `${n(city.buildings.length)} buildings · ${n(c.trees)} trees · ${n(c.bushes)} bushes · ${n(c.people)} people · ${n(c.dogs)} dogs · ${n(c.cars + c.traffic)} cars`;
  document.getElementById("credits").textContent = city.credits;
  document.getElementById("go").disabled = false;
  document.body.classList.add("ready");
}

boot().catch((e) => {
  console.error(e);
  status.textContent = "Couldn't start: " + e.message;
  status.classList.add("error");
});
