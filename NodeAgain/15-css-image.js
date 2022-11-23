const http = require('http')

const { readFileSync } = require('fs')

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    let data = readFileSync('./home.html')

    res.write(data)
    res.end()
  } else if (req.url === '/about') {
    let data = readFileSync('./about.html')

    res.write(data)
    res.end()
  } else if (req.url === '/fish.png') {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    const image = readFileSync('./content/fish.png');
    res.write(image)
    res.end();
  } else if (req.url === '/image.jpg') {
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    const image = readFileSync('image.jpg');
    res.write(image)
    res.end();
  } else if (req.url === '/style.css') {
    const css = readFileSync('./content/style.css')
    res.writeHead(200, { 'Content-Type': 'text/css' })
    res.write(css)
    res.end()
  } else if (req.url === '/about.css') {
    const css = readFileSync('./content/about.css')
    res.writeHead(200, { 'Content-Type': 'text/css' })
    res.write(css)
    res.end()
  } else {
    res.end('something is wrong with the server')
  }
})

server.listen(8000, () => console.log('server is running on 8000'))

