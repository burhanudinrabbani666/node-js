const path = require("path");
const express = require("express");
const router = express.Router();
const routDir = require("../util/path");

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(routDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push("Shop.js", { title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.product = products;
