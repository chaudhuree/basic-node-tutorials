const chalk = require('chalk')
const http= require('http')

const server = http.createServer()

server.on('request',(req,res) => {
  res.end('server emitter')
})
server.listen(5000,() => {
  console.log(chalk.bgGreen('server is running'));
})