/**
 * Valid Anagram
 * 
 * Given two strings s and t, return true if t is an anagram of s.
 * 
 * Approach: Character Frequency Counter
 * Time: O(n) | Space: O(1) (since English alphabet has fixed size 26)
 */

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const counts = {};

  for (const char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (const char of t) {
    if (!counts[char]) {
      return false; // Character missing or exhausted
    }
    counts[char]--;
  }

  return true;
}

console.log('anagram / nagaram ->', isAnagram('anagram', 'nagaram')); // true
console.log('rat / car ->', isAnagram('rat', 'car'));                 // false
