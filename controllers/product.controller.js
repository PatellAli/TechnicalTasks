const Product = require("../models/productModel.js");

const createProduct = async (req, res) => {
  try {
    const { product_name, quantity, price } = req.body;
    if (!product_name || !quantity || !price) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }
    const newProduct = new Product({
      user_id: req.userId,
      product_name,
      quantity,
      price,
    });
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name, quantity, price } = req.body;
    if (!product_name || !quantity || !price) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { product_name, quantity, price },
      { new: true }
    );
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};

const updatedProductPatch = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    if (Object.keys(updates).length === 0) {
      return res
        .status(400)
        .json({ success: false, error: "At least one field is required" });
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  updatedProductPatch,
  deleteProduct,
};
