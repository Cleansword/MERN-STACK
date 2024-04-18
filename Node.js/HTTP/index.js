const http = require('node:http');

// this is used to create a server with the local host
const server = http.createServer((req, res) => {

  res.end("Hello World!");
});

server.listen(8000);