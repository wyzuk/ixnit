/**
 * Valid Parentheses (Balanced Brackets)
 * 
 * Given a string s containing '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * Time: O(n) | Space: O(n)
 */

function isValidBracketString(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (map[char]) {
      // Closing bracket encountered
      if (stack.length === 0 || stack.pop() !== map[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log('"()[]{}" ->', isValidBracketString('()[]{}'));       // true
console.log('"(]" ->', isValidBracketString('(]'));               // false
console.log('"([{}])" ->', isValidBracketString('([{}])'));       // true
console.log('"(((" ->', isValidBracketString('((('));             // false
