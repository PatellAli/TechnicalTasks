const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product_name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    order_date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
