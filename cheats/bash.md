# Bash Cheatsheet

```bash
# Check if file exists
if [ -f "config.json" ]; then
  echo "Found config"
fi

# Check if directory exists
if [ -d "dist" ]; then
  rm -rf dist
fi

# Check if variable is empty
if [ -z "$VAR" ]; then
  echo "VAR is not set"
fi

# Loop over files
for f in *.txt; do
  echo "Processing $f"
done

# Current script directory
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
```
