#!/usr/bin/env bash
# Quick script to create a note file
# Usage: ./scripts/new-note.sh git/my-new-note.md

NOTE_FILE="notes/$1"

if [ -z "$1" ]; then
  echo "Usage: $0 <category>/<name.md>"
  exit 1
fi

mkdir -p "$(dirname "$NOTE_FILE")"

if [ ! -f "$NOTE_FILE" ]; then
  echo "# $(basename "$1" .md)" > "$NOTE_FILE"
  echo "" >> "$NOTE_FILE"
  echo "Notes go here..." >> "$NOTE_FILE"
  echo "Created $NOTE_FILE"
else
  echo "File already exists: $NOTE_FILE"
fi
