/**
 * Exercise: Deep Flatten Array
 * 
 * Recreating Array.prototype.flat(Infinity) using recursion & reduce.
 */

function deepFlatten(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? deepFlatten(item) : item);
  }, []);
}

function flattenIterative(arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }

  return result.reverse();
}

// Tests
const nested = [1, [2, [3, [4, 5]]], 6, [7, 8]];
console.log('Recursive deep flatten:', deepFlatten(nested));
console.log('Iterative deep flatten:', flattenIterative(nested));
