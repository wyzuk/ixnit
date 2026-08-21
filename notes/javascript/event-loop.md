# Event loop order

Order of execution:
1. Synchronous code
2. Microtasks (`Promise.then`, `queueMicrotask`)
3. Macrotasks (`setTimeout`, `setInterval`, DOM events)

Example:
```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');
```

Output: `1, 4, 3, 2`

Promise callbacks always run before `setTimeout(..., 0)`.
