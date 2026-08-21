# Today I Learned (TIL) Quick Log

Bite-sized daily nuggets.

* **2026-08-10**: The `:where()` pseudo-class in CSS has 0 specificity. You can style a whole component with `:where(.card, .btn)` and override it anywhere with a simple single class selector without `!important`.
* **2026-08-12**: In Node.js, `fs.watch` behavior differs across operating systems. On Windows and macOS, it often emits duplicate `change` events for a single file save. Always debounce file watcher callbacks.
* **2026-08-15**: `Object.hasOwn(obj, 'key')` is the modern and safer replacement for `obj.hasOwnProperty('key')` (works even if `obj` was created with `Object.create(null)`).
* **2026-08-18**: `git push origin --delete <branchname>` deletes a remote branch. Or the shortcut: `git push origin :<branchname>`.
* **2026-08-20**: `dialog.showModal()` traps keyboard focus and enables Escape key closing, but `dialog.show()` only shows it as a non-modal popup without backdrop.
