#!/bin/sh
# full rebuild: raw bundle -> baked data -> game bundle (dist/ is what ships)
# FAST=1 skips the ortho crop and bake (only JS/HTML changed)
set -e
cd "$(dirname "$0")"
mkdir -p raw dist/data
[ -n "$FAST" ] || python3 -I ortho.py ${BUNDLE:-raw/fulnek-data.bin} raw/ortho.jpg
[ -n "$FAST" ] || node bake.mjs ${BUNDLE:-raw/fulnek-data.bin} raw/ortho.jpg dist/data
npx esbuild src/main.js --bundle --format=iife --minify --target=es2020 --outfile=dist/game.js --log-level=warning
cp index.html dist/index.html
# artifact page: same file without the document wrapper (the Artifact host adds its own)
python3 -I - <<'PY'
import re
s = open("index.html", encoding="utf-8").read()
for pat in [r"<!doctype html>\s*", r"<html[^>]*>\s*", r"<head>\s*", r'<meta charset="utf-8">\s*', r'<meta name="viewport"[^>]*>\s*', r"</head>\s*", r"<body>\s*", r"</body>\s*", r"</html>\s*"]:
    s = re.sub(pat, "", s, count=1, flags=re.I)
open("dist/artifact.html", "w", encoding="utf-8").write(s)
PY
