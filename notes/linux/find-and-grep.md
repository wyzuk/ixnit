# Searching files in terminal

Grep in directory:
```bash
grep -rn "TODO" src/
# -r = recursive
# -n = line numbers
# -i = ignore case
```

Find files by name:
```bash
find . -type f -name "*.js"
```

Find large files (>50M):
```bash
find . -type f -size +50M
```

Kill process on a port:
```bash
lsof -i :3000
kill -9 <PID>
```
