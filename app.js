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
app.use(adminRoute);
app.use(shopRoute);

// Server
app.listen(3000);
