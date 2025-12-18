// Framework / 3rd Party
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

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

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "" });
});

// Server
app.listen(3000);
