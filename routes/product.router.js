const express = require("express");
const {
  addProducts,
  getProducts,
  getProduct,
} = require("../controllers/product");

const router = express.Router();

router.route("/products").post(addProducts).get(getProducts);
router.route("/products/:productId").get(getProduct);

module.exports = router;
