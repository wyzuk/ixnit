# null vs undefined

- `undefined`: variable is declared, but has no assigned value. Default return of functions that don't return anything.
- `null`: explicitly assigned to mean "empty" or "no value".

```javascript
typeof undefined // 'undefined'
typeof null      // 'object' (famous JS bug that can never be fixed)

null == undefined  // true (loose equality)
null === undefined // false (strict equality)
```

Optional chaining is nice for both:
```javascript
const user = null;
console.log(user?.profile?.name); // undefined, no error thrown
```
