# Git Cheatsheet

```bash
git status -s                    # short status
git add .                        # stage all
git commit -m "message"          # commit
git log --oneline -n 10          # quick history
git restore <file>               # discard unstaged changes in file
git restore --staged <file>      # unstage a file
git reset --soft HEAD~1          # undo commit, keep changes staged
git reset HEAD~1                 # undo commit, leave changes unstaged
git stash                        # save uncommitted work
git stash pop                    # bring it back and delete from stash
git branch -d <branch>           # delete local branch
git checkout -b <new-branch>     # create and switch to branch
git switch -c <new-branch>       # same as checkout -b
git push -u origin <branch>      # first push of new branch
```

Notes:
- Use `git stash -u` if you have new untracked files you want to stash.
- `git commit --amend --no-edit` adds staged changes to the previous commit without changing the message.
