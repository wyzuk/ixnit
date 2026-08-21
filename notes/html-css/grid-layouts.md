# CSS Grid: Responsive Cards Without Media Queries

The ultimate one-liner for auto-wrapping card grids.

## The Auto-Fit Minmax Pattern

```css
.card-grid {
  display: grid;
  /* Automatically wraps columns when screen shrinks below 280px */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

### Why `auto-fit` vs `auto-fill`?
* `auto-fit`: Stretches existing items to take up full available width if there aren't enough items to fill a row.
* `auto-fill`: Leaves empty space/slots open for hypothetical future columns without expanding current items.

---

## 2. Named Grid Areas (Great for dashboard layouts)

```css
.dashboard {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 60px 1fr 40px;
  grid-template-areas:
    "header  header"
    "sidebar content"
    "footer  footer";
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }
```
