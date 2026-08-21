# Undo last commit

```bash
# Keep changes in working tree & staging
git reset --soft HEAD~1

# Keep changes in working tree but unstage
git reset HEAD~1

# Nuke changes completely (careful!)
git reset --hard HEAD~1
```

If I accidentally used `--hard` and lost work:
```bash
git reflog
# find the hash before the reset
git reset --hard <hash>
```
