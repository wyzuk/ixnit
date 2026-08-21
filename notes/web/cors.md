# CORS notes

CORS errors happen in the **browser**, not the server.

If you test the API in Postman or curl, it works fine.
The browser blocks JS from reading the response if the server doesn't send:
```http
Access-Control-Allow-Origin: *
```
(or matching origin)

For POST with `Content-Type: application/json`, browser sends an `OPTIONS` preflight request first. Server has to reply with 200/204 to that too.

Fix during local dev: use a proxy (Vite `server.proxy` or similar).
