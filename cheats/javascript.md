# JavaScript Cheatsheet

```javascript
// Array helpers
const doubled = arr.map(x => x * 2);
const evens = arr.filter(x => x % 2 === 0);
const sum = arr.reduce((acc, x) => acc + x, 0);
const found = arr.find(x => x.id === 1);
const hasSome = arr.some(x => x > 10);
const allMatch = arr.every(x => x > 0);

// Objects
Object.keys(obj);
Object.values(obj);
Object.entries(obj);

// Sleep helper
const sleep = ms => new Promise(r => setTimeout(r, ms));

// Deep clone (modern native)
const copy = structuredClone(original);

// Optional chaining & nullish coalescing
const name = user?.profile?.name ?? 'Anonymous';
```

Notes:
- `map` returns a new array. `forEach` returns undefined.
- `??` (nullish coalescing) only falls back for `null` or `undefined`, unlike `||` which triggers on `0` and `""`.
