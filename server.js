const http = require('http');

const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' }
];

const server = http.createServer((req, res) => {
  const { headers } = req;

  res.statusCode = 404;
  res.writeHead('Content-Type', 'application/json');
  res.writeHead('X-Powered-By', 'Node.js');

  const data = JSON.stringify({
    success: false,
    error: 'Not Found',
    data: null,
    // data: todos,
  });

  res.end(data);
});

const PORT = 5000;

server.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`));
