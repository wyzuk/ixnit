/**
 * Exercise: FizzBuzz & Variations
 * 
 * Print numbers from 1 to N:
 * - Divisible by 3 -> "Fizz"
 * - Divisible by 5 -> "Buzz"
 * - Divisible by both (15) -> "FizzBuzz"
 * - Otherwise print the number
 */

// 1. Standard readable version
function fizzBuzzStandard(n) {
  const results = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      results.push('FizzBuzz');
    } else if (i % 3 === 0) {
      results.push('Fizz');
    } else if (i % 5 === 0) {
      results.push('Buzz');
    } else {
      results.push(String(i));
    }
  }
  return results;
}

// 2. Extensible map version (easy to add "7 -> Bazz", "11 -> Bizz")
function fizzBuzzExtensible(n, rules = { 3: 'Fizz', 5: 'Buzz', 7: 'Bazz' }) {
  const results = [];
  for (let i = 1; i <= n; i++) {
    let output = '';
    for (const [num, word] of Object.entries(rules)) {
      if (i % Number(num) === 0) output += word;
    }
    results.push(output || String(i));
  }
  return results;
}

// Test first 20 numbers
console.log('Standard (1..15):', fizzBuzzStandard(15).join(', '));
console.log('Extensible with 7=Bazz (1..21):', fizzBuzzExtensible(21).join(', '));
