const path = require("path");
const express = require("express");
const routDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log(adminData.product);
  // res.sendFile(path.join(routDir, "views", "shop.html"));

  res.render("shop");
});

module.exports = router;
