# Memory Leak: Forgotten Event Listeners

A bug I ran into where a single-page app became laggy after navigating back and forth between tabs.

## The Bug

```javascript
// Inside a component or view render function:
function renderDashboard() {
  const handler = () => console.log('Window resized');
  window.addEventListener('resize', handler);
}
```

Every time `renderDashboard` was called, a new closure was registered on `window`.
None of them were cleaned up, holding references to the entire dashboard DOM in memory!

---

## The Fix

Always store a reference to the exact function and remove it on cleanup / unmount.

```javascript
function setupDashboard() {
  function handleResize() {
    console.log('Resized:', window.innerWidth);
  }

  window.addEventListener('resize', handleResize);

  // Return a cleanup function
  return function teardown() {
    window.removeEventListener('resize', handleResize);
  };
}

const cleanup = setupDashboard();
// Later when unmounting:
cleanup();
```

> **Note:** Anonymous functions cannot be removed with `removeEventListener`!
> `window.removeEventListener('click', () => {})` does nothing because the arrow function is a distinct instance.
