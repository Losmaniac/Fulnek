FULNEK 3D
=========
Play: double-click index.html (Chrome or Edge, desktop with keyboard and mouse). Works offline.

Controls on foot
  W A S D / arrows  walk           mouse  look            Shift  run      Space  jump
  F                 helicopter on/off     J / H  jet / helicopter while flying
                    Space / C  climb / descend while flying; jet is faster
  E                 enter a shop (1-4 buy) · talk to the person in front of you (1-4 answer)
                    · get into the parked car or onto the bike next to you
                    · walk into any building: face its wall (or front door) and press E; E at the door to leave.
                      Ground floors are built from the real footprint with rooms and random furniture by the
                      building's use (homes, offices and shops, halls, garages), the same each visit
  P                 phone: tasks (1-9 guides you there), forecast, places, today's stats
  M                 map: scroll to zoom (house numbers from 6x), drag to move, click to go there
  T                 +1 hour        Y  next weather        G  graphics quality (low/medium/high)
                    medium: sky reflections on paint, glass, wet roads and water; cascaded sun shadows
                    high: also ambient occlusion, glow (bloom) on lamps and lit windows, SMAA edge smoothing
  V                 sound on/off   Esc  pause
  1–5               choose pistol, shotgun, SMG, rifle or rocket launcher
  B                 next weapon     X  equip/holster     left click  fire     R  reload
                    Crime raises your wanted level; adults flee when hit. Police approach from farther away and
                    need to hold you close before an arrest. At high wanted levels, a police helicopter and jet arrive.

Driving and cycling
  W / S             throttle / brake, reverse     A / D  steer     Space  handbrake
  C                 chase or bonnet camera        H  horn          E  get out (stop first)
  mouse             look around (drifts back)
  Bikes stand outside Cyklo Košárek, the information centre, Penny and Hotel Amos.

Emergency services
  A police car stands outside the police station (Policie ČR, Obvodní oddělení Fulnek); a fire engine and an
  ambulance outside SDH Fulnek, the town's volunteer fire station. The ambulance's spot there is a game placement:
  the map data has no ambulance base in Fulnek. Get in with E and you're on duty; the radio sends calls to real
  addresses (RÚIAN) with a waypoint on the minimap. Getting into an ordinary car or bike ends the shift.
  L                 blue lights and siren: traffic ahead moves to the kerb and stops to let you through
  Police (158)      a fleeing car: stay within ~15 m with lights on until it pulls over, get out, E to arrest;
                    or a noise complaint: go to the address and get out
  Fire (150)        a house fire: park the engine nearby, get out and hold left click to spray at the flames
  Ambulance (155)   someone collapsed: E for first aid (stay 5 s), park the ambulance next to them, drive back to base
  Each call pays into your wallet; the phone (P) shows the current call.

The town lives through the day on your local clock (1 real second = 1 game minute):
sun and moon; weather that drifts between clear, cloudy, overcast, rain, thunderstorms
with lightning and thunder, morning fog and, in the cold months, snow that settles on
roads, roofs and cars; wind in the trees and grass; lit windows and street lamps at night;
traffic, buses, people walking (some with dogs), pigeons on the square, birds overhead,
and ambient weather and engine sound without repetitive whistles or bell tones. Trees follow the real season (autumn colours, bare in winter).

Life: each morning you get errands (buy something at a real shop, visit a landmark).
People you talk to greet you for the hour and the weather, give directions (marked on the
map), chat about the town and ask favours: buy something at a shop and bring it to their
front door at a real address. Midnight shows a summary of your day.
Progress and your wallet are kept in this browser.

What's real
  Streets and building footprints: OpenStreetMap. Terrain: ČÚZK DMR 5G. Building heights:
  ČÚZK DMP 1G surface model. Ground photo: ČÚZK orthophoto. Trees and bushes: where the
  surface model shows vegetation.
  Addresses, front doors and red house-number plates: every address point in the official
  register RÚIAN (ČÚZK), on the wall that faces its street. Floors, year built, use and
  construction from RÚIAN choose each building's windows (window size and rhythm, frames,
  arches, panel joints, balconies, which rooms are lit at night).
  Shops and businesses: 41 real ones with their registered address (firmy.cz listings,
  October 2026), placed on their building. What they sell in the game is a typical basket
  for that kind of shop at game prices and game opening hours, not the shop's real offer.

Rebuild (source folder, needs Node 18+ and Python 3 with Pillow):
  cd source && npm install && BUNDLE=../fulnek-data.bin sh build.sh
  It reads the raw downloads in fulnek-data.bin (and ruian.json.gz next to it, if present)
  and writes the playable game to source/dist/. FAST=1 sh build.sh rebuilds only the code.

Credits: Map data © OpenStreetMap contributors (ODbL). Terrain, surface model, orthophoto and
RÚIAN addresses © ČÚZK (CC BY 4.0). Business names and addresses: firmy.cz listings.
