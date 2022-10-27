// const cloudinary = require("cloudinary");
const Product = require("../models/product.model");

exports.addProducts = async (req, res) => {
  const {
    title,
    discounted,
    original,
    rating,
    categoryGroup = "",
    categoryName = "",
    offer = "",
    imgURL = "",
    isBestseller = false,
  } = req.body;

  if (!title || !original || !imgURL || !categoryName || !offer)
    return res
      .status(400)
      .send({ success: false, message: "Please provide all the fields" });

  try {
    const product = await Product.create({
      title,
      price: { discounted, original },
      rating,
      categoryGroup,
      categoryName,
      offer,
      imgURL,
      isBestseller,
    });

    res.status(201).send({ success: true, product });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: `Here is the error${error.message}` });
  }
};

// get all products  ---> /api/v1/products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    // if no products found return 404
    if (!products && products.length === 0)
      return res
        .status(404)
        .send({ success: false, message: "No products found" });

    // return all products
    res.status(200).send({ success: true, products });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

// get specific products  ---> /api/v1/products/:productId
exports.getProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    if (!product)
      return res
        .status(404)
        .send({ success: false, message: "No product found" });

    res.status(200).send({ success: true, product });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
