#!/bin/sh
# copy the playable game + sources to the outputs folder for delivery to the user's Fulnek folder
set -e
cd "$(dirname "$0")"
O=/mnt/user-data/outputs/Fulnek
rm -rf $O && mkdir -p $O/data $O/source/src
cp dist/index.html dist/game.js README.txt $O/
cp dist/data/city.js dist/data/ortho.js $O/data/
cp bake.mjs ortho.py build.sh stage.sh test.mjs drive.mjs talktest.mjs index.html package.json package-lock.json $O/source/
cp raw/ruian.json.gz $O/
cp src/*.js $O/source/src/
cd $O && find . -type f | sort
