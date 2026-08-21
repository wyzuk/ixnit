# HTTP Status Codes Cheat Sheet

## 2xx Success
* `200 OK`: Standard successful response.
* `201 Created`: Resource successfully created (common for `POST`).
* `204 No Content`: Success, but no response body returned (common for `DELETE`).

## 3xx Redirection
* `301 Moved Permanently`: Old URL is permanently deprecated.
* `302 Found / 307 Temporary Redirect`: Temporary redirect.
* `304 Not Modified`: Browser cache is still fresh, no need to re-download.

## 4xx Client Errors
* `400 Bad Request`: Invalid request syntax / payload.
* `401 Unauthorized`: Authentication required (missing or invalid token).
* `403 Forbidden`: Authenticated, but lacks permission.
* `404 Not Found`: Resource doesn't exist.
* `409 Conflict`: State conflict (e.g. duplicate username).
* `422 Unprocessable Entity`: Validation error on payload fields.
* `429 Too Many Requests`: Rate limit exceeded.

## 5xx Server Errors
* `500 Internal Server Error`: Unhandled crash on server.
* `502 Bad Gateway`: Reverse proxy (e.g. Nginx) received invalid response from upstream app.
* `503 Service Unavailable`: Server is overloaded or down for maintenance.
* `504 Gateway Timeout`: Upstream app took too long to reply.
