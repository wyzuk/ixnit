# `z-index` Not Working? Stacking Contexts Explained

Why setting `z-index: 9999999` still leaves an element behind another element.

## The Problem
`z-index` only determines order **within the same stacking context**.
If Parent A has a lower stacking context than Parent B, no child inside Parent A can ever appear above Parent B, no matter how high its `z-index` is.

---

## What creates a new Stacking Context?
1. `position: absolute` or `relative` with a `z-index` other than `auto`.
2. `position: fixed` or `sticky`.
3. `opacity` less than 1.
4. `transform`, `filter`, `backdrop-filter`, or `perspective` other than `none`.
5. `isolation: isolate`.

---

## How I debug this in DevTools
1. Inspect the element that is stuck behind.
2. Walk up its parent tree in DevTools.
3. Look for `opacity`, `transform`, or `z-index` on ancestor elements.
4. Modern solution: Use CSS `isolation: isolate;` on widget boundaries to prevent unintended stacking interference.
