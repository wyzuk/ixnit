# Weekly Log: Week 04

*Focus: Linux systemctl, Node.js streams, and Drag & Drop API*

## What I worked on this week
* Documented Linux permissions (`chmod`, `chown`), `systemctl` services, and `grep`/`find` commands.
* Created a Kanban-style HTML5 Drag & Drop sandbox.
* Built a zero-dependency HTTP echo server and a streaming file line counter in Node.js.
* Added a cross-tab state synchronization experiment using `localStorage` and the `storage` event.

## Key Takeaway
* For HTML5 Drag & Drop, you MUST call `e.preventDefault()` on the `dragover` event on the drop target container, or the `drop` event will silently never fire. This took me way too long to figure out.

## Goals for the coming month
* Add WebSockets or Server-Sent Events (SSE) experiment.
* Add more solved coding challenge patterns (sliding window, two pointers).
* Maintain weekly logs consistently.
