const express = require("express");
const router = express.Router();
const producContrller = require("../controllers/products");

// /admin/add-product => GET
router.get("/add-product", producContrller.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", producContrller.postAddProduct);

module.exports = router;
