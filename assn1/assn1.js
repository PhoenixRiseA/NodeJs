const http = require('http');

const server = http.createServer((req,res)=>{
  console.log('listening on port 3000',req.url);
  const url = req.url;
  const method = req.method;
  res.setHeader('Content-type','text/html');
  if(url === '/'){
    
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><h1>Welcome to Assignment 1 of Node.js course in Udemy</h1><form action="/create-user" method="POST"><input type="text" name="usernamme"><button type="submit">Send</button></form></body>')
    res.write('</html>');
    return res.end();
  }
  if(url === '/create-user' && method === 'POST'){
   
    const body = [];
    req.on('data',(chunk)=>{
      body.push(chunk);
    })
    req.on('end',()=>{
      const parsedbody = Buffer.concat(body).toString();
      console.log(parsedbody.split('=')[1]);
    });
    res.statusCode = '302';
    res.setHeader('Location','/');
    res.end();
  }
  if(url === '/users'){
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>')
    res.write('</html>');
    return res.end();
  }

});

server.listen(3000);