#!/bin/bash

# 1) Run the local webserver - see readme.
# npm prune && npm install && npm start

# 2) Curl the rendered page into a file.
curl http://localhost:7001 > ./docs/index.html

# 3) Copy static assets into the target directory.
cp -pr ./public/* ./docs/

# 4) Commit and push, for convenience.
git add .
git commit -m "regen.sh"
git push
