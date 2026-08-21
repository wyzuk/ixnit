# Why did this fetch not fail on 404?

I assumed `fetch()` would jump to `.catch()` if the server returned a 404 or 500 error.

It did NOT.

Turns out `fetch()` only rejects if there is a real network failure (like no internet or CORS blocked). A 404 response is still a successful HTTP response.

Fix:
```javascript
const res = await fetch('/api/user');
if (!res.ok) {
  throw new Error('HTTP status: ' + res.status);
}
const data = await res.json();
```
