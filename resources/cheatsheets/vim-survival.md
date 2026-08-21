# Vim Survival Guide

For when you accidentally get stuck in Vim after running `git commit` or `git rebase`.

## 1. How to get out!
* Press `Esc`
* Type `:wq` and press `Enter` (Save and quit)
* Or `:q!` and press `Enter` (Discard changes and force quit)

---

## 2. Basic Modes
* **Normal mode**: Default. Navigation and commands. Press `Esc` to return here.
* **Insert mode**: Typing text. Press `i` to enter insert before cursor, `a` to insert after cursor.
* **Visual mode**: Selecting text. Press `v`.

---

## 3. Quick Normal Mode Commands
* `u`: Undo
* `Ctrl + r`: Redo
* `dd`: Delete (cut) current line
* `yy`: Copy (yank) current line
* `p`: Paste below cursor
* `/`: Search forward (press `n` for next match)
* `gg`: Jump to top of file
* `G`: Jump to bottom of file
* `:123`: Jump to line 123
