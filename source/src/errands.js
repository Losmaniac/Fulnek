// A small day-to-day game loop: a wallet, the real shops in town and three errands every morning.
// The shops are real (name and address); what they sell here is a typical basket for the kind of shop at game prices
// and game opening hours — the panel says so, so nobody takes it for the shop's real offer.
const GOODS = {
  grocery: { open: [7, 19], items: [["Rohlík", 4], ["Chléb", 45], ["Mléko", 25], ["Máslo", 55]] },
  supermarket: { open: [7, 21], items: [["Banány 1 kg", 35], ["Káva", 160], ["Rohlíky 10 ks", 40], ["Jablka 1 kg", 40]] },
  pharmacy: { open: [8, 17], items: [["Náplasti", 60], ["Vitamín C", 120], ["Pastilky", 90]] },
  optician: { open: [9, 17], items: [["Čisticí sprej", 90], ["Pouzdro na brýle", 150]] },
  florist: { open: [8, 17], items: [["Růže", 50], ["Kytice", 250], ["Květináč", 120]] },
  newsagent: { open: [6, 17], items: [["Noviny", 30], ["Pohled", 15], ["Časopis", 69]] },
  chemist: { open: [8, 19], items: [["Mýdlo", 35], ["Zubní pasta", 50], ["Šampon", 90]] },
  "pet shop": { open: [9, 17], items: [["Granule 1 kg", 150], ["Pamlsky", 45], ["Míček", 60]] },
  clothes: { open: [9, 18], items: [["Ponožky", 99], ["Tričko", 199], ["Čepice", 149]] },
  toys: { open: [9, 17], items: [["Pexeso", 99], ["Puzzle", 250], ["Stavebnice", 399]] },
  household: { open: [8, 17], items: [["Hrnek", 89], ["Utěrky", 59], ["Svíčka", 49]] },
  bikes: { open: [9, 17], items: [["Duše", 150], ["Zvonek", 120], ["Světlo", 290]] },
  hardware: { open: [7, 17], items: [["Šroubky", 30], ["Štětec", 45], ["Barva 0,75 l", 260]] },
  electrical: { open: [8, 16], items: [["Žárovka", 80], ["Baterie 4 ks", 99], ["Prodlužovačka", 220]] },
  "café": { open: [8, 19], items: [["Espresso", 45], ["Cappuccino", 59], ["Větrník", 45]] },
  restaurant: { open: [11, 22], items: [["Polévka", 49], ["Hlavní jídlo", 169], ["Limonáda", 45]] },
  "fast food": { open: [10, 22], items: [["Kebab", 129], ["Hranolky", 49], ["Ayran", 35]] },
  pub: { open: [10, 23], items: [["Pivo 0,5 l", 52], ["Kofola", 35], ["Utopenec", 65]] },
  "post office": { open: [8, 17], items: [["Známka", 26], ["Obálka", 5], ["Balík", 140]] },
};
export { GOODS };
const kc = (n) => `${n.toLocaleString("cs-CZ")} Kč`;
const fmtH = (h) => `${h}:00`;

