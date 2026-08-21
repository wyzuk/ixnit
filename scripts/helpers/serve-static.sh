#!/usr/bin/env bash
# ==============================================================================
# serve-static.sh
# Serves the Ixnit repository locally to preview HTML/CSS demos.
# ==============================================================================

PORT="${1:-8080}"

echo "Serving Ixnit at http://localhost:$PORT"
echo "Press Ctrl+C to stop."

if command -v python3 &>/dev/null; then
  python3 -m http.server "$PORT"
elif command -v python &>/dev/null; then
  python -m SimpleHTTPServer "$PORT"
elif command -v npx &>/dev/null; then
  npx serve . -p "$PORT"
else
  echo "Error: Python 3 or Node.js required."
  exit 1
fi
