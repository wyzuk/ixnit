#!/usr/bin/env bash
# ==============================================================================
# new-note.sh
# Scaffolds a new markdown note with frontmatter and standard sections.
# Usage: ./scripts/helpers/new-note.sh javascript/event-bubbling
# ==============================================================================

set -e

NOTE_PATH="$1"

if [ -z "$NOTE_PATH" ]; then
  echo "Usage: $0 <category>/<note-slug>"
  echo "Example: $0 javascript/event-bubbling"
  exit 1
fi

TARGET_FILE="notes/${NOTE_PATH}.md"

if [ -f "$TARGET_FILE" ]; then
  echo "Error: File '$TARGET_FILE' already exists."
  exit 1
fi

mkdir -p "$(dirname "$TARGET_FILE")"

TITLE=$(basename "$NOTE_PATH" | tr '-' ' ' | awk '{for(i=1;i<=NF;i++)sub(/./,toupper(substr($i,1,1)),$i)}1')
DATE=$(date +"%Y-%m-%d")

cat <<EOF > "$TARGET_FILE"
# $TITLE

*Date: $DATE*

Brief summary of what this is and why I am recording it.

## Key Concepts

- Concept 1
- Concept 2

## Code Example

```javascript
// Example snippet
```

## Gotchas & What I Learned

- 

## TODO
- [ ] Explore edge cases
EOF

echo "✨ Created new note at: $TARGET_FILE"
