# Merge vs Rebase

Every team argues about this. Here is how I think about them in practice.

## `git merge`

Creates a new "merge commit" that joins two divergent histories.

```bash
git checkout feature
git merge main
```

* **Pros:** Preserves the exact chronological history of what happened and when. Non-destructive.
* **Cons:** Network graph looks like messy subway maps if everyone merges main into their branch every day.

---

## `git rebase`

Lifts your feature branch commits and replays them on top of the target branch.

```bash
git checkout feature
git rebase main
```

* **Pros:** Clean linear commit history. Easy `git bisect` and cleaner logs.
* **Cons:** Rewrites commit hashes. If you already pushed the branch, you need `git push --force-with-lease`.

---

## My Golden Rule

* **Local feature branch:** Rebase onto `main` to keep history tidy.
* **Shared/Public branch (main, staging, release):** Never rebase. Always merge (or let GitHub PR squash/merge handle it).
