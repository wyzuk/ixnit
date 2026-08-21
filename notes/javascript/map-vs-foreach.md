# map vs forEach

- `map` -> returns a **new array** with the results.
- `forEach` -> returns `undefined`. Just runs the function on each item.

Stop doing this:
```javascript
// dumb:
const result = items.forEach(x => x * 2); // result is undefined!
```

Also: `forEach` does **not** wait for `await`!
If you need async inside a loop, use `for (const item of items)` or `Promise.all(items.map(...))`.
