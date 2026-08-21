# Git Cheatsheet

```bash
# Status & Branching
git status -s
git checkout -b <branch>
git switch -c <branch>
git branch -d <branch>

# Stashing
git stash
git stash pop
git stash list

# Log
git log --oneline -n 10
git log --graph --oneline --all

# Resetting / Undoing
git reset --soft HEAD~1     # undo commit, keep staged
git reset HEAD~1            # undo commit, unstage
git restore <file>          # discard changes in file
git restore --staged <file> # unstage file

# Remote
git remote -v
git push -u origin <branch>
git fetch origin
git pull --rebase origin main
```
