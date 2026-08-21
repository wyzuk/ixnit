// Throttle function
// Ensures fn is called at most once every 'limit' ms.

function throttle(fn, limit = 250) {
  let inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// test
const t = throttle(() => console.log('Throttled tick'), 100);
t();
t();
t(); // only first call runs immediately
