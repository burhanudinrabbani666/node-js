// Node build-in
const http = require("http");

// Framework / 3rd Party
const express = require("express");

// App
const app = express();

//Middleware
app.use((req, res, next) => {
  console.log("in The middleWare");

  next(); // for Continue to another Middleware ⬇️
});

app.use((req, res, next) => {
  console.log("in Another The middleWare");
});

// Server
const server = http.createServer(app);
server.listen(3000); //http://localhost:3000/
