# Random debugging notes

A few quick things that went wrong this week:

## 1. Node script hanging forever
Script wouldn't exit after finishing.
- Cause: An active `setInterval` was still running in a background module.
- Fix: Call `clearInterval(timer)` or `timer.unref()` so Node doesn't keep the event loop alive for it.

## 2. Flexbox item refusing to shrink
Text inside a flex child was overflowing past the screen width.
- Cause: Flex children have `min-width: auto` by default.
- Fix: Set `min-width: 0` on the flex child.

## 3. Git rebase conflict confusion
Got scared by 12 conflict markers on a branch.
- Fix: Ran `git rebase --abort` and took a breath. Rebased against main commit by commit instead.
