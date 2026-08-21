/**
 * Exercise: Object.groupBy Polyfill
 * 
 * Recreates modern Object.groupBy(items, callback).
 */

function customGroupBy(items, callback) {
  const result = {};

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const key = callback(item, i);

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
}

// Example
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas',   type: 'fruit',      quantity: 0 },
  { name: 'goat',      type: 'meat',       quantity: 23 },
  { name: 'cherries',  type: 'fruit',      quantity: 5 }
];

const byType = customGroupBy(inventory, item => item.type);
console.log('Grouped by type:', byType);

const byStock = customGroupBy(inventory, item => item.quantity > 0 ? 'inStock' : 'outOfStock');
console.log('Grouped by stock:', byStock);
