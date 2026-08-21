# Bash Cheatsheet

```bash
# If file / dir exists
[ -f "file.txt" ] && echo "file exists"
[ -d "folder" ] && echo "dir exists"
[ -z "$VAR" ] && echo "var is empty"

# Loops
for f in *.js; do
  echo "File: $f"
done

# Script directory
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Exit immediately if command fails
set -e

# Run last command as root
sudo !!
```

Notes:
- `$0` = script name, `$1` = first argument, `$#` = argument count.
- Use `set -e` at the top of scripts so it stops on first error instead of plowing ahead.
