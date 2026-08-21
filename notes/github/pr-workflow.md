# Pull Request Workflow & Habits

Notes on how I try to keep my PRs clean, reviewable, and easy to merge.

## Good habits I'm trying to maintain

1. **One PR = One concern**: Don't bundle a refactor + 3 unrelated bugfixes + new feature in one 1500-line PR. Nobody wants to review that.
2. **Descriptive PR title**: Follow conventional commit style:
   - `feat(auth): support email magic links`
   - `fix(cart): prevent double-clicking checkout button`
   - `refactor(dom): extract modal backdrop logic`
3. **Include reproduction steps or screenshots for UI changes**:
   - Before / After screenshot or GIF.
4. **Self-review before requesting review**:
   - Check the "Files changed" tab on GitHub myself. I almost always catch a rogue `console.log` or commented-out test code.

## Syncing a fork with upstream

```bash
# Add upstream remote once
git remote add upstream git@github.com:original-owner/repo.git

# Sync main branch
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```
