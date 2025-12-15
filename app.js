// Framework / 3rd Party
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

//route
const adminRoute = require("./routes/admin.js");
const shopRoute = require("./routes/shop.js");
// App
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use("/admin", adminRoute);
app.use(shopRoute);

app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Server
app.listen(3000);
