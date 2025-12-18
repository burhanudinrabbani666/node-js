const express = require("express");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // console.log(adminData.product);
  // res.sendFile(path.join(routDir, "views", "shop.html"));
  const products = adminData.product;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProduct: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
