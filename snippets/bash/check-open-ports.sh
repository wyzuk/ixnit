#!/usr/bin/env bash
# check-open-ports.sh
# Prints active TCP listening ports and the process holding them.

echo "Active TCP Listening Ports:"
echo "--------------------------------------------------------"

if command -v ss &>/dev/null; then
  ss -tulpn | grep LISTEN
elif command -v netstat &>/dev/null; then
  netstat -tulpn | grep LISTEN
elif command -v lsof &>/dev/null; then
  lsof -iTCP -sTCP:LISTEN -P -n
else
  echo "Error: Neither 'ss', 'netstat', nor 'lsof' found on this system."
  exit 1
fi
