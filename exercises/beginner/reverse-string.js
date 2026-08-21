/**
 * Exercise: Reverse a String
 * 
 * Testing 3 different ways to reverse a string in JS:
 * 1. Built-in array methods
 * 2. Classic for-loop (decrementing)
 * 3. Recursion
 */

// Method 1: Built-in (most readable)
function reverseBuiltin(str) {
  return str.split('').reverse().join('');
}

// Method 2: Decrementing loop (fast, avoids array allocations)
function reverseLoop(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Method 3: Recursive (fun practice, but watch stack depth)
function reverseRecursive(str) {
  if (str === '') return '';
  return reverseRecursive(str.substr(1)) + str.charAt(0);
}

// Self tests
console.log('Builtin:', reverseBuiltin('Ixnit'));        // 'tinxiI'
console.log('Loop:', reverseLoop('hello world'));         // 'dlrow olleh'
console.log('Recursive:', reverseRecursive('algorithm')); // 'mhtirogla'
