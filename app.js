// Framework / 3rd Party
const express = require("express");

// App
const app = express();

//Middleware
app.use("/", (req, res, next) => {
  console.log("this Always Run");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("in The middleWare");
  res.send(`<h1>Add Prodoct page</h1>`);
});

app.use("/", (req, res, next) => {
  console.log("in Another The middleWare");
  res.send(`<h1>Hello From Express</h1>`);
});

// Server
app.listen(3000);
