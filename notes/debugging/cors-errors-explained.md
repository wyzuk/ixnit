# CORS Errors: Why Browser Blocks Requests

Every developer hates the red `Access to fetch at '...' has been blocked by CORS policy` console error.

## What CORS actually is

**Cross-Origin Resource Sharing** is a browser security mechanism, NOT a backend security boundary.
* If your frontend is on `http://localhost:3000` and API is on `http://localhost:8080`, they have different origins (different ports).
* The browser asks the server: "Hey, is `http://localhost:3000` allowed to read this data?" via HTTP headers.

---

## The Preflight `OPTIONS` Request

For non-simple requests (like sending `Content-Type: application/json` or custom headers), the browser sends an `OPTIONS` request before your real `GET` or `POST`.

If the backend server doesn't respond with status 200/204 and header `Access-Control-Allow-Origin`, the request fails.

---

## How to fix it

### Option 1: Fix headers on backend (Proper way)
```javascript
// Express.js example
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));
```

### Option 2: Use a Vite / Webpack / Next dev proxy
```javascript
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
};
```
Now frontend fetches `/api/data` (same origin), avoiding CORS entirely!
