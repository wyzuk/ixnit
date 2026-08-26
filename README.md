# Ixnit

My personal coding notebook, experiment sandbox, and developer knowledge base.

I built this repo to keep track of things I learn, snippet recipes I re-use across projects, debugging gotchas that cost me hours, and mini-experiments where I test browser APIs or vanilla JavaScript patterns without spinning up heavy boilerplate.!!

Everything here is written by hand as I work through real problems, tutorials, documentation, and side projects.

---

## 📁 Repository Overview

```text
Ixnit/
├── notes/          # Conceptual notes, mental models, commands, and debugging logs
│   ├── git/        # Git commands, workflow tricks, undoing mistakes
│   ├── github/     # SSH setup, PR etiquette, GH CLI notes
│   ├── linux/      # Shell commands, permissions, process management
│   ├── javascript/ # Core JS concepts: closures, event loop, async, prototypes
│   ├── html-css/   # Flexbox, Grid, specificity, responsive tricks
│   └── debugging/  # Post-mortems on nasty bugs and how I fixed them
├── snippets/       # Drop-in utilities and reference templates
│   ├── javascript/ # Helper functions, debouncing, data transformations
│   ├── bash/       # Automation scripts, quick file searches, port checkers
│   ├── html/       # Clean semantic patterns and accessible UI snippets
│   └── css/        # Utility resets, centering hacks, dark mode, tooltips
├── exercises/      # Coding challenges & algorithm practice
│   ├── beginner/   # String reversals, FizzBuzz variants, basic recursion
│   ├── intermediate/# Currying, deep flatten, LRU cache, event emitter
│   └── solved/     # Fully tested solutions with time/space complexity notes
├── experiments/    # Runnable mini-projects & interactive sandboxes
│   ├── dom/        # Vanilla DOM manipulations, todo app, drag-and-drop
│   ├── fetch-api/  # AbortController, retries with backoff, error parsing
│   ├── node/       # Mini CLI tools, file watchers, streaming servers
│   └── browser/    # Canvas effects, tab sync via localStorage, observers
├── scripts/        # Utility scripts to manage this repo and my local setup
│   ├── cleanup.sh  # Removes temp files and build artifacts
│   ├── backup.sh   # Quick sync script to local archive
│   └── helpers/    # Scaffolding new notes, static server runner, etc.
├── logs/           # Weekly progress logs, developer thoughts, and project ideas
├── resources/      # Cheatsheets, curated links, and reading notes
└── archive/        # Deprecated experiments, legacy attempts, and scraps
```

---

## 🛠️ Why this repo exists

1. **Searchable second brain**: Instead of bookmarking 500 articles or scrolling through old StackOverflow threads, I summarize solutions in my own words with code I actually ran.
2. **Framework-agnostic playground**: Frameworks come and go, but the DOM, HTTP, Bash, and core JavaScript remain. Most experiments here use vanilla tech with zero build steps.
3. **Accountability**: Writing weekly logs and documenting bugs helps me see progress and prevents making the exact same mistakes twice.

---

## 🚀 How to use & run experiments

Most experiments and snippets can be run immediately:

* **HTML/CSS demos**: Open any `.html` file directly in your browser or run the local helper:
  ```bash
  bash scripts/helpers/serve-static.sh 8080
  ```
* **JavaScript files / Node scripts**: Run directly with Node:
  ```bash
  node snippets/javascript/debounce-throttle.js
  node exercises/intermediate/lru-cache-simple.js
  ```
* **Bash scripts**: Make sure they are executable:
  ```bash
  chmod +x scripts/cleanup.sh
  ./scripts/cleanup.sh
  ```

---

## 📝 Notes & Conventions

* Code comments are written conversationally—often capturing my train of thought while debugging.
* Some notes have active `TODO` items where I still need to explore edge cases or benchmark performance.
* If a script failed on my first try, there's usually a small note explaining why and what fixed it.

*Last updated periodically whenever I learn something worth keeping.*
