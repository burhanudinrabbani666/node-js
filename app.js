// Node build-in
const http = require("http");

// Framework / 3rd Party
const express = require("express");

// App
const app = express();

//Middleware
app.use((req, res, next) => {
  console.log("in The middleWare");
  next();
});

app.use((req, res, next) => {
  console.log("in Another The middleWare");
  res.send(`<h1>Hello From Express</h1>`);
});

// Server
const server = http.createServer(app);
server.listen(3000); //http://localhost:3000/
