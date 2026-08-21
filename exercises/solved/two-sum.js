/**
 * LeetCode 1: Two Sum
 * 
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * 
 * Time Complexity: O(n) using Hash Map lookup
 * Space Complexity: O(n)
 */

function twoSum(nums, target) {
  const seen = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(current, i);
  }

  return [];
}

// Tests
console.log('Two Sum [2, 7, 11, 15], target=9:', twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log('Two Sum [3, 2, 4], target=6:', twoSum([3, 2, 4], 6));           // [1, 2]
console.log('Two Sum [3, 3], target=6:', twoSum([3, 3], 6));                 // [0, 1]
