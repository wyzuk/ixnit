# Why My `fetch()` Failed: Post-Mortem

Summary of obscure reasons `fetch()` didn't work as expected and how I resolved them.

## Gotcha 1: `fetch()` does NOT reject on 404 or 500 HTTP errors

`fetch()` only rejects if there is a network failure (offline, DNS lookup failed, CORS blocked). A 404 or 500 response is considered a successful HTTP transaction.

```javascript
// ❌ Buggy: .catch won't trigger on 404 Not Found!
fetch('/api/user/999')
  .then(res => res.json())
  .catch(err => console.error('Caught error', err));

// ✅ Fix: Always check res.ok
async function safeFetch(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }
  return res.json();
}
```

---

## Gotcha 2: `res.json()` can only be read ONCE

The response body is a readable stream. If you call `res.json()` or `res.text()`, the stream is consumed.

```javascript
// ❌ Bug: "TypeError: Failed to execute 'json' on 'Response': body stream already read"
console.log(await res.text());
const data = await res.json(); // Throws error!

// ✅ Fix: Clone response if you need multiple reads (e.g. for logging)
const resClone = res.clone();
console.log(await resClone.text());
const data = await res.json();
```

---

## Gotcha 3: Sending JSON without `Content-Type` header

When doing a POST request with `JSON.stringify(body)`, if you forget the header, Express / backend body-parsers will receive an empty `req.body`!

```javascript
fetch('/api/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' // Crucial!
  },
  body: JSON.stringify({ name: 'Walton' })
});
```
