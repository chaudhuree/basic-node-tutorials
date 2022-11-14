// const {readFile,writeFile}=require('fs')
// const util = require('util')

// const readfileAsync=util.promisify(readFile)
// const writefileAsync=util.promisify(writeFile)

// const readWrite=async () =>{
//   try {
//     // read file
//     const first = await readfileAsync('./content/first.txt','utf8')
//     const second = await readfileAsync('./content/second.txt','utf8')
//     console.log("▶ ➡ file: app.js ➡ line 9 ➡ readWrite ➡ first", first);
//     console.log("▶ ➡ file: app.js ➡ line 11 ➡ readWrite ➡ second", second);

//     // write file
//     await writefileAsync('./content/readWriteFileAsync.txt',`awesome the text is: ${first} and ${second}`);

//   } catch (error) {
//     console.log(error);
//   }
// }
// readWrite()

// note: without util 
const {readFile,writeFile}=require('fs').promises



const readWrite=async () =>{
  try {
    // read file
    const first = await readFile('./content/first.txt','utf8')
    const second = await readFile('./content/second.txt','utf8')
    console.log("▶ ➡ file: app.js ➡ line 9 ➡ readWrite ➡ first", first);
    console.log("▶ ➡ file: app.js ➡ line 11 ➡ readWrite ➡ second", second);

    // write file
    await writeFile('./content/readWriteFileAsyncTwo.txt',`awesome the text is: ${first} and ${second}`);

  } catch (error) {
    console.log(error);
  }
}
readWrite()