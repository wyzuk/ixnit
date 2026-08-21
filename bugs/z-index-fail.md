# z-index: 99999 did nothing

### 1. What happened
Gave a dropdown menu `z-index: 99999`, but it still rendered behind a neighboring sidebar.

### 2. What I initially thought
Thought some other element had a higher z-index like 999999.

### 3. What actually caused it
Stacking contexts. The dropdown's parent container had `position: relative` with a lower z-index (or `opacity: 0.99`). The child can never appear above elements outside its parent's stacking context.

### 4. The fix
Give the dropdown's parent container a higher z-index, or move the dropdown out to `<body>` level so it shares the root stacking context.
