const path=require('path')

// print the path seperator
console.log("path separator >>> " + path.sep);

// path join
const filePath=path.join('\content','subfolder','test.txt')
console.log("➡▶ ❤ file: app.js ❤ line 8 ❤ filePath", filePath);

// path resolver
const absolutePath=path.resolve(__dirname, 'content','subfolder','test.txt')
console.log("➡▶ ❤ file: app.js ❤ line 12 ❤ absolutePath", absolutePath);
