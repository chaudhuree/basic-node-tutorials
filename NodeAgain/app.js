const {readFile,writeFile}=require('fs')

readFile('./content/first.txt','utf8', function(err,result){
  if(err){
    console.log(err);
    return
  }
  const first = result
  readFile('./content/second.txt','utf8', function(err,result){
    if(err){
      console.log(err);
      return
    }
    const second = result
    writeFile('./content/8-async.txt',`data: ${first} and ${second}`,function(err,result){
      if(err){
        console.log(err);
        return
      }
      console.log(result);
    })
  })
})