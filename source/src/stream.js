// Map tiles around the player: nearby tiles load and build a little each frame; far ones are freed.
// Tile files are plain scripts (they work from file:// too) that set window.FULNEK_CITY / FULNEK_ORTHO, so they load one at a time.
import { projection } from "./city.js";

const LOAD = 1100, KEEP = 2200, BUDGET = 6; // metres from the tile's edge; milliseconds of building per frame

export function createStream({ world, list }) {
  const P = projection(), home = "0_0";
  const tiles = list.filter((t) => t.id !== home).map((t) => ({ ...t, b: [P.x(t.W), P.z(t.N), P.x(t.E), P.z(t.S)], state: "out" }));
  const gap = (b, x, z) => Math.hypot(Math.max(b[0] - x, 0, x - b[2]), Math.max(b[1] - z, 0, z - b[3]));
  let loading = null, checkAt = 0;
  const script = (src) => new Promise((ok, fail) => { const s = document.createElement("script"); s.src = src; s.onload = () => { s.remove(); ok(); }; s.onerror = () => { s.remove(); fail(new Error("missing " + src)); }; document.head.append(s); });
  const load = async (t) => {
    t.state = "loading";
    try {
      await script(`data/tiles/${t.id}/city.js`); const city = window.FULNEK_CITY;
      await script(`data/tiles/${t.id}/ortho.js`); const src = window.FULNEK_ORTHO;
      window.FULNEK_CITY = window.FULNEK_ORTHO = null; // let the big strings go
      const img = new Image(); img.src = src; await img.decode();
      const photo = await createImageBitmap(img, { imageOrientation: "flipY" }); // decoded and flipped off the main thread: the GPU upload is then a plain copy
      if (t.state !== "loading") return; // dropped while downloading
      t.state = "building"; t.gen = world.addTile(t.id, city, img, photo);
    } catch (e) { console.warn(e.message); t.state = "failed"; }
  };
  const update = (pos) => {
    // keep building the current tile within the frame's budget
    const t0 = performance.now();
    for (const t of tiles) if (t.state === "building") {
      while (performance.now() - t0 < BUDGET) if (t.gen.next().done) { t.state = "in"; t.gen = null; break; }
      break; // one tile at a time
    }
    if (t0 < checkAt) return; checkAt = t0 + 500; // re-plan twice a second (real time: slow frames mustn't delay it)
    for (const t of tiles) if (t.state !== "out" && t.state !== "loading" && gap(t.b, pos.x, pos.z) > KEEP) { world.removeTile(t.id); t.state = "out"; t.gen = null; }
    if (loading) return;
    const next = tiles.filter((t) => t.state === "out" && gap(t.b, pos.x, pos.z) < LOAD).sort((a, b) => gap(a.b, pos.x, pos.z) - gap(b.b, pos.x, pos.z))[0];
    if (next && !tiles.some((t) => t.state === "building")) loading = load(next).finally(() => (loading = null));
  };
  // the playable area: every listed tile
  const extent = tiles.reduce((e, t) => [Math.min(e[0], t.b[0]), Math.min(e[1], t.b[1]), Math.max(e[2], t.b[2]), Math.max(e[3], t.b[3])], [...world.homeBounds]);
  return { update, extent, tiles, busy: () => !!loading || tiles.some((t) => t.state === "building") };
}
