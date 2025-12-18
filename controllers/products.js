// Importing models
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formCSS: true,
    productCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  // save in variable
  const product = new Product(req.body.title);

  // Using Save Method
  product.save();

  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  // Render data
  const products = Product.fetchAll();

  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProduct: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
