const http = require('http');

const express = require('express');

const app = express();
app.use('/',(req, res, next)=>{
  console.log("This always runs");
  next();
});

app.use('/add-product',(req, res, next)=>{
  console.log("In add product middle ware");
  res.send("<h1>Add Product</h1>"); // Allows us to send a response
});

app.use('/',(req, res, next)=>{
  console.log("In another middle ware");
  res.send("<h1>Hello from express</h1>"); // Allows us to send a response
});

const server = http.createServer(app);

server.listen(4000);