/**
 * Type-safe, JSON-serializing LocalStorage Wrapper
 * 
 * Handles JSON parsing errors gracefully and supports default fallback values.
 * Also checks if localStorage is available (e.g. Incognito mode or SSR).
 */

const storage = {
  isAvailable() {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  },

  get(key, fallbackValue = null) {
    if (!this.isAvailable()) return fallbackValue;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallbackValue;
    } catch (err) {
      console.warn(`Failed to parse localStorage key "${key}":`, err);
      return fallbackValue;
    }
  },

  set(key, value) {
    if (!this.isAvailable()) return false;
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      console.error(`Failed to save to localStorage key "${key}":`, err);
      return false;
    }
  },

  remove(key) {
    if (!this.isAvailable()) return;
    localStorage.removeItem(key);
  },

  clear() {
    if (!this.isAvailable()) return;
    localStorage.clear();
  }
};

if (typeof module !== 'undefined') {
  module.exports = storage;
}
