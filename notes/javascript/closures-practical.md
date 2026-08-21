# Closures & Practical Uses

A closure is simply a function remembering the outer scope variables where it was created, even when executed elsewhere.

## 1. Data Privacy / Encapsulation (Private state)

```javascript
function createCounter(initialValue = 0) {
  let count = initialValue; // Private variable, cannot be accessed directly

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    }
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.getValue());  // 11
console.log(counter.count);       // undefined (secure!)
```

---

## 2. Function Factory / Configuration

```javascript
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

---

## 3. The Infamous `var` in loops bug (Historical, but good to know)

```javascript
// ❌ var is function-scoped: prints "3, 3, 3"
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// ✅ let is block-scoped: creates a fresh binding per iteration ("0, 1, 2")
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```
