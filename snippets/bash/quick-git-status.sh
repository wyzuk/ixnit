#!/usr/bin/env bash
# ==============================================================================
# quick-git-status.sh
# Iterates through all subdirectories in the parent folder and prints git status.
# Super handy when I have 10 project repos and want to see what's uncommitted.
# ==============================================================================

PARENT_DIR="${1:-..}"

echo "Checking git repositories in $PARENT_DIR..."
echo "=========================================="

for dir in "$PARENT_DIR"/*/; do
  if [ -d "$dir/.git" ]; then
    repo_name=$(basename "$dir")
    cd "$dir" || continue

    branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")
    status=$(git status --porcelain 2>/dev/null)

    if [ -n "$status" ]; then
      echo "⚠️  [$repo_name] ($branch) has UNCOMMITTED changes:"
      git status -s
    else
      echo "✅ [$repo_name] ($branch) clean."
    fi
    echo ""
    cd - > /dev/null || exit
  fi
done
