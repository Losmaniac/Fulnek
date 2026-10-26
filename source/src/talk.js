// Talking to townsfolk: a greeting for the hour and the weather, directions to anything (with a waypoint),
// small talk about the town, and favours — buy something at a real shop and bring it to their real front door.
import { GOODS } from "./errands.js";

const DIR_CZ = ["na sever", "na severovýchod", "na východ", "na jihovýchod", "na jih", "na jihozápad", "na západ", "na severozápad"];
const DIR_EN = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"];
const WEATHER = {
  clear: ["Dneska je ale krásně.", "Lovely day today."], cloudy: ["Trochu se zatahuje.", "It's clouding over a bit."],
  overcast: ["Šedivo, ale aspoň neprší.", "Grey, but at least it's dry."], rain: ["Zase prší. Bez deštníku ani ránu.", "Raining again. Don't go out without an umbrella."],
  storm: ["Slyšel jste to hřmění? Radši bych šel domů.", "Hear that thunder? I'd rather head home."], fog: ["Ta mlha! Skoro nevidím na zámek.", "This fog! I can hardly see the castle."],
  snow: ["Sněží! Děti budou mít radost.", "It's snowing! The kids will love it."],
};
const CHAT = [
  ["Víte, že tady ve Fulneku působil Jan Amos Komenský? Má tu památník.", "Did you know Comenius worked here in Fulnek? There's a memorial to him."],
  ["Ze zámku je hezký výhled na celé město.", "There's a lovely view over the whole town from the castle."],
  ["Kostel Nejsvětější Trojice je jedna z dominant Fulneku.", "The Holy Trinity church is one of Fulnek's landmarks."],
  ["Kousek odsud vedla zemská hranice mezi Moravou a Slezskem.", "The old border between Moravia and Silesia ran close to here."],
  ["Na náměstí stojí sloup Nejsvětější Trojice se sochami světců.", "On the square stands the Holy Trinity column with its saints."],
  ["Ve Fulneku je i bývalý kapucínský klášter, zajděte se podívat.", "There's a former Capuchin monastery in Fulnek too, go and have a look."],
  ["V pátek jdu s kamarády na pivo.", "On Friday I'm off for a beer with friends."],
  ["Nákupy dělám na náměstí, mám to blízko.", "I do my shopping on the square, it's close by."],
];
const SEASON = [ // by month
  ["V zimě to tu klouže, dávejte pozor.", "It gets slippery in winter, watch your step."], ["Konečně jaro, všechno kvete.", "Spring at last, everything's in bloom."],
  ["V létě tu lidi večer sedí na lavičkách.", "On summer evenings people sit out on the benches."], ["Listí už žloutne, podzim je tady.", "The leaves are turning, autumn is here."],
];
const KIDS = [["Jdu za kamarády na hřiště!", "Off to the playground with my friends!"], ["Máte psa? Já bych chtěl štěně.", "Have you got a dog? I want a puppy."], ["Dneska jsme ve škole psali diktát.", "We had a dictation at school today."]];
const DOGS = ["Rex", "Bára", "Ben", "Aša", "Max", "Bobík"];
const pick = (a) => a[Math.floor(Math.random() * a.length)];
// "koupit ..." needs the accusative; the masculine and plural items read the same, the feminine ones change
const ACC = { Kofola: "kofolu", Káva: "kávu", Polévka: "polévku", Limonáda: "limonádu", Známka: "známku", Obálka: "obálku", Svíčka: "svíčku", Čepice: "čepici", Duše: "duši", "Barva 0,75 l": "barvu 0,75 l", Žárovka: "žárovku", Prodlužovačka: "prodlužovačku", "Zubní pasta": "zubní pastu", Růže: "růži", Kytice: "kytici", Stavebnice: "stavebnici", Utopenec: "utopence", Šunka: "šunku", Klobása: "klobásu" };
const acc = (s) => ACC[s] || s.charAt(0).toLowerCase() + s.slice(1);

