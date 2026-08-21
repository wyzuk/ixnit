/**
 * Exercise: Least Recently Used (LRU) Cache
 * 
 * Uses JavaScript's Map property where keys are iterated in insertion order.
 * By deleting and re-setting a key, we move it to the end (most recent).
 */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    // Refresh position to mark as recently used
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // Evict oldest (first key in Map iterator)
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}

// Test
const lru = new LRUCache(2);
lru.put('a', 1);
lru.put('b', 2);
console.log(lru.get('a')); // returns 1, 'a' is now most recent
lru.put('c', 3);           // evicts 'b'
console.log(lru.get('b')); // returns -1 (evicted!)
console.log(lru.get('c')); // returns 3
