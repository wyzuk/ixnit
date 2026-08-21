# Weekly Log: Week 01

*Focus: Repository setup, Git fundamentals, and Flexbox layouts*

## What I worked on this week
* Initialized the **Ixnit** repository to organize all my random coding notes and snippets in one searchable place.
* Wrote in-depth notes comparing `git reset` vs `git revert`. I've lost commits in the past with `reset --hard`, so writing the `git reflog` rescue guide was mandatory.
* Practiced Flexbox centering tricks and created the `flexbox-centering.md` cheat sheet.
* Built a basic vanilla DOM Todo list experiment to practice state-driven rendering without React.

## Struggles & Blockers
* Got tripped up by Git interactive rebase when squashing commits with conflicts. Aborting (`git rebase --abort`) saved me.
* Realized `forEach` does not await async functions inside it. Spent an hour wondering why my database writes were out of order. Documented this in `promises-and-async.md`.

## Next Week's Plan
* Dive deeper into the JavaScript Event Loop (microtasks vs macrotasks).
* Write bash helper scripts to automate note creation and large file checks.
* Practice intermediate array algorithms (flattening and currying).
