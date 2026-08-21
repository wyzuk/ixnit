# fetch() response.json() error

### 1. What happened
Got error: `SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`

### 2. What I initially thought
Thought the backend API was broken or returning corrupted JSON data.

### 3. What actually caused it
The API endpoint URL had a typo (`/api/usr` instead of `/api/user`).
The server returned a 404 HTML error page (`<!DOCTYPE html>...`), which `res.json()` failed to parse as JSON.

### 4. The fix
Always check `res.ok` before calling `res.json()`:
```javascript
const res = await fetch('/api/user');
if (!res.ok) {
  throw new Error(`HTTP error ${res.status}`);
}
const data = await res.json();
```
