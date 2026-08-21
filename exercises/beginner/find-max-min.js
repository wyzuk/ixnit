/**
 * Exercise: Find Max and Min in an Array without Math.max(...spread)
 * (Spreading a massive array like Math.max(...hugeArr) can cause stack overflow)
 */

function findMinMax(numbers) {
  if (!numbers || numbers.length === 0) {
    return { min: undefined, max: undefined };
  }

  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const val = numbers[i];
    if (val < min) min = val;
    if (val > max) max = val;
  }

  return { min, max };
}

console.log(findMinMax([42, -5, 100, 3, 0, -12, 88])); // { min: -12, max: 100 }
