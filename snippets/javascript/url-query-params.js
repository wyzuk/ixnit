/**
 * URL & Query Parameter Helpers
 * Uses modern URL and URLSearchParams native APIs.
 */

// 1. Parse current URL query params into an object
function getQueryParams(urlString = window.location.href) {
  const url = new URL(urlString, 'http://localhost');
  const params = {};
  for (const [key, value] of url.searchParams.entries()) {
    params[key] = value;
  }
  return params;
}

// 2. Build a URL with query parameters safely (auto URI encodes)
function buildUrlWithParams(baseUrl, params = {}) {
  const url = new URL(baseUrl, 'http://localhost');
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  });
  return url.toString();
}

// Test
const testUrl = 'https://api.example.com/search?q=javascript+tips&page=2&filter=active';
console.log('Parsed params:', getQueryParams(testUrl));

const constructed = buildUrlWithParams('https://api.example.com/items', {
  category: 'books',
  sort: 'price_asc',
  limit: 25
});
console.log('Built URL:', constructed);
