# rebase vs merge

Simple mental rule:

- On my own feature branch -> **rebase** onto main to keep commit log clean.
- On shared / main branch -> **merge** so history isn't rewritten for other people.

Commands:
```bash
git checkout my-branch
git rebase main

# if conflicts happen:
git status
# fix files...
git add .
git rebase --continue

# if it's a mess and I want out:
git rebase --abort
```
