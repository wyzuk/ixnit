# Closures

A function remembers the scope it was created in.

```javascript
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const c = makeCounter();
console.log(c()); // 1
console.log(c()); // 2
```

Where I actually use this:
- Debounce/throttle helpers
- Creating private variables without classes
- Event handlers that need custom params
