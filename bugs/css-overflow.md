# Flex child overflowing parent width

### 1. What happened
A long string of text inside a flexbox child caused the whole layout to stretch horizontally and break off-screen.

### 2. What I initially thought
Thought `overflow: hidden` on the parent card would fix it.

### 3. What actually caused it
By default, flex items have `min-width: auto`. This means a flex child refuses to shrink smaller than the intrinsic width of its text content.

### 4. The fix
Add `min-width: 0` to the flex child:
```css
.flex-child {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
