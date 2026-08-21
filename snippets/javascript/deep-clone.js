/**
 * Deep Clone Snippet
 * 
 * Note to self: 
 * - In modern JS environments, use structuredClone(obj)!
 * - structuredClone handles circular references, Maps, Sets, and Dates.
 * - JSON.parse(JSON.stringify(obj)) breaks on Dates (converts to string),
 *   undefined, functions, and circular refs.
 */

// Modern native approach:
function cloneModern(obj) {
  if (typeof structuredClone === 'function') {
    return structuredClone(obj);
  }
  return fallbackDeepClone(obj);
}

// Recursive fallback for older environments
function fallbackDeepClone(value, hash = new WeakMap()) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (value instanceof Date) return new Date(value.getTime());
  if (value instanceof RegExp) return new RegExp(value.source, value.flags);

  // Handle circular references
  if (hash.has(value)) {
    return hash.get(value);
  }

  const copy = Array.isArray(value) ? [] : {};
  hash.set(value, copy);

  for (const key of Reflect.ownKeys(value)) {
    copy[key] = fallbackDeepClone(value[key], hash);
  }

  return copy;
}

// Test
const original = {
  name: 'Dev',
  meta: { tags: ['js', 'notes'], created: new Date() }
};

const cloned = cloneModern(original);
cloned.meta.tags.push('algorithms');

console.log('Original tags length:', original.meta.tags.length); // 2
console.log('Cloned tags length:', cloned.meta.tags.length);     // 3
