const http = require('http');
const app = require('./app.js');
const port = 8080;

const server = http.createServer(app);

server.listen(port, function(err: any)
{
  if (err)
  {
    console.log(err);
  }
  else
  {
    console.log(`Example app listening at http://localhost:${port}`)
  }
});