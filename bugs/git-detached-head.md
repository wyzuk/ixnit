# Git "You are in 'detached HEAD' state"

### 1. What happened
Ran `git checkout <commit-hash>` to check an old commit, made some edits, committed them, and then couldn't find them after switching back to `main`.

### 2. What I initially thought
Thought Git deleted my commits when I switched branches.

### 3. What actually caused it
"Detached HEAD" means `HEAD` is pointing directly to a commit instead of a named branch pointer. Commits made in detached HEAD have no branch pointing to them.

### 4. The fix
To save those commits into a new branch:
```bash
# Create and switch to a branch at current detached commit
git branch temp-saved-work
git checkout temp-saved-work
```
If you already switched away: run `git reflog`, find the commit hash, and branch from it: `git branch recovered-work <hash>`.
