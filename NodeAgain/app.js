
const EventEmitter=require('events')
const chalk = require('chalk');
const customEvent=new EventEmitter()

customEvent.on('response',()=>{
  console.log('successfully run event emitter')
  console.log(chalk.bgGreenBright('successfully run event emitter'))
} )

customEvent.emit('response')