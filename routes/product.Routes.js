const express = require("express");
const Productrouter = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  updatedProductPatch,
  deleteProduct,
} = require("../controllers/product.controller.js");
const authenticateUser = require("../middleware/authenticateUser.js");

Productrouter.post("/create", authenticateUser, createProduct);
Productrouter.get("/", authenticateUser, getProducts);
Productrouter.put("/update/put/:id", authenticateUser, updateProduct);
Productrouter.patch("/update/patch/:id", authenticateUser, updatedProductPatch);
Productrouter.delete("/delete/:id", authenticateUser, deleteProduct);
module.exports = Productrouter;
