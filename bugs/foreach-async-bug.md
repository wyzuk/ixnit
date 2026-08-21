# forEach does not await promises

### 1. What happened
Wrote a loop to save records to a database. The code printed "Done" before any of the database writes actually finished.

### 2. What I initially thought
Thought `db.save()` had an unhandled promise bug.

### 3. What actually caused it
`Array.prototype.forEach` takes a callback, but ignores whatever that callback returns. Putting `async` inside `forEach` returns a promise to `forEach`, which discards it.

### 4. The fix
Use `for...of`:
```javascript
for (const item of items) {
  await db.save(item);
}
console.log('Done'); // now runs after all saves complete
```
