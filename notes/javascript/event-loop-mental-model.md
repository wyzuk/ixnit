# Event Loop & Task Queues

How the JavaScript runtime executes synchronous code, microtasks, and macrotasks.

## Visual Diagram of Execution Order

```text
1. Call Stack (Run synchronous code until empty)
      ↓
2. Microtask Queue (Run ALL microtasks until empty)
   - Promise.then / .catch / .finally
   - queueMicrotask()
   - MutationObserver
      ↓
3. Render Phase (Browser layout / paint if needed)
      ↓
4. Macrotask Queue (Run ONE macrotask)
   - setTimeout / setInterval
   - DOM events (click, input)
   - setImmediate (Node.js)
   - I/O callbacks
      ↓
Repeat from step 1
```

---

## Classic Quiz Example

```javascript
console.log('1: Sync');

setTimeout(() => {
  console.log('2: Timeout (Macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise (Microtask)');
});

queueMicrotask(() => {
  console.log('4: queueMicrotask (Microtask)');
});

console.log('5: Sync');
```

### Output:
```text
1: Sync
5: Sync
3: Promise (Microtask)
4: queueMicrotask (Microtask)
2: Timeout (Macrotask)
```

---

## Key takeaway
Microtasks have higher priority than macrotasks. If you schedule a microtask from inside a microtask, it will drain before `setTimeout(..., 0)` is ever touched.
