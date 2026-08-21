// Debounce function
// Delays calling fn until 'delay' ms after the user stops typing/calling.

function debounce(fn, delay = 250) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// quick test
const log = debounce((text) => console.log('Called:', text), 100);
log('a');
log('ab');
log('abc'); // only 'abc' should print
