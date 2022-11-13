const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// print them
console.log("▶ ❤ file: app.js ❤ line 4 ❤ first", first);
console.log("▶ ❤ file: app.js ❤ line 6 ❤ second", second);

writeFileSync('./content/7-fs-module-sync.txt',`${first} and ${second}`,{flag:'a'})

const writedFile= readFileSync('./content/7-fs-module-sync.txt', 'utf8')
console.log("▶ ➡ file: app.js ➡ line 12 ➡ writedFile", writedFile);
