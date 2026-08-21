/**
 * Exercise: Generic Curry Function
 * 
 * Transforms a function of N arguments f(a, b, c) into f(a)(b)(c).
 */

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Example usage
function sum3(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum3);

console.log(curriedSum(1)(2)(3));    // 6
console.log(curriedSum(1, 2)(3));    // 6
console.log(curriedSum(1)(2, 3));    // 6
console.log(curriedSum(1, 2, 3));    // 6
