// Simple date formatter using native Intl API
// No need to install moment or date-fns for basic formats

function formatDate(date = new Date()) {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(d);
}

console.log(formatDate()); // e.g. "Aug 21, 2026"
console.log(formatDate('2026-01-01'));
