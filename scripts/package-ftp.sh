#!/usr/bin/env bash
# Builds a self-contained bundle for a normal server / cPanel Node.js app,
# uploaded over FTP (FileZilla). Output: jedyan-server.zip
set -euo pipefail
cd "$(dirname "$0")/.."

rm -rf .next dist-ftp jedyan-server.zip
BUILD_STANDALONE=1 npm run build

mkdir -p dist-ftp
cp -r .next/standalone/. dist-ftp/
mkdir -p dist-ftp/.next
cp -r .next/static dist-ftp/.next/static
[ -d public ] && cp -r public dist-ftp/public

# image optimisation is off (images.unoptimized) — sharp and its binaries are dead weight
rm -rf dist-ftp/node_modules/@img dist-ftp/node_modules/sharp dist-ftp/node_modules/typescript

# the SQLite driver is loaded dynamically, so Next's tracer does not copy it
mkdir -p dist-ftp/node_modules/better-sqlite3
cp -r node_modules/better-sqlite3/lib node_modules/better-sqlite3/package.json dist-ftp/node_modules/better-sqlite3/
cp -r node_modules/better-sqlite3/prebuilds dist-ftp/node_modules/better-sqlite3/prebuilds
rm -f dist-ftp/node_modules/better-sqlite3/prebuilds/darwin-*.node dist-ftp/node_modules/better-sqlite3/prebuilds/win32-*.node

mkdir -p dist-ftp/data
cd dist-ftp && zip -qry ../jedyan-server.zip . && cd ..
echo "jedyan-server.zip  ->  $(du -h jedyan-server.zip | cut -f1)"
