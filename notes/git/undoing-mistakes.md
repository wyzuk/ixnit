# Undoing Mistakes in Git

A quick cheat sheet for when things go sideways.

## Scenario 1: I typed the wrong commit message (haven't pushed)
```bash
git commit --amend -m "new correct message"
```

## Scenario 2: I forgot to include a file in the last commit
```bash
git add forgotten-file.js
git commit --amend --no-edit
```

## Scenario 3: I modified a file and want to discard changes (working tree)
```bash
# Single file
git restore path/to/file.js

# All files in current dir
git restore .
```

## Scenario 4: I staged a file with `git add` and want to unstage it
```bash
git restore --staged path/to/file.js
```

## Scenario 5: I completely broke my local branch and want it to match remote exactly
```bash
git fetch origin
git reset --hard origin/main
```

## Scenario 6: "Oh crap, where did my commit go?" (`git reflog`)
```bash
git reflog
# Find the HEAD@{n} before your mistake, then:
git reset --hard HEAD@{2}
```
