# Interactive Rebase (`git rebase -i`)

Notes on cleaning up messy feature branches before making a PR.

## Basic Command

```bash
# Clean up the last 4 commits
git rebase -i HEAD~4

# Or rebase against base branch
git rebase -i origin/main
```

---

## Commands in the interactive editor

When the editor opens, the commits are listed **oldest first** (top) to **newest last** (bottom).

* `pick` (`p`): Keep commit as-is.
* `reword` (`r`): Keep commit, but change the commit message.
* `edit` (`e`): Pause rebase here to amend files or split commit.
* `squash` (`s`): Combine commit with the previous one (above it) and concatenate messages.
* `fixup` (`f`): Like squash, but discards this commit's message (my most used command).
* `drop` (`d`): Delete the commit completely.

---

## My typical workflow for cleaning "WIP" commits

```text
pick 1a2b3c4 feat: add user avatar upload
fixup 5d6e7f8 typo fix in avatar parser
fixup 9a0b1c2 fix styling on avatar button
reword 3d4e5f6 test: add unit tests for avatar
```

This combines all 3 avatar commits into one clean commit and lets me rewrite the test commit message.

---

## Gotchas & Mistakes I made

1. **Accidental merge conflicts explosion**: If rebase conflicts get too confusing, run:
   ```bash
   git rebase --abort
   ```
   Takes you right back to where you started. No harm done.
2. **Continuing after conflict**: After fixing conflict markers:
   ```bash
   git add .
   git rebase --continue
   # NEVER do 'git commit' during a rebase!
   ```

---

## TODO
- [ ] Write down notes on autosquash (`git commit --fixup <hash>` + `git rebase -i --autosquash`).
