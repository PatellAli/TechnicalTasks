const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
console.log("MONGO");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
module.exports = mongoose;
