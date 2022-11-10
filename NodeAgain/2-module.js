const {sohan,chaudhuree}=require('./2-names')
const hiName=require('./2-utils')
const data=require('./2-alternative-case')

// note: in case of import we need to add type module in package.json 
// and we cannot use require and import in the same file at a time
// 'type':'module'
// import { exportedName, hiName } from './2-exportItem.js'

hiName('kabir')
hiName(sohan)
hiName(chaudhuree)

console.log(data);


// hiName(exportedName)