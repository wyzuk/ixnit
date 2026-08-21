#!/usr/bin/env bash
# Quick tar backup of this repo

DEST="/tmp/ixnit-backup-$(date +%Y%m%d).tar.gz"
tar --exclude='.git' --exclude='node_modules' -czf "$DEST" .
echo "Saved backup to $DEST"
