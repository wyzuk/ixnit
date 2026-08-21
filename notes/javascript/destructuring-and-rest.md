# Destructuring & Rest / Spread

Clean patterns for unpacking objects and arrays.

## 1. Object Destructuring with Renaming & Defaults

```javascript
const response = {
  status: 200,
  data: {
    user_name: 'dev_walton',
    age: 26
  }
};

// Renaming user_name -> username and setting default role
const {
  status,
  data: { user_name: username, role = 'guest' }
} = response;

console.log(username); // 'dev_walton'
console.log(role);     // 'guest'
```

---

## 2. Dynamic property names in destructuring

```javascript
const key = 'score';
const stats = { score: 98, level: 4 };

const { [key]: extractedValue } = stats;
console.log(extractedValue); // 98
```

---

## 3. Rest vs Spread

* **Rest (`...`)**: Gathers remaining elements into a single array or object.
* **Spread (`...`)**: Expands elements out into individual pieces.

```javascript
// REST in function params:
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// REST in object destructuring (stripping a property):
const { password, ...safeUser } = { id: 1, name: 'Dan', password: 'secret123' };
console.log(safeUser); // { id: 1, name: 'Dan' }

// SPREAD in combining objects:
const base = { theme: 'dark', fontSize: 14 };
const userPrefs = { ...base, fontSize: 16 }; // Overwrites fontSize
```
