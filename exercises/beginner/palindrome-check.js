/**
 * Exercise: Check Palindrome
 * 
 * Determines if a string is identical forwards and backwards,
 * ignoring punctuation, whitespace, and casing.
 */

function isPalindrome(str) {
  // Strip non-alphanumeric characters and lowercase
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Two-pointer approach (O(n) time, O(1) extra space)
  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Tests
const testCases = [
  'A man, a plan, a canal: Panama', // true
  'race a car',                     // false
  'Was it a car or a cat I saw?',   // true
  'No "x" in Nixon',                // true
  'hello'                           // false
];

testCases.forEach(tc => {
  console.log(`"${tc}" -> ${isPalindrome(tc)}`);
});
