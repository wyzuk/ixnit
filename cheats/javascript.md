# JavaScript Cheatsheet

```javascript
// Array helpers
arr.map(x => x * 2)
arr.filter(x => x > 10)
arr.reduce((sum, x) => sum + x, 0)
arr.find(x => x.id === 5)
arr.some(x => x.active)
arr.every(x => x.active)

// Object helpers
Object.keys(obj)
Object.values(obj)
Object.entries(obj)

// Async
const sleep = ms => new Promise(r => setTimeout(r, ms));
const [res1, res2] = await Promise.all([fetch(u1), fetch(u2)]);

// Deep clone
const copy = structuredClone(original);
```
