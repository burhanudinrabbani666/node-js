// Importing models
const Product = require("../models/models-product");

exports.getProduct = (req, res, next) => {
  // Render data
  const prodId = req.params.productId;

  Product.findById(prodId, (product) => {
    res.render("shop/product-detail", {
      // make single data
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/products",
      hasProduct: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: "/cart",
    activeShop: true,
    productCSS: true,
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  console.log(prodId);

  res.redirect("/cart");
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
    activeShop: true,
    productCSS: true,
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders Now 💥",
    path: "/orders",
    activeShop: true,
    productCSS: true,
  });
};
