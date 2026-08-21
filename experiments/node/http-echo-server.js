// Built-in HTTP Echo Server (Zero dependencies)
// Echoes back headers, query parameters, method, and request body.

const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 4000;

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Read body stream
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = Buffer.concat(chunks).toString();

  const responsePayload = {
    method: req.method,
    path: parsedUrl.pathname,
    query: parsedUrl.query,
    headers: req.headers,
    body: body ? tryParseJson(body) : null
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(responsePayload, null, 2));
});

function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Echo server listening on http://localhost:${PORT}`);
    console.log('Try: curl -X POST http://localhost:4000/test?foo=bar -d "hello"');
  });
}

module.exports = server;
