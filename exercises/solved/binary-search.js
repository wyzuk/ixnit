/**
 * Binary Search (Classic & Rightmost Insertion)
 * 
 * Time Complexity: O(log n) | Space: O(1)
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Avoid (left + right) / 2 to prevent integer overflow in large datasets
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}

const sortedList = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
console.log('Index of 23:', binarySearch(sortedList, 23)); // 5
console.log('Index of 50:', binarySearch(sortedList, 50)); // -1
