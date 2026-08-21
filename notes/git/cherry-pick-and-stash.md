# Cherry-pick & Stash

Two commands that save me when I accidentally commit to the wrong branch or need to jump contexts quickly.

## 1. `git stash` (Quick workspace parking)

When I need to switch branches urgently but have half-finished broken code in my working tree:

```bash
# Stash with a descriptive message (don't just run plain 'git stash', you'll forget what it was)
git stash save "wip: halfway through refactoring auth handler"

# Check what's in stash list
git stash list

# Re-apply latest stash AND remove it from list
git stash pop

# Re-apply a specific stash (e.g. stash@{2}) without deleting it
git stash apply stash@{2}

# Drop a specific stash
git stash drop stash@{1}

# View diff inside a stash before popping
git stash show -p stash@{0}
```

> **Tip:** By default, stash ignores untracked new files. Use `git stash -u` (or `--include-untracked`) to stash new files too!

---

## 2. `git cherry-pick` (Borrowing a commit)

Used when I committed a bugfix on `feature-branch-xyz` but need that exact fix in `main` immediately without merging the whole feature.

```bash
# Switch to destination branch
git checkout main

# Grab the specific commit hash
git cherry-pick a1b2c3d

# If there are conflicts:
# 1. Resolve conflicts in editor
# 2. Stage resolved files: git add .
# 3. Continue:
git cherry-pick --continue
```

---

## TODO
- [ ] Check how `git stash branch <branchname>` works (creates a new branch directly from stash).
