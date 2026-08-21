# Weekly Log: Week 03

*Focus: Asynchronous APIs, AbortController, and Native HTML5*

## What I worked on this week
* Built the `abort-controller-demo.html` to test canceling in-flight fetch requests.
* Wrote a custom retry wrapper with exponential backoff and randomized jitter to avoid thundering herd issues.
* Created an accessible modal demo using the native HTML5 `<dialog>` element. It's crazy how much simpler this is now compared to old div modals with manual backdrop and focus traps.
* Solved Valid Parentheses and LRU Cache using `Map` insertion order.

## What broke and how I fixed it
* When testing `fetch()`, my `.catch()` block was never running on 404 responses. Forgot that Fetch only rejects on network failures, not HTTP status codes. Added `if (!res.ok) throw ...` check in my helper.

## Next steps
* Explore Cross-Tab synchronization using `window.addEventListener('storage', ...)`.
* Start documenting Linux systemd services and process management notes.
