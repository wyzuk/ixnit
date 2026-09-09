#!/usr/bin/env bash
# cleanup.sh
# Removes temporary files, editor backups, OS debris, and dangling test output.

set -e

echo "🧹 Cleaning up repository temporary files..."

# Remove OS artifacts
find . -type f \( -name ".DS_Store" -o -name "Thumbs.db" -o -name "desktop.ini" \) -delete 2>/dev/null || true

# Remove editor swap/backup files
find . -type f \( -name "*.swp" -o -name "*.swo" -o -name "*~" \) -delete 2>/dev/null || true

# Remove npm/node error logs
find . -type f -name "*debug.log*" -delete 2>/dev/null || true

# Remove scratch files if any
if [ -d "tmp" ]; then
  rm -rf tmp
  echo "Removed tmp/ directory."
fi

echo "✨ Repository is clean."
