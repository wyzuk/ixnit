# bash: ./script.sh: Permission denied

### 1. What happened
Created a new shell script `script.sh` and tried running `./script.sh`. Got `Permission denied`.

### 2. What I initially thought
Thought I needed to run it with `sudo`.

### 3. What actually caused it
New files created in Linux/macOS don't have the executable bit (`+x`) enabled by default.

### 4. The fix
Do NOT run with sudo. Just grant execute permission:
```bash
chmod +x script.sh
./script.sh
```
