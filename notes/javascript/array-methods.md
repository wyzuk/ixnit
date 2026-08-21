# Modern Array Methods Cheat Sheet

A quick cheat sheet on mutability, return values, and modern additions.

## Does it mutate the original array?

| Method | Mutates original? | Returns |
|---|---|---|
| `map()` | ❌ No | New array of transformed items |
| `filter()` | ❌ No | New array of matching items |
| `reduce()` | ❌ No | Single accumulated value |
| `slice()` | ❌ No | Shallow copy of slice |
| `splice()` | ⚠️ **YES** | Removed elements |
| `sort()` | ⚠️ **YES** | Mutated original array |
| `reverse()` | ⚠️ **YES** | Mutated original array |
| `push()` / `pop()` | ⚠️ **YES** | New length / popped element |

---

## Modern Non-Mutating Alternatives (ES2023)

```javascript
const arr = [3, 1, 4, 1, 5];

// Instead of arr.slice().sort():
const sorted = arr.toSorted((a, b) => a - b); // [1, 1, 3, 4, 5]

// Instead of arr.slice().reverse():
const reversed = arr.toReversed(); // [5, 1, 4, 1, 3]

// Replace item at index without mutating original:
const replaced = arr.with(0, 99); // [99, 1, 4, 1, 5]

console.log(arr); // [3, 1, 4, 1, 5] untouched!
```

---

## `find` vs `filter` vs `some` vs `every`

```javascript
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true }
];

// Returns the first match or undefined
const bob = users.find(u => u.name === 'Bob');

// Returns an array of all matches
const activeUsers = users.filter(u => u.active);

// Returns true if AT LEAST ONE satisfies condition
const hasInactive = users.some(u => !u.active); // true

// Returns true if ALL satisfy condition
const allActive = users.every(u => u.active); // false
```
