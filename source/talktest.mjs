// talk test: walk up to a townsperson, chat, ask the way, ask for a favour; open the phone; trigger the day summary
import { chromium } from "playwright";
import { resolve } from "node:path";
const out = process.argv[2] || "/tmp/claude-0/talk";
const browser = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
const page = await browser.newPage({ viewport: { width: 900, height: 600 } });
page.on("pageerror", (e) => console.log("pageerror", e.message));
await page.goto("file://" + resolve("dist/index.html"));
await page.waitForFunction(() => document.body.classList.contains("ready"), null, { timeout: 180000 });
const shot = async (n) => { await page.waitForTimeout(2000); await page.screenshot({ path: `${out}${n}.png`, timeout: 180000 }); };
console.log(await page.evaluate(() => {
  document.getElementById("start").hidden = true;
  const f = window.__fulnek, P = f.world.people; Object.assign(f.world.env.st, { hour: 10.5, timer: 1e9 });
  let i = -1; for (let k = 0; k < P.count; k++) { const p = P.person(k); if (p.vis && p.idle && !p.sit) { i = k; break; } }
  const p = P.person(i); f.teleport(p.cx + 1.6, p.cz); f.pose(p.cx + 1.6, p.cz, Math.PI / 2, -0.1);
  const ok = f.press("KeyE"), say1 = document.querySelector("#talk .say").textContent;
  f.press("Digit2"); const say2 = document.querySelector("#talk .say").textContent;
  f.press("Digit3"); const say3 = document.querySelector("#talk .say").textContent;
  return JSON.stringify({ i, name: p.name, ok, say1, say2, say3, tasks: f.errands.tasks().map((t) => t.type + ":" + (t.item || t.place)) }, null, 1);
}));
await shot(1);
console.log(await page.evaluate(() => { const f = window.__fulnek; f.press("Digit1"); const opts = [...document.querySelectorAll("#talk button span:nth-child(2)")].map((e) => e.textContent); f.press("Digit1"); return JSON.stringify({ opts, say: document.querySelector("#talk .say").textContent, target: document.getElementById("target").textContent }); }));
await shot(2);
console.log(await page.evaluate(() => { const f = window.__fulnek; f.press("KeyE"); f.press("KeyP"); return document.getElementById("phone").innerText.slice(0, 600); }));
await shot(3);
console.log(await page.evaluate(() => { const f = window.__fulnek; f.press("KeyP"); f.world.env.st.hour = 23.99; return "ok"; }));
await page.waitForTimeout(6000);
console.log(await page.evaluate(() => document.getElementById("summary").hidden + " " + document.getElementById("summary").innerText.slice(0, 300)));
await shot(4);
await browser.close();
