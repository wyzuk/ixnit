#!/usr/bin/env bash
# ==============================================================================
# find-large-files.sh
# Finds and displays the top 10 largest files in the specified directory.
# Defaults to current directory if none provided.
# ==============================================================================

TARGET_DIR="${1:-.}"

echo "🔍 Searching for the top 10 largest files in: $TARGET_DIR"
echo "--------------------------------------------------------"

# Find files, output human-readable sizes, sort by size descending, pick top 10
find "$TARGET_DIR" -type f -exec du -h {} + 2>/dev/null | sort -rh | head -n 10

echo "--------------------------------------------------------"
echo "Done."
