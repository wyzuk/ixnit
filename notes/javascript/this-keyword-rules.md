# The `this` Keyword Rules

The 4 rules to determine what `this` points to at runtime.

## Rule 1: Default Binding (Standalone function call)
In non-strict mode: `window` (browser) or `global` (Node).
In strict mode (`"use strict"`): `undefined`.

```javascript
function show() {
  console.log(this);
}
show(); // undefined in strict mode
```

---

## Rule 2: Implicit Binding (Called as a method on an object)
`this` is the object before the dot.

```javascript
const person = {
  name: 'Sam',
  greet() {
    console.log('Hello, ' + this.name);
  }
};
person.greet(); // 'Hello, Sam'

// Trap: Losing implicit context
const fn = person.greet;
fn(); // 'Hello, undefined' (lost its object receiver!)
```

---

## Rule 3: Explicit Binding (`call`, `apply`, `bind`)

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}
const user = { name: 'Sarah' };

greet.call(user, 'Hi', '!');       // 'Hi, Sarah!'
greet.apply(user, ['Hey', '?']);   // 'Hey, Sarah?'

const boundGreet = greet.bind(user, 'Hello');
boundGreet('.');                   // 'Hello, Sarah.'
```

---

## Rule 4: `new` Binding (Constructor calls)
When calling a function with `new`, `this` points to the newly instantiated object.

---

## Special Case: Arrow Functions
Arrow functions do NOT have their own `this`. They lexically inherit `this` from their enclosing scope.

```javascript
const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      this.seconds++; // 'this' safely refers to timer object
      console.log(this.seconds);
    }, 1000);
  }
};
```
