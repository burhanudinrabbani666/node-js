const express = require("express");
const router = express.Router();

// Only after post method
router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST"><input type="text" name="title" ><button type="submit">Add To cart</button>
    </form>`
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body, "/product");
  res.redirect("/");
});

module.exports = router;
