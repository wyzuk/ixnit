#!/usr/bin/env bash
# simple-http-server.sh
# Starts a zero-dependency static HTTP server on the given port.
# Usage: ./simple-http-server.sh 8080

PORT="${1:-8000}"

echo "Starting static file server on http://localhost:$PORT ..."

if command -v python3 &>/dev/null; then
  python3 -m http.server "$PORT"
elif command -v python &>/dev/null; then
  python -m SimpleHTTPServer "$PORT"
elif command -v npx &>/dev/null; then
  npx serve -p "$PORT"
else
  echo "No python or npx found. Install Python 3 or Node.js."
  exit 1
fi
