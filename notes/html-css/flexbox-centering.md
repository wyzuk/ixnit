# Flexbox Centering & Common Layouts

Because every frontend dev Googles "how to center a div in CSS" at least 100 times.

## 1. Absolute perfect centering (horizontal + vertical)

```css
.parent {
  display: flex;
  justify-content: center; /* Main axis (horizontal by default) */
  align-items: center;     /* Cross axis (vertical by default) */
  min-height: 100vh;
}
```

Or the modern 2-line Grid trick:
```css
.parent {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
```

---

## 2. The `margin: auto` in Flexbox magic

If a container is `display: flex`, setting `margin: auto` on an item centers it in all directions automatically!

```css
.container {
  display: flex;
  height: 300px;
}

.box {
  margin: auto; /* Perfectly centered! */
}
```

Or pushing the last item in a navbar to the right:
```css
.navbar {
  display: flex;
  gap: 1rem;
}

.navbar .profile-link {
  margin-left: auto; /* Pushes profile button all the way to the right */
}
```

---

## 3. Flex-grow, shrink, and basis shorthand

```css
/* flex: <flex-grow> <flex-shrink> <flex-basis> */
.sidebar {
  flex: 0 0 250px; /* Don't grow, don't shrink, stay fixed at 250px */
}

.content {
  flex: 1 1 auto;  /* Grow and shrink to fill remaining space */
}
```
