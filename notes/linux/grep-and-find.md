# Grep & Find: Searching Linux Filesystems

Search cheatsheet for terminal navigation without GUI tools.

## 1. `grep` / `ripgrep` (Searching file contents)

```bash
# Basic case-insensitive search
grep -i "error" /var/log/syslog

# Recursive search in directory with line numbers
grep -rn "API_URL" src/

# Search and invert match (lines that DO NOT contain pattern)
grep -v "DEBUG" server.log

# Show 2 lines before and 3 lines after match (super useful for logs)
grep -B 2 -A 3 "FATAL" app.log

# Count number of matching lines
grep -c "GET /api/v1" access.log
```

> Note: If `ripgrep` (`rg`) is installed, use `rg "pattern"` instead. It respects `.gitignore` and is lightning fast.

---

## 2. `find` (Searching filenames & file properties)

```bash
# Find all .js files in current directory
find . -type f -name "*.js"

# Case-insensitive filename search
find . -type f -iname "*readme*"

# Find files modified in the last 24 hours
find . -type f -mtime -1

# Find files larger than 50MB
find . -type f -size +50M

# Find all empty directories and delete them
find . -type d -empty -delete

# Find all .sh files and ensure they have +x executable bit
find . -type f -name "*.sh" -exec chmod +x {} +
```
