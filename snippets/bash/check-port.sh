#!/usr/bin/env bash
# Quick port checker
# Usage: ./check-port.sh 3000

PORT="${1:-3000}"
echo "Checking port $PORT..."

if command -v lsof &>/dev/null; then
  lsof -i :"$PORT"
elif command -v ss &>/dev/null; then
  ss -tulpn | grep "$PORT"
else
  echo "Neither lsof nor ss found."
fi
