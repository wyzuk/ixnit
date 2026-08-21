# Process Management in Linux

How to find what's hogging CPU/memory or what process is holding a port.

## 1. Finding who is using a port (e.g. port 3000 or 8080)

I run into "EADDRINUSE: address already in use :::3000" constantly.

```bash
# Find PID listening on port 3000
lsof -i :3000
# or
ss -tulpn | grep 3000

# Kill it by PID
kill -9 <PID>

# One-liner to kill whatever is on port 3000
kill -9 $(lsof -t -i :3000)
```

---

## 2. Finding & Killing Processes

```bash
# Interactive resource viewer
top
# (or htop if installed)

# Find process by name
ps aux | grep node

# Kill by process name directly
pkill -f "node server.js"

# Send graceful termination signal (SIGTERM, code 15)
kill 1234

# Force kill (SIGKILL, code 9)
kill -9 1234
```

---

## 3. Backgrounding & Foregrounding jobs

```bash
# Run command in background
node server.js &

# List background jobs in current shell session
jobs

# Bring background job #1 back to foreground
fg %1

# Send current running job to background:
# Press Ctrl + Z (pauses job), then run:
bg
```
