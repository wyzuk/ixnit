/**
 * Simple Date Formatting Helpers without moment.js or date-fns
 * Uses native Intl.DateTimeFormat (super fast & lightweight)
 */

// Format as: "Aug 21, 2026"
function formatDateShort(date = new Date()) {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(d);
}

// Relative time formatting: "3 minutes ago", "yesterday", "in 2 days"
function formatRelativeTime(date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.round((d.getTime() - now.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  const cutoffs = [
    { limit: 60, unit: 'second' },
    { limit: 3600, unit: 'minute', divisor: 60 },
    { limit: 86400, unit: 'hour', divisor: 3600 },
    { limit: 2592000, unit: 'day', divisor: 86400 },
    { limit: 31536000, unit: 'month', divisor: 2592000 },
    { limit: Infinity, unit: 'year', divisor: 31536000 }
  ];

  const absSeconds = Math.abs(diffInSeconds);

  for (const c of cutoffs) {
    if (absSeconds < c.limit) {
      const value = Math.round(diffInSeconds / (c.divisor || 1));
      return rtf.format(value, c.unit);
    }
  }
}

// Test in Node:
console.log('Short date:', formatDateShort(new Date()));
console.log('5 mins ago:', formatRelativeTime(new Date(Date.now() - 5 * 60 * 1000)));
console.log('Yesterday:', formatRelativeTime(new Date(Date.now() - 24 * 3600 * 1000)));
