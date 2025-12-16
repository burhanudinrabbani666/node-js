// Framework / 3rd Party
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

//route
const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");
// App
const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // For take Submissions
app.use(express.static(path.join(__dirname, "public"))); // CSS

// express set to pug
app.engine("handlebars", expressHbs());
app.set("view engine", "handlebars");
app.set("views", "views");

// Middleware
app.use(shopRoute);
app.use("/admin", adminData.routes);

app.use("/", (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

// Server
app.listen(3000);