export function createErrands({ city, toast, el, landmarks }) {
  const shops = city.places.filter((p) => GOODS[p.k]);
  const KEY = "fulnek3d.life.v1";
  let save = { money: 500, bag: [], day: -1, tasks: [], stats: { spent: 0, earned: 0, done: 0 } };
  try { Object.assign(save, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch { /* fresh start */ }
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(save)); } catch { /* not kept */ } };
  let near = null, open = false, rnd = Math.random;

  const newDay = (day) => {
    save.day = day;
    const pool = shops.slice().sort(() => rnd() - 0.5), tasks = [];
    for (const s of pool.slice(0, 2)) { const it = GOODS[s.k].items[Math.floor(rnd() * GOODS[s.k].items.length)]; tasks.push({ type: "buy", shop: s.n, item: it[0], x: s.x, z: s.z, done: false }); }
    const lm = landmarks[Math.floor(rnd() * landmarks.length)];
    if (lm) tasks.push({ type: "visit", place: lm.n, x: lm.x, z: lm.z, done: false });
    save.tasks = tasks.concat(save.tasks.filter((t) => t.type === "deliver" && !t.done)); persist(); // promised deliveries carry over
    toast("New day", "Your errands are in the list on the left");
  };
  const render = () => {
    const done = save.tasks.filter((t) => t.done).length;
    el.list.innerHTML = "";
    for (const t of save.tasks) {
      const li = document.createElement("li");
      li.textContent = t.type === "buy" ? `Buy ${t.item} at ${t.shop}` : t.type === "deliver" ? `${t.got ? "Bring" : "Buy"} ${t.item} ${t.got ? "to" : "at " + t.shop + " for"} ${t.from}, ${t.addr}` : `Visit ${t.place}`;
      if (t.done) li.className = "done";
      el.list.append(li);
    }
    el.money.textContent = `${kc(save.money)} · ${done}/${save.tasks.length} done`;
    if (near && !open) { el.hint.hidden = false; el.hint.textContent = `E · enter ${near.n}`; } else el.hint.hidden = true;
  };
  const complete = () => {
    const daily = save.tasks.filter((t) => t.type !== "deliver");
    if (daily.length && daily.every((t) => t.done) && !save.paid) { save.money += 200; save.stats.earned += 200; save.paid = true; persist(); toast("Errands done", `+${kc(200)} pocket money · new list tomorrow`); }
  };
  const showShop = (hour) => {
    const g = GOODS[near.k], isOpen = hour >= g.open[0] && hour < g.open[1];
    el.shop.innerHTML = "";
    const h = document.createElement("h2"); h.textContent = near.n;
    const sub = document.createElement("p"); sub.textContent = `${near.k}${near.a ? " · " + near.a : ""} · open ${fmtH(g.open[0])}–${fmtH(g.open[1])}`;
    const note = document.createElement("p"); note.className = "foot"; note.textContent = "Typical goods, game prices and hours — not this shop's real offer.";
    el.shop.append(h, sub, note);
    if (!isOpen) { const c = document.createElement("p"); c.className = "closed"; c.textContent = "Zavřeno · closed right now"; el.shop.append(c); }
    else g.items.forEach(([name, price], i) => {
      const b = document.createElement("button"); b.type = "button"; b.dataset.i = i;
      const k = document.createElement("kbd"), nm = document.createElement("span"), pr = document.createElement("span");
      k.textContent = i + 1; nm.textContent = name; pr.textContent = kc(price);
      b.append(k, nm, pr); b.addEventListener("click", () => buy(i, hour)); el.shop.append(b);
    });
    const f = document.createElement("p"); f.className = "foot"; f.textContent = `Wallet ${kc(save.money)} · E or Esc to leave`; el.shop.append(f);
  };
  const buy = (i, hour) => {
    const g = GOODS[near.k], it = g.items[i];
    if (!it || hour < g.open[0] || hour >= g.open[1]) return;
    if (save.money < it[1]) { toast(near.n, "Not enough money"); return; }
    save.money -= it[1]; save.stats.spent += it[1]; save.bag.push(it[0]);
    const t = save.tasks.find((t) => !t.done && t.type === "buy" && t.shop === near.n && t.item === it[0]), dv = save.tasks.find((t) => !t.done && t.type === "deliver" && !t.got && t.shop === near.n && t.item === it[0]);
    if (t) { t.done = true; save.stats.done++; toast("Errand done", `${it[0]} from ${near.n}`); } else if (dv) { dv.got = true; toast(`For ${dv.from}`, `Now bring it to ${dv.addr}`); } else toast(near.n, `Bought ${it[0]} · ${kc(it[1])}`);
    persist(); complete(); showShop(hour);
  };

  // returns true when the key was used by the shop UI
  const key = (code, hour) => {
    if (open) {
      if (code === "KeyE" || code === "Escape") { open = false; el.shop.hidden = true; return true; }
      const n = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3 }[code];
      if (n != null) { buy(n, hour); return true; }
      return false;
    }
    if (code === "KeyE" && near) { open = true; el.shop.hidden = false; showShop(hour); return true; }
    return false;
  };
  const update = (pos, hour, day) => {
    if (save.day !== day && hour >= 6) { save.paid = false; newDay(day); }
    near = shops.find((s) => Math.hypot(pos.x - s.x, pos.z - s.z) < 7) || null;
    if (open && !near) { open = false; el.shop.hidden = true; }
    for (const t of save.tasks) if (!t.done && t.type === "visit" && Math.hypot(pos.x - t.x, pos.z - t.z) < 18) { t.done = true; save.stats.done++; toast("Errand done", `Visited ${t.place}`); persist(); complete(); }
    for (const t of save.tasks) if (!t.done && t.type === "deliver" && t.got && Math.hypot(pos.x - t.x, pos.z - t.z) < 4) { // at their front door
      const k = save.bag.indexOf(t.item); if (k >= 0) save.bag.splice(k, 1);
      t.done = true; save.money += t.pay; save.stats.earned += t.pay; save.stats.done++;
      toast(`${t.from} says thanks`, `+${kc(t.pay)} for the ${t.item}`); persist();
    }
    render();
  };
  return {
    update, key, isOpen: () => open, near: () => near, shops, kc,
    tasks: () => save.tasks, money: () => save.money, bag: () => save.bag, stats: () => save.stats,
    resetStats: () => { const s = save.stats; save.stats = { spent: 0, earned: 0, done: 0 }; persist(); return s; },
    add: (t) => { save.tasks.push(t); persist(); render(); },
    earn: (amount) => { save.money += amount; save.stats.earned += amount; save.stats.done++; persist(); render(); },
    fine: (amount) => { const paid = Math.min(save.money, Math.max(0, amount)); save.money -= paid; save.stats.spent += paid; persist(); render(); return paid; },
  };
}
