# git stash

Forgot this again.

```bash
# save work with a name
git stash save "wip: auth form"

# see what's in there
git stash list

# get it back and delete from stash
git stash pop

# apply without deleting
git stash apply stash@{0}
```

Note: By default it does NOT stash untracked files.
Use `git stash -u` if there are new files.

TODO:
- figure out stash branches properly
