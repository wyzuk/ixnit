# Debugging "undefined is not a function" & "cannot read properties of null"

The most frequent runtime errors in JavaScript and how to guard against them.

## Cause 1: Optional Chaining to the rescue

```javascript
const user = { profile: null };

// ❌ Throws: TypeError: Cannot read properties of null (reading 'avatar')
const avatar = user.profile.avatar;

// ✅ Safe with Optional Chaining (?.)
const avatarSafe = user.profile?.avatar; // undefined (no crash)
```

---

## Cause 2: Calling a method that doesn't exist or misspelling

```javascript
const list = [1, 2, 3];

// ❌ list.findLast is undefined in older runtimes
// list.findLast(x => x > 1);

// ✅ Guard check:
if (typeof list.findLast === 'function') {
  list.findLast(x => x > 1);
}
```

---

## Cause 3: Passing callbacks that aren't functions

```javascript
function fetchData(onSuccess) {
  const data = { id: 101 };
  // ❌ If caller passed nothing: onSuccess is not a function
  // onSuccess(data);

  // ✅ Defensive execution:
  if (typeof onSuccess === 'function') {
    onSuccess(data);
  }
  // Or: onSuccess?.(data);
}
```
