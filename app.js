const http = require('http');

// function rqlListener(req, res){

// }
// http.createServer(rqlListener);

const server = http.createServer((req, res)=>{
  console.log(req);
  console.log("Lalith");
});

server.listen(4000);