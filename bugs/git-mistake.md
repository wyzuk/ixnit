# Accidentally committed directly to main

### 1. What happened
Made 2 commits on local `main` before realizing I was supposed to be on a new feature branch.

### 2. What I initially thought
Thought I had to undo the commits manually, copy-paste code changes, and commit again.

### 3. What actually caused it
Forgot to run `git checkout -b feature` before coding.

### 4. The fix
```bash
# 1. Point a new branch to current HEAD (saves both commits)
git branch new-feature

# 2. Reset local main back to remote
git reset --hard origin/main

# 3. Switch to feature branch
git checkout new-feature
```
