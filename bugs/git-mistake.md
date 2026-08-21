# Accidentally committed directly to main

I meant to make a feature branch, but made 2 commits straight on `main` locally.

How I fixed it:
```bash
# 1. Create a new branch pointing at current HEAD (keeps my 2 commits)
git branch my-new-feature

# 2. Reset main back to match remote origin/main
git reset --hard origin/main

# 3. Switch to the new branch
git checkout my-new-feature
```
