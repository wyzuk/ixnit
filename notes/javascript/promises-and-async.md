# Promises & Async/Await Notes

Mental model and common traps I kept falling into with asynchronous JavaScript.

## 1. The 3 States of a Promise
1. **Pending**: Waiting for result.
2. **Fulfilled**: Success (`resolve(value)`), triggers `.then()`.
3. **Rejected**: Error occurred (`reject(err)`), triggers `.catch()`.

---

## 2. Async/Await is just syntactic sugar

Under the hood, an `async` function always returns a Promise.

```javascript
// This:
async function getUser() {
  return "Alice";
}

// Is identical to:
function getUser() {
  return Promise.resolve("Alice");
}
```

---

## 3. The "Waterfall" Anti-Pattern (Don't await sequentially if independent)

```javascript
// ❌ SLOW: Fetches take 1s + 1s = 2s total
async function loadDashboardSlow() {
  const user = await fetch('/api/user').then(r => r.json());
  const stats = await fetch('/api/stats').then(r => r.json());
  return { user, stats };
}

// ✅ FAST: Parallel execution (takes ~1s total)
async function loadDashboardFast() {
  const [user, stats] = await Promise.all([
    fetch('/api/user').then(r => r.json()),
    fetch('/api/stats').then(r => r.json())
  ]);
  return { user, stats };
}
```

---

## 4. `Promise.all` vs `Promise.allSettled`

* `Promise.all`: Short-circuits immediately if **ANY** promise rejects. Fails fast.
* `Promise.allSettled`: Waits for **EVERY** promise to finish regardless of success or failure. Returns an array of `{ status: 'fulfilled' | 'rejected', value | reason }`.

```javascript
// Perfect when one failed request shouldn't crash the whole batch:
const results = await Promise.allSettled([fetch(urlA), fetch(urlB)]);
const successful = results
  .filter(r => r.status === 'fulfilled')
  .map(r => r.value);
```

---

## 5. Gotcha: `forEach` does not wait for `await`!

```javascript
// ❌ BROKEN: forEach ignores returned promises
items.forEach(async (item) => {
  await saveToDb(item);
});
console.log('Done'); // Prints immediately before saves finish!

// ✅ FIXED: Use a standard for...of loop or Promise.all
for (const item of items) {
  await saveToDb(item);
}
```

---

## TODO
- [ ] Read up on `Promise.any` vs `Promise.race`.
- [ ] Experiment with AsyncIterators for stream processing.
