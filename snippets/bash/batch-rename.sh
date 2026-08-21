#!/usr/bin/env bash
# ==============================================================================
# batch-rename.sh
# Safely renames all files matching an extension to a new extension.
# Usage: ./batch-rename.sh .jpeg .jpg
# ==============================================================================

set -e

OLD_EXT="$1"
NEW_EXT="$2"

if [ -z "$OLD_EXT" ] || [ -z "$NEW_EXT" ]; then
  echo "Usage: $0 <old-extension> <new-extension>"
  echo "Example: $0 .jpeg .jpg"
  exit 1
fi

count=0
for file in *"$OLD_EXT"; do
  # Check if file exists (guards against unmatched glob)
  if [ -f "$file" ]; then
    base="${file%$OLD_EXT}"
    mv "$file" "$base$NEW_EXT"
    echo "Renamed: $file -> $base$NEW_EXT"
    count=$((count + 1))
  fi
done

echo "Finished. Total files renamed: $count"
