# Project Ideas & Future Experiments Sandbox

A running dump of mini-projects, APIs I want to explore, and tools I want to build.

## Web APIs to test
- [ ] **WebSockets vs Server-Sent Events (SSE)**: Build a live stock ticker or chat mock with zero third-party dependencies.
- [ ] **Web Audio API**: Synthesize simple 8-bit chiptune sound effects directly in the browser.
- [ ] **Web Workers**: Offload heavy array sorting or image pixel manipulation to background threads.
- [ ] **Service Workers & Cache API**: Build a true offline-capable PWA notes scratchpad.
- [ ] **BroadcastChannel API**: Alternative to `localStorage` storage events for tab-to-tab messaging.

---

## Tooling & Automation ideas
- [ ] **CLI Markdown Link Checker**: A bash or node script that crawls all `.md` files in this repo and alerts on broken local file links.
- [ ] **Mini Static Site Generator**: A tiny Node script that takes all `notes/**/*.md`, parses frontmatter, and outputs a searchable static HTML documentation site.
- [ ] **Git Hook for conventional commits**: Pre-commit hook that warns if commit message doesn't start with `feat:`, `fix:`, `docs:`, etc.

---

## Algorithms & Data Structures to implement from scratch
- [ ] Trie (Prefix Tree) for autocomplete
- [ ] Min-Heap / Max-Heap Priority Queue
- [ ] Graph BFS & DFS traversal visualizer
- [ ] Rate limiter with Sliding Window Log
