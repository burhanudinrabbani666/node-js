// Framework / 3rd Party
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const errorControler = require("./controllers/404");

//route
const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");
// App
const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // For take Submissions
app.use(express.static(path.join(__dirname, "public"))); // CSS

app.set("view engine", "ejs");
app.set("views", "views");

// Middleware
app.use(shopRoute);
app.use("/admin", adminRoutes);

app.use(errorControler.errorHandling);

// Server
app.listen(3000);
