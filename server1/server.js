const http = require('http');

http.createServer((request, response) => {
  response.write('Server 1');
  response.end();
}).listen(3333, () => {
  console.log('🔥 Server started at port 3333');
})