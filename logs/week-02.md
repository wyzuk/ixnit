# Weekly Log: Week 02

*Focus: JavaScript Event Loop, Closures, and Bash scripting*

## What I worked on this week
* Studied how the browser event loop executes call stacks, microtasks (`Promise.then`, `queueMicrotask`), and macrotasks (`setTimeout`).
* Implemented `debounce` and `throttle` utilities with test cases in `snippets/javascript/debounce-throttle.js`.
* Wrote several bash automation scripts: `find-large-files.sh`, `check-open-ports.sh`, and `batch-rename.sh`.
* Solved LeetCode 1 (Two Sum) with hash map lookup in $O(n)$ time.

## What I learned
* Microtasks drain completely before the browser moves to the next macrotask or runs a paint frame.
* `WeakMap` is really neat for deep cloning circular references because it doesn't prevent garbage collection.

## TODO
- [ ] Try creating a small particle animation using the HTML5 `<canvas>` API.
- [ ] Add notes on CSS specificity and `:where()` zero-specificity trick.
