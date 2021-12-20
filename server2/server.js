const http = require('http');

http.createServer((request, response) => {
  response.write('Server 2');
  response.end();
}).listen(4444, () => {
  console.log('🔥 Server started at port 4444');
})