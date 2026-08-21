/**
 * Debounce & Throttle Utilities
 * Written to prevent lag during rapid scroll / search input events.
 */

// Debounce: Delays execution until 'delay' ms have elapsed since the LAST call.
// Perfect for: Auto-saving, live search API calls, window resize handlers.
function debounce(func, delay = 300) {
  let timerId = null;

  return function debounced(...args) {
    const context = this;
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Throttle: Guarantees execution at most once every 'limit' ms.
// Perfect for: Infinite scroll triggers, mouse move tracking, game loops.
function throttle(func, limit = 250) {
  let inThrottle = false;

  return function throttled(...args) {
    const context = this;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Quick self-test in Node
if (require.main === module) {
  const logSearch = debounce((query) => {
    console.log('API call made for query:', query);
  }, 100);

  console.log('Triggering rapid debounced calls...');
  logSearch('j');
  logSearch('ja');
  logSearch('jav');
  logSearch('javascript'); // Only this one should fire!
}

module.exports = { debounce, throttle };
