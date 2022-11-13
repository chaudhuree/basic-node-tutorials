const http = require('http');

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    // res.write()
    res.end('hi chaudhuree. i am from node server & this is home')
  }
  else if (req.url==='/about'){
    res.end('this is a simple description about us..')
  }else{
    res.end(`<h1>Ooops..</h1>
  <p>there has an error to load this page</p>
  <a href="/">back to home</a>`)
  }
})

server.listen(5000)