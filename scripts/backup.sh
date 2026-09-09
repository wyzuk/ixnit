#!/usr/bin/env bash
# backup.sh
# Archives the Ixnit knowledge base to a timestamped .tar.gz bundle.
# Usage: ./scripts/backup.sh [destination-dir]

set -e

BACKUP_DEST="${1:-$HOME/backups/ixnit}"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ARCHIVE_NAME="ixnit_backup_${TIMESTAMP}.tar.gz"

mkdir -p "$BACKUP_DEST"

echo "📦 Creating archive of Ixnit..."
tar --exclude='.git' \
    --exclude='node_modules' \
    --exclude='dist' \
    -czf "${BACKUP_DEST}/${ARCHIVE_NAME}" .

echo "✅ Backup successfully created at:"
echo "   ${BACKUP_DEST}/${ARCHIVE_NAME}"
