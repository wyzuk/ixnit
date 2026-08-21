# Why did fetch not fail on 404?

### 1. What happened
API returned a 404 Not Found, but my `.catch()` block never ran. The app displayed "User: undefined" instead of showing an error.

### 2. What I initially thought
Thought the promise was silently resolving because of an unhandled async error.

### 3. What actually caused it
Native `fetch()` only rejects on network failures (e.g. offline, DNS failed). HTTP status codes 404, 500, etc. count as successful HTTP transactions.

### 4. The fix
```javascript
const res = await fetch('/api/user');
if (!res.ok) {
  throw new Error('Request failed with status ' + res.status);
}
```
