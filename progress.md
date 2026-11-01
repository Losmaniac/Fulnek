Original prompt: “I want you to make it like a gta. the bloody ine with the weapons and cops and everything”; follow-up: remove the annoying tone while sound is on, make police less likely to catch the player, and add more weapons, blood, helicopter, jet, and chaotic gameplay.

- Removed automatic bird whistles and the hourly church-bell melody; retained wind, rain, engines, footsteps, and action audio.
- Replaced the single pistol with five selectable weapons, ammo pools, stylised hit particles, rocket blasts, and a blast sound.
- Tuned police spawns, pursuit speed, escape distance, and arrest timing to make capture less immediate; added high-wanted police helicopter and jet flybys.
- Added drivable flight modes with visible helicopter/jet models, third-person view, separate speeds, and controls for switching aircraft.
- Added held-mouse automatic fire and one-time empty-magazine prompts.
- Updated the start-screen controls and README. The esbuild bundle completed successfully and the root HTML was synchronized. No gameplay tests were run per developer instruction.

Collisions (2026-10-25):
- Bullets and rockets stop at building walls and parked cars (plaster dust where they strike); explosions no longer reach people or officers behind cover.
- Moving traffic is a solid capsule for the walker, the player's car and police officers.
- Traffic queues behind the vehicle ahead (oncoming pairs take turns; a car stuck 8 s squeezes through so the town never gridlocks).
- The player's car knocks adults aside at speed (blood, +1 wanted), stops against slow-walking people and children, and runs down officers (+2 wanted).
- Test: cd source && node collidetest.mjs (after a build); uses Windows Edge when Playwright's own browser isn't installed.

Emergency services (2026-10-26), src/services.js:
- Police car at Policie ČR Fulnek; fire engine and ambulance at SDH Fulnek (ambulance spot is a game placement, no base in the data). E to drive, each with its own size, speed and camera.
- L: blue lights (flashing roof bar + blue light at night) and a wailing siren; traffic within ~55 m ahead moves to the kerb and stops, then drives on.
- On duty the dispatcher (158/150/155) sends calls to real RÚIAN addresses: fleeing suspect car (stay close with lights on, then E to arrest) or noise complaint; house fire (flames, smoke, light; hold left click by the engine to spray); collapsed patient (E first aid, load, drive to base). Pay goes to the wallet; the phone shows the current call.
- Test: cd source && node servicestest.mjs [shotdir] (after a build).

Graphics (2026-10-26), src/post.js:
- Physically based materials for car paint and glass, roads (rain makes them smooth enough to mirror the sky), water and facade window panes; the sky dome is baked into a reflection map every 2 s (env.js glossy(): diffuse stays with the hemisphere light, only reflections come from the map).
- Sun shadows are now cascaded (three/addons CSM): medium 2 cascades over 300 m, high 3 over 700 m. The old single shadow map never reached the ground (checked on an RTX 3050: toggling it changed nothing). CSM is chained onto the town's shader patches and undone when the quality changes.
- High: GTAO ambient occlusion (half resolution, leaves/glass/sprites excluded), bloom (only brighter-than-white: lamps, lit windows, blue lights), SMAA.
- .claude/launch.json serves source/dist on http://localhost:8123 for checking in a real-GPU browser.
- Checked on an RTX 3050 (2026-10-26): day, rain and night on medium and high at 60 fps. Daylight rebalanced (sun ×1.4, sky light ×0.65 by day) so shadows read as sunshine; medium and high share one 3-cascade setup (only reach and map size change), because rebuilding it recompiled every shader and stalled high at ~1 fps; bloom threshold 1.1 so sun glints on paint don't glow.

Interiors and freeze fix (2026-11-01):
- First-time freezes (weapon select 6.6 s, first shot 3.9 s, first police 2.7 s in headless timing) came from shader recompiles: lights hidden inside objects (weapon muzzle lights, the helicopter searchlight) joined the scene later and recompiled every material. Now one shared muzzle light and one searchlight live in the scene from the start; post.js precompiles everything (hidden objects too) behind the start screen and wraps new objects into the shadow setup the moment they're added; auto-quality uses the median frame time so a compile stall can't trigger a full recompile.
- src/interior.js: E at any building's wall (or RÚIAN door) enters its ground floor, built from the real footprint: rooms with doorways, windows lit by the sky, furniture by use (home, civic, hall, garage), seeded per building. interiortest.mjs enters all 1,476 buildings and checks start, exit, collisions and determinism.
