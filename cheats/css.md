# CSS Cheatsheet

```css
/* 1. Centering (Flex) */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 2. Centering (Grid) */
.center-grid {
  display: grid;
  place-items: center;
}

/* 3. Responsive grid cards */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

/* 4. Text truncate with ellipsis */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 5. Fluid font size */
h1 {
  font-size: clamp(1.5rem, 1rem + 2vw, 3rem);
}
```

Notes:
- If flex child text overflows, set `min-width: 0` on the child.
- `place-items: center` on `display: grid` centers everything in 2 lines.