export function createTalk({ city, world, errands, el, toast, setTarget, undiscovered }) {
  const people = world.people, env = world.env;
  let who = -1, menu = null, asked = new Set();
  const dir = (fx, fz, tx, tz) => { const b = Math.atan2(tx - fx, -(tz - fz)); return Math.round(((b / (Math.PI / 4)) % 8 + 8)) % 8; };
  const streetOf = (x, z) => { let best = 60, name = ""; for (const r of city.roads) if (r.n && r.k !== "stream") for (let k = 1; k < r.p.length; k++) { const [ax, az] = r.p[k - 1], [bx, bz] = r.p[k], vx = bx - ax, vz = bz - az, L = vx * vx + vz * vz || 1, t = Math.max(0, Math.min(1, ((x - ax) * vx + (z - az) * vz) / L)), d = Math.hypot(x - ax - t * vx, z - az - t * vz); if (d < best) { best = d; name = r.n; } } return name; };

  const render = (title, say, opts) => {
    el.innerHTML = "";
    const h = document.createElement("h2"); h.textContent = title;
    const s = document.createElement("p"); s.className = "say"; s.textContent = `„${say[0]}“`;
    const e = document.createElement("p"); e.className = "en"; e.textContent = say[1];
    el.append(h, s, e);
    menu = opts;
    opts.forEach(([label, fn], i) => {
      const b = document.createElement("button"); b.type = "button";
      const k = document.createElement("kbd"), nm = document.createElement("span");
      k.textContent = i + 1; nm.textContent = label; b.append(k, nm, document.createElement("span"));
      b.addEventListener("click", fn); el.append(b);
    });
    const f = document.createElement("p"); f.className = "foot"; f.textContent = "1–4 choose · E or Esc to leave"; el.append(f);
    el.hidden = false;
  };
  const person = () => people.person(who);
  const greet = () => {
    const p = person(), h = env.st.hour, w = env.weather();
    const hi = p.kid ? "Ahoj!" : h < 9 ? "Dobré ráno!" : h < 18 ? "Dobrý den!" : "Dobrý večer!", hiEn = p.kid ? "Hi!" : h < 9 ? "Good morning!" : h < 18 ? "Good afternoon!" : "Good evening!";
    const rem = h >= 22 || h < 5 ? ["Už je pozdě, jdu domů.", "It's late, I'm heading home."] : WEATHER[w] || WEATHER.clear;
    return [`${hi} ${rem[0]}`, `${hiEn} ${rem[1]}`];
  };
  const main = (say) => render(person().name, say || greet(), [["Ask the way", ways], ["Chat", chat], ["Need a hand?", favour], ["Goodbye", bye]]);
  const chat = () => {
    const p = person(), m = env.st.month;
    const line = p.kid ? pick(KIDS) : p.dog && Math.random() < 0.4 ? [`To je ${DOGS[who % DOGS.length]}. Nekouše, nebojte.`, `This is ${DOGS[who % DOGS.length]}. Doesn't bite, don't worry.`] : Math.random() < 0.25 ? SEASON[[0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 0][m]] : pick(CHAT);
    main(line);
  };
  const ways = () => {
    const p = person(), opts = [];
    for (const t of errands.tasks()) {
      if (t.done || opts.length >= 3) continue;
      if (t.type === "deliver") opts.push(t.got ? [t.addr, t.x, t.z] : [t.shop, t.sx, t.sz]);
      else if (t.type === "buy" && t.x != null) opts.push([t.shop, t.x, t.z]);
      else if (t.type === "visit") opts.push([t.place, t.x, t.z]);
    }
    const u = undiscovered(p.cx, p.cz); if (u) opts.push([`Something worth seeing (${u.n})`, u.x, u.z, u.n]);
    if (!opts.length) { main(["Kam potřebujete? Tady na náměstí je všechno blízko.", "Where to? Everything's close to the square here."]); return; }
    render(p.name, ["Kam to bude?", "Where are you headed?"], opts.slice(0, 3).map(([label, x, z, real]) => [label, () => answerWay(real || label, x, z)]).concat([["Never mind", () => main()]]));
  };
  const answerWay = (name, x, z) => {
    const p = person(), d = Math.max(50, Math.round(Math.hypot(x - p.cx, z - p.cz) / 50) * 50), k = dir(p.cx, p.cz, x, z), st = streetOf(x, z);
    setTarget(x, z, name);
    const fmt = d.toLocaleString("cs-CZ");
    main(d <= 60 ? [`${name}? To je hned tady!`, `${name}? It's right here!`] : [`${name}? Jděte ${DIR_CZ[k]}, je to asi ${fmt} metrů${st ? `, ulice ${st}` : ""}.`, `${name}? Head ${DIR_EN[k]}, about ${fmt} m${st ? `, on ${st}` : ""}. (Marked on your map.)`]);
  };
  const favour = () => {
    const p = person(), active = errands.tasks().filter((t) => t.type === "deliver" && !t.done).length;
    if (p.kid) { main(["Já nic nepotřebuju, děkuju!", "I don't need anything, thanks!"]); return; }
    if (asked.has(who)) { main(["Děkuju, zatím nic nepotřebuju.", "Thanks, nothing for now."]); return; }
    if (active >= 3) { main(["Vidím, že máte plné ruce. Někdy jindy!", "I can see your hands are full. Another time!"]); return; }
    const shops = errands.shops.filter((s) => Math.hypot(s.x - p.cx, s.z - p.cz) < 900), doors = (city.doors || []).filter((d) => Math.hypot(d[0] - p.cx, d[1] - p.cz) < 450);
    if (!shops.length || !doors.length) { main(["Ani ne, ale děkuju.", "Not really, but thank you."]); return; }
    const s = pick(shops), it = pick(GOODS[s.k].items), d = pick(doors), addr = `${d[5]} ${d[3]}`, pay = it[1] + 40 + Math.floor(Math.random() * 9) * 10;
    asked.add(who);
    errands.add({ type: "deliver", item: it[0], shop: s.n, sx: s.x, sz: s.z, addr, x: d[0], z: d[1], pay, from: p.name, done: false, got: false });
    setTarget(s.x, s.z, s.n);
    main([`Mohl byste mi prosím koupit ${acc(it[0])} v obchodě ${s.n}? Bydlím na adrese ${addr}. Peníze vám vrátím a něco přidám.`, `Could you buy me ${it[0]} at ${s.n}? I live at ${addr}. I'll pay you back with a bit extra (${errands.kc(pay)}).`]);
    toast("New favour", `${it[0]} from ${s.n} to ${addr}`);
  };
  const bye = () => { const p = person(); toast(p.name, p.kid ? "Ahoj!" : "Na shledanou!"); close(); };
  const close = () => { if (who >= 0) people.hold(who, null); who = -1; menu = null; el.hidden = true; };

  return {
    isOpen: () => who >= 0,
    nearName: (pos) => { const i = people.nearest(pos.x, pos.z, 2.6); return i >= 0 ? people.person(i).name : ""; },
    start: (pos) => { const i = people.nearest(pos.x, pos.z, 2.6); if (i < 0) return false; who = i; people.hold(i, [pos.x, pos.z]); main(); return true; },
    key: (code) => {
      if (who < 0) return false;
      if (code === "KeyE" || code === "Escape") { close(); return true; }
      const n = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3 }[code];
      if (n != null && menu && menu[n]) { menu[n][1](); return true; }
      return false;
    },
    update: (pos) => { if (who >= 0 && Math.hypot(person().cx - pos.x, person().cz - pos.z) > 5) close(); },
    close,
  };
}
