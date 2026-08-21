# Git Reset vs Revert

I always mix these two up when I panic after committing something dumb, so writing down the exact mental model.

## The Short Rule

* **`git reset`**: Rewinds history. Moves the current branch pointer backward. Best for **local/unpushed** commits.
* **`git revert`**: Adds new history that cancels previous commits. Safe for **public/pushed** branches.

---

## 1. `git reset` (Local surgery)

There are 3 main flavors based on what happens to your working directory and staging area:

```bash
# 1. Soft: Uncommits, but leaves files STAGED (ready to commit again)
git reset --soft HEAD~1

# 2. Mixed (default): Uncommits, leaves files MODIFIED in working tree (unstaged)
git reset HEAD~1
# or explicitly:
git reset --mixed HEAD~1

# 3. Hard: DESTROYS changes completely. Dangerous.
git reset --hard HEAD~1
```

> **Note to self:** If you accidentally did `git reset --hard` and lost work, do NOT close the terminal. Run `git reflog` immediately to find the commit hash before the reset!

---

## 2. `git revert` (Public safety)

When commits are already pushed to `main` or a shared branch, never reset and force-push unless you want your teammates to hate you.

```bash
# Reverts the latest commit by creating a new commit "Revert '...'"
git revert HEAD

# Revert a specific commit without immediately committing (lets you batch reverts)
git revert -n <commit-hash>
```

---

## Quick Comparison Table

| Feature | `git reset` | `git revert` |
|---|---|---|
| Modifies history? | Yes (rewinds) | No (appends) |
| Safe on shared branches? | ❌ No | ✅ Yes |
| Working directory change | Depends on flag (`--soft`, `--hard`) | Updates files to undo changes |
| Easy to undo? | Via `reflog` | Just revert the revert commit |

---

## TODO
- [ ] Practice fixing an accidental hard reset using `git reflog` on a dummy repo.
- [ ] Add notes on reverting merge commits (it needs `-m 1`, which is tricky).
