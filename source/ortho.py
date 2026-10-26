"""Crop the four ČÚZK ortho tiles to the game bbox and stitch them into one north-up JPEG.
The MapServer stretched each requested extent to square degree pixels, so we crop by the true extents.
Usage: python3 -I ortho.py <fulnek-data.bin> <out.jpg>
"""
import io, json, struct, sys
from PIL import Image

BB = {"W": 17.885, "E": 17.922, "S": 49.703, "N": 49.722}
TRUE = {  # extents reported by the server (f=json) for the requests in the bundle
    "nw": (17.885, 49.709927661169424, 17.9035, 49.72457233883059), "ne": (17.9035, 49.709927661169424, 17.922, 49.72457233883059),
    "sw": (17.885, 49.70042766116942, 17.9035, 49.71507233883059), "se": (17.9035, 49.70042766116942, 17.922, 49.71507233883059),
}
raw = open(sys.argv[1], "rb").read()
_, hlen = struct.unpack_from("<II", raw, 0)
files = {f["name"]: f for f in json.loads(raw[8:8 + hlen])["files"]}
mid = (BB["S"] + BB["N"]) / 2
out = None
for name, (w, s, e, n) in TRUE.items():
    f = files[f"ortho_{name}.jpg"]
    img = Image.open(io.BytesIO(raw[8 + hlen + f["offset"]: 8 + hlen + f["offset"] + f["length"]]))
    W, H = img.size
    lat_top, lat_bot = (BB["N"], mid) if name[0] == "n" else (mid, BB["S"])
    r0, r1 = (n - lat_top) / (n - s) * H, (n - lat_bot) / (n - s) * H
    band = img.transform((W, round(r1 - r0)), Image.Transform.EXTENT, (0, r0, W, r1), Image.Resampling.BICUBIC)
    if out is None:
        out = Image.new("RGB", (2 * W, 2 * band.height))
    out.paste(band, (0 if name[1] == "w" else W, 0 if name[0] == "n" else band.height))
out.save(sys.argv[2], quality=86, optimize=True)
# 2 m/px copy for the bake (vegetation and colour lookups); raw RGB, row 0 = north
small = out.resize((1334, 1057), Image.Resampling.BOX)
open(sys.argv[2].rsplit(".", 1)[0] + "_small.rgb", "wb").write(small.tobytes())
print(out.size, small.size)
