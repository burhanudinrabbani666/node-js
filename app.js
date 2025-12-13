// Framework / 3rd Party
const express = require("express");
const bodyParser = require("body-parser");

//route
const adminRoute = require("./routes/admin.js");
const shopRoute = require("./routes/shop.js");
// App
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
app.use("/admin", adminRoute);
app.use(shopRoute);

app.use("/", (req, res, next) => {
  res.status(404).send(`<h1>Page Not Found</h1>`);
});

// Server
app.listen(3000);
