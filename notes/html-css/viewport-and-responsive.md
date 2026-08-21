# Viewport & Responsive Design Notes

Essential meta tags and fluid sizing techniques.

## Standard Mobile Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without this tag, mobile browsers render pages at desktop width (~980px) and scale down, making text tiny.

---

## Fluid Typography with `clamp()`

```css
/* clamp(MIN, VAL, MAX) */
h1 {
  /* Scales smoothly between 2rem on mobile up to 3.5rem on large screens */
  font-size: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
}
```

---

## Modern Dynamic Viewport Units
* `100vh`: Static full height (often causes bottom bars to obscure content on mobile Safari).
* `100dvh`: Dynamic viewport height (adjusts as mobile URL bars appear/disappear).
* `100svh`: Small viewport height.
* `100lvh`: Large viewport height.
