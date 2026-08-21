// Zero-dependency HTTP test server
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Hello from simple node server',
    url: req.url,
    time: new Date().toISOString()
  }));
});

// only start listening if run directly
if (require.main === module) {
  server.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
}

module.exports = server;
