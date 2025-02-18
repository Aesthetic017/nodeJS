// creating a server and implemented the HTTP protocol
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World Ashutosh Deshpande');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// PS C:\Users\Dell> taskkill /PID 10104 /F
// SUCCESS: The process with PID 10104 has been terminated.
// PS C:\Users\Dell> node C:\Users\Dell\OneDrive\Desktop\JS\node1.js
// Server running at http://127.0.0.1:3000/
// PS C:\Users\Dell> node C:\Users\Dell\OneDrive\Desktop\JS\node1.js
// Server running at http://127.0.0.1:3000/