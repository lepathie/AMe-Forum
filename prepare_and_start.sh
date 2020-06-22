#!/bin/sh
echo "[AMe-Forum] Resetting project"
meteor npm run clear
echo "[Git] Pulling master"
git checkout master
git pull
echo "[AMe-Forum] Installing dependencies..."
meteor npm i
echo "[AMe-Forum] Launching project"
meteor
