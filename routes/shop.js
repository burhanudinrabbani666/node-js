const express = require("express");
const adminData = require("./admin");
const productController = require("../controllers/controllers-products");
const router = express.Router();

router.get("/", productController.getProduct);

module.exports = router;
