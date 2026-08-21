# GitHub CLI (`gh`) Quick Notes

I started using `gh` in the terminal to avoid opening the browser for small tasks.

## Installation check
```bash
gh --version
gh auth login
```

## Useful everyday commands

```bash
# Clone a repo directly
gh repo clone owner/repo

# Create a PR from current branch
gh pr create --title "fix: prevent avatar overflow" --body "Closes #42"

# View PR status & CI checks
gh pr status
gh pr checks

# Checkout someone else's PR locally to test it
gh pr checkout 128

# Open current repo in browser
gh repo view --web

# View issue list
gh issue list --assignee "@me"
```

## TODO
- [ ] Learn how to trigger GitHub Actions workflows using `gh workflow run`.
