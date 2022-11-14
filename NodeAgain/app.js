const {readFile,writeFile}=require('fs')
const utils = require('uitls')

const readfileAsync=utils.promisify(readFile)
const writefileAsync=utils.promisify(writeFile)

