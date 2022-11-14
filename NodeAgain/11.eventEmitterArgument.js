
const EventEmitter=require('events')
const chalk = require('chalk');
const customEvent=new EventEmitter()

customEvent.on('response',(name,id)=>{
  console.log(chalk.bgWhiteBright(`data received by ${name} with id: ${id}`));
} )

customEvent.emit('response','chaudhuree',04)