const express = require("express");
const app = express();
require("dotenv").config();
require("./config/database").connect();

//regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import all routes
const product = require("./routes/product.router");

//routes middlewares
app.use("/api/v1", product);

module.exports = app;
