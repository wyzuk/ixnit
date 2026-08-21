# Learning JS - Async & Promises

Taking notes on how promises actually execute.

## Mental model
1. Code runs line by line on call stack.
2. `setTimeout` callback goes to macrotask queue.
3. `Promise.resolve().then()` goes to microtask queue.
4. Microtasks drain completely before ANY macrotask runs.

## Test I ran
```javascript
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
```
Printed: `A, D, C, B`.

Made sense once I visualized the microtask queue running right after the stack cleared.
