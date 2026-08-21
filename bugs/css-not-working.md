# Why did this CSS not work?

### 1. What happened
Set `height: 100%` and `align-items: center` on a child element, but it didn't center vertically.

### 2. What I initially thought
Thought flexbox alignment was broken or overridden by some CSS class.

### 3. What actually caused it
The parent container had no explicit height or `min-height`, so it collapsed to the child's natural height. `height: 100%` of 0 is 0.

### 4. The fix
Add `min-height: 100vh` (or a fixed height) to the parent container:
```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
```
