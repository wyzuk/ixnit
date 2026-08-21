# git submodules

Submodules are annoying but sometimes needed.

When cloning a repo with submodules:
```bash
git clone --recursive <repo-url>
```

If already cloned without `--recursive`:
```bash
git submodule update --init --recursive
```

To update submodules to latest remote commits:
```bash
git submodule update --remote
```
