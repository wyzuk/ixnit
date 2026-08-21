# CSS Specificity Calculation

Understanding why styles get overridden and how to avoid `!important`.

## Specificity Hierarchy Score: (A, B, C, D)

1. **Inline styles**: `style="..."` -> (1, 0, 0, 0)
2. **IDs**: `#header`, `#nav` -> (0, 1, 0, 0)
3. **Classes, attributes, pseudo-classes**: `.btn`, `[type="text"]`, `:hover` -> (0, 0, 1, 0)
4. **Elements, pseudo-elements**: `div`, `p`, `::before` -> (0, 0, 0, 1)

---

## Examples

| Selector | Specificity Score |
|---|---|
| `p` | (0, 0, 0, 1) |
| `.card p` | (0, 0, 1, 1) |
| `.card .title:hover` | (0, 0, 2, 0) |
| `#main-nav .menu-item` | (0, 1, 1, 0) |
| `#main-nav .menu-item:hover` | (0, 1, 2, 0) |

---

## Modern CSS Trick: `:where()` vs `:is()`

* `:is(.btn, .link)`: Takes the specificity of its **highest** selector inside.
* `:where(.btn, .link)`: Has **ZERO** specificity (0, 0, 0, 0).
  * Amazing for CSS resets and base design systems because it's trivial to override!
