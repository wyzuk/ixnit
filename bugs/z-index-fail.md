# z-index: 99999 did nothing

Why? Stacking context.

Parent container had `position: relative` with a low `z-index` (or `opacity: 0.99`).
No matter how big the child's z-index was, it could never escape the parent's stacking context.

Fix:
Moved the popup element out to `<body>` level or fixed the ancestor's z-index.
