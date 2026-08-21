/**
 * Exercise: Count Vowels in a String
 */

// Approach 1: Regex match
function countVowelsRegex(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// Approach 2: Set lookup
function countVowelsSet(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.has(char)) count++;
  }
  return count;
}

console.log(countVowelsRegex('The quick brown fox')); // 5
console.log(countVowelsSet('Javascript Engineering'));  // 7
