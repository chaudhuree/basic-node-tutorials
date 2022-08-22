const name=require('./names')
const sayHi=require('./utils')


const data =require('./alternative-export')
console.log("🚀 ~ file: app.js ~ line 4 ~ data", data)


console.log("🚀 ~ file: app.js ~ line 2 ~ name", name)
console.log("🚀 ~ file: app.js ~ line 2 ~ sayHi", sayHi)

sayHi(name.sohan)
sayHi(name.chaudhuree)