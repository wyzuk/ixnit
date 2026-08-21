// Minimal file watcher in Node.js using fs.watch
// Useful when I don't want to install nodemon or chokidar for a tiny script.

const fs = require('fs');
const path = require('path');

const targetDir = process.argv[2] || '.';
console.log(`Watching directory: ${path.resolve(targetDir)} for changes...`);

// Simple debounce to prevent double-firing on some OS filesystems
const timers = new Map();

fs.watch(targetDir, { recursive: false }, (eventType, filename) => {
  if (!filename) return;

  if (timers.has(filename)) {
    clearTimeout(timers.get(filename));
  }

  timers.set(
    filename,
    setTimeout(() => {
      console.log(`[${new Date().toLocaleTimeString()}] File event '${eventType}' on: ${filename}`);
      timers.delete(filename);
    }, 100)
  );
});
