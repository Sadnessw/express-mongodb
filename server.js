const http = require('http');

const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' }
];

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js',
  });

  console.log(req.headers.authorization);
  let body = [];

  req.on('data', chunk => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body);
    console.log(body);
  });

  const data = JSON.stringify({ 
    success: true,
    error: null,
    data: todos,
  });

  res.end(data);
});

const PORT = 5000;

server.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`));
