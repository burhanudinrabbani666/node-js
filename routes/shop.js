const express = require("express");
const adminData = require("./admin");
const productContrller = require("../controllers/products");
const router = express.Router();

router.get("/", productContrller.getProduct);

module.exports = router;
