// Headless smoke test: boots dist/index.html from file://, fails on any page error, saves screenshots of a few poses.
// node test.mjs <outdir> [poses.json]
import { chromium } from "playwright";
import { mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const out = process.argv[2] || "shots";
mkdirSync(out, { recursive: true });
const poses = process.argv[3] ? JSON.parse(readFileSync(process.argv[3], "utf8")) : { start: null };
const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
const errors = [];
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
page.on("console", (m) => { if (m.type() === "error" || m.type() === "warning") errors.push(m.type() + ": " + m.text()); });
const t0 = Date.now();
await page.goto("file://" + resolve("dist/index.html"));
await page.waitForFunction(() => document.body.classList.contains("ready") || document.getElementById("status").classList.contains("error"), null, { timeout: 180000 });
console.log("ready in", Date.now() - t0, "ms; status:", await page.textContent("#status"));
for (const [name, p] of Object.entries(poses)) {
  // optional 7th element sets the clock and weather instantly: {hour, w, cloud, rain, wet}
  if (p) await page.evaluate((p) => { document.getElementById("start").hidden = true; window.__fulnek.pose(...p.slice(0, 6)); if (p[6]) Object.assign(window.__fulnek.world.env.st, p[6], { timer: 1e9 }); }, p);
  await page.waitForTimeout(p ? 2500 : 1500);
  await page.screenshot({ path: `${out}/${name}.png`, timeout: 180000 }); console.log(name, await page.textContent("#fps"));
}
console.log(JSON.stringify(await page.evaluate(() => window.__fulnek && window.__fulnek.state())));
console.log(errors.length ? errors.join("\n") : "no console errors");
await browser.close();
process.exit(errors.some((e) => e.startsWith("pageerror")) ? 1 : 0);
