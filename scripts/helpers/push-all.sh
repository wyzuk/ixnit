#!/usr/bin/env bash
# ==============================================================================
# push-all.sh
# Quick commit & push shortcut for daily note updates.
# ==============================================================================

set -e

MESSAGE="${1:-notes: update personal knowledge base $(date +'%Y-%m-%d')}"

echo "Staging changes..."
git add -A

echo "Committing with message: '$MESSAGE'..."
git commit -m "$MESSAGE" || { echo "Nothing to commit."; exit 0; }

echo "Pushing to origin..."
git push origin HEAD

echo "🚀 All synced!"
