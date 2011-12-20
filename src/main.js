var http = require('http');
process.env.C9_PORT = process.env.C9_PORT || 9000
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Chat.js Server ready for interaction\n');
}).listen(process.env.C9_PORT, "0.0.0.0");
console.log('Server running at http://127.0.0.1:9000/');
