# CSS Cheatsheet

```css
/* Centering (Flex) */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Centering (Grid) */
.center-grid {
  display: grid;
  place-items: center;
}

/* Responsive grid cards */
.grid-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Text truncate */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```
