  const http= require('http')
  const URL= require('url')
  const server = http.createServer(function (req, res) {

  const myURL = "http://rabbil.com/blog.html?year=2020&month=july";

  const myURLObj = URL.parse(myURL, true);

  const myHostName = myURLObj.host;
  console.log("▶ ➡ file: app.js ➡ line 10 ➡ server ➡ myHostName", myHostName);
  const myPathName = myURLObj.pathname;
  console.log("▶ ➡ file: app.js ➡ line 12 ➡ server ➡ myPathName", myPathName);
  const mySearchName = myURLObj.search;
  console.log("▶ ➡ file: app.js ➡ line 14 ➡ server ➡ mySearchName", mySearchName);

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(mySearchName);
  res.end();


});
server.listen(5000,()=>console.log("server is running on port: 5000"))