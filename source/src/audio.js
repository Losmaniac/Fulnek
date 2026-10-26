// Quiet ambient sound, synthesised with WebAudio: wind, rain, engine hum, and footsteps.
// Starts on the first click (browsers require it).
export function createAudio() {
  let ctx = null, master, wind, windF, rain, hum, humF, oscs = [], muted = false;
  let stepT = 0;

  const start = () => {
    if (ctx) { if (ctx.state === "suspended") ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = muted ? 0 : 0.8; master.connect(ctx.destination);
    const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const noise = () => { const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true; s.start(); return s; };
    // wind: band-passed noise whose level and pitch follow the gusts
    windF = ctx.createBiquadFilter(); windF.type = "bandpass"; windF.frequency.value = 400; windF.Q.value = 0.6;
    wind = ctx.createGain(); wind.gain.value = 0;
    noise().connect(windF).connect(wind).connect(master);
    // rain: bright hiss
    const rf = ctx.createBiquadFilter(); rf.type = "highpass"; rf.frequency.value = 1400;
    rain = ctx.createGain(); rain.gain.value = 0;
    noise().connect(rf).connect(rain).connect(master);
    // engines: two detuned saws through a low-pass, louder as the nearest car gets closer
    humF = ctx.createBiquadFilter(); humF.type = "lowpass"; humF.frequency.value = 320;
    hum = ctx.createGain(); hum.gain.value = 0; humF.connect(hum).connect(master);
    oscs = [55, 83].map((f) => { const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.value = f; o.connect(humF); o.start(); return o; });
  };

  const env = (g, t, peak, attack, decay) => { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay); };
  const step = (soft) => {
    const t = ctx.currentTime, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = ctx.createBuffer(1, ctx.sampleRate * 0.08, ctx.sampleRate);
    const d = s.buffer.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    f.type = "bandpass"; f.frequency.value = soft ? 700 : 1500 + Math.random() * 300; f.Q.value = 1.2;
    env(g, t, soft ? 0.12 : 0.18, 0.005, 0.07); s.connect(f).connect(g).connect(master); s.start(t);
  };

  // s: { dt, wind, rain, day, carDist, moving, running, hour }
  const update = (s) => {
    if (!ctx) return;
    const t = ctx.currentTime;
    wind.gain.setTargetAtTime(0.025 + s.wind * 0.11, t, 0.4); windF.frequency.setTargetAtTime(280 + s.wind * 520, t, 0.6);
    rain.gain.setTargetAtTime(s.rain * 0.22, t, 0.8);
    const k = s.drive != null ? 1 : Math.max(0, 1 - s.carDist / 70); // drive: 0..1 revs of the car you drive
    hum.gain.setTargetAtTime(s.drive != null ? 0.05 + s.drive * 0.05 : k * k * 0.07, t, 0.2);
    humF.frequency.setTargetAtTime(s.drive != null ? 320 + s.drive * 700 : 320, t, 0.2);
    oscs.forEach((o, i) => o.frequency.setTargetAtTime((i ? 83 : 55) * (s.drive != null ? 0.8 + s.drive * 1.6 : 1 + k * 0.25), t, 0.3));
    if (s.moving && (stepT -= s.dt) < 0) { stepT = s.running ? 0.32 : 0.52; step(s.rain > 0.3); }
  };
  const horn = () => { // a short two-tone car horn
    if (!ctx) return;
    const t = ctx.currentTime;
    for (const f of [392, 494]) { const o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter(); o.type = "square"; o.frequency.value = f; lp.type = "lowpass"; lp.frequency.value = 1800; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 0.02); g.gain.setValueAtTime(0.05, t + 0.35); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45); o.connect(lp).connect(g).connect(master); o.start(t); o.stop(t + 0.5); }
  };
  const thud = () => { // a dull knock when the car bumps into something
    if (!ctx) return;
    const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.2); env(g, t, 0.25, 0.005, 0.25); o.connect(g).connect(master); o.start(t); o.stop(t + 0.3);
  };
  const gunshot = () => {
    if (!ctx) return;
    const t = ctx.currentTime, len = 0.14, b = ctx.createBuffer(1, Math.floor(ctx.sampleRate * len), ctx.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = b; f.type = "lowpass"; f.frequency.value = 1500; env(g, t, 0.3, 0.002, len); s.connect(f).connect(g).connect(master); s.start(t); s.stop(t + len);
  };
  const explosion = () => {
    if (!ctx) return;
    const t = ctx.currentTime, len = 0.75, b = ctx.createBuffer(1, Math.floor(ctx.sampleRate * len), ctx.sampleRate), d = b.getChannelData(0);
    let v = 0; for (let i = 0; i < d.length; i++) { v = v * 0.94 + (Math.random() * 2 - 1) * 0.24; d[i] = v * (1 - i / d.length); }
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(); s.buffer = b; f.type = "lowpass"; f.frequency.value = 420;
    env(g, t, 0.65, 0.008, len); s.connect(f).connect(g).connect(master); s.start(t); s.stop(t + len);
  };
  const thunder = (p) => { // a long low rumble: filtered noise swelling and fading
    if (!ctx) return;
    const t = ctx.currentTime, len = 4, b = ctx.createBuffer(1, ctx.sampleRate * len, ctx.sampleRate), d = b.getChannelData(0);
    let v = 0; for (let i = 0; i < d.length; i++) { v = v * 0.985 + (Math.random() * 2 - 1) * 0.15; d[i] = v; }
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = b; f.type = "lowpass"; f.frequency.value = 160 + p * 220;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5 * p, t + 0.08 + (1 - p) * 0.5); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
    s.connect(f).connect(g).connect(master); s.start(t);
  };
  const bark = () => { // two quick woofs
    if (!ctx) return;
    for (const d of [0, 0.22]) {
      const t = ctx.currentTime + d, o = ctx.createOscillator(), g = ctx.createGain(), bp = ctx.createBiquadFilter();
      o.type = "sawtooth"; o.frequency.setValueAtTime(420, t); o.frequency.exponentialRampToValueAtTime(240, t + 0.12);
      bp.type = "bandpass"; bp.frequency.value = 700; bp.Q.value = 2; env(g, t, 0.09, 0.01, 0.13); o.connect(bp).connect(g).connect(master); o.start(t); o.stop(t + 0.2);
    }
  };
  let siren = null;
  const setSiren = (on) => { // electronic wail: one tone sweeping up and down, only while you drive with it switched on
    if (!ctx || !!siren === on) return;
    if (!on) { const s = siren; siren = null; s.g.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.08); setTimeout(() => s.o.forEach((o) => o.stop()), 500); return; }
    const o = ctx.createOscillator(), lfo = ctx.createOscillator(), depth = ctx.createGain(), lp = ctx.createBiquadFilter(), g = ctx.createGain();
    o.type = "sawtooth"; o.frequency.value = 900; lfo.type = "triangle"; lfo.frequency.value = 0.28; depth.gain.value = 380; lfo.connect(depth).connect(o.frequency);
    lp.type = "lowpass"; lp.frequency.value = 2200; g.gain.value = 0.0001; g.gain.setTargetAtTime(0.03, ctx.currentTime, 0.1);
    o.connect(lp).connect(g).connect(master); o.start(); lfo.start(); siren = { o: [o, lfo], g };
  };
  const toggle = () => { muted = !muted; if (master) master.gain.value = muted ? 0 : 0.8; return muted; };
  return { start, update, toggle, siren: setSiren, horn, thud, gunshot, explosion, thunder, bark, muted: () => muted };
}
