#!/usr/bin/env bash
# Quick commit & push with today's date

MSG="${1:-notes sync $(date +'%Y-%m-%d')}"

git add .
git commit -m "$MSG"
git push
