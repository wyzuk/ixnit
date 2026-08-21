# forEach does not await promises

Wrote this and wondered why records weren't saved in order:

```javascript
// BROKEN:
users.forEach(async (u) => {
  await db.save(u);
});
console.log('done'); // prints immediately before db writes!
```

Why: `forEach` does not care what the callback returns (it ignores promises).

Fix:
```javascript
for (const u of users) {
  await db.save(u);
}
```
