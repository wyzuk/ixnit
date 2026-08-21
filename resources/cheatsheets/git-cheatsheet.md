# Git Quick Reference Cheatsheet

## Setup & Config
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
git config --global core.editor "vim"
```

## Staging & Committing
```bash
git add .                  # Stage all changes
git add -p                 # Stage interactively by hunks
git commit -m "feat: msg"  # Commit staged changes
git commit --amend         # Modify previous commit
```

## Branching & Merging
```bash
git checkout -b <name>     # Create & switch to new branch
# Modern alternative:
git switch -c <name>

git branch -d <name>       # Delete local branch (safe)
git branch -D <name>       # Force delete branch
git push origin :<name>    # Delete remote branch
```

## History & Logs
```bash
git log --oneline --graph --all  # Pretty ASCII branch graph
git log -p -2                    # Show last 2 commits with diffs
git diff --staged                # Diff between staged and last commit
git blame <file>                 # Line-by-line author attribution
```
