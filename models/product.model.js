const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    price: {
      discounted: {
        type: Number,
        default: 0,
      },
      original: {
        type: Number,
        required: [true, "Original price is required"],
      },
    },
    rating: {
      type: Number,
      default: 0,
    },

    categoryGroup: [
      {
        type: String,
        required: [true, "At least one categoryGroup is required"],
      },
    ],
    categoryName: {
      type: String,
      required: [true, "CategoryName is required"],
    },

    offer: {
      type: String,
      required: [true, "Offer is required"],
    },

    imgURL: { type: String, required: [true, "imgURL is required"] },

    isBestseller: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
