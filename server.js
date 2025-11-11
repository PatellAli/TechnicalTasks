const express = require("express");
const dotenv = require("dotenv");
const Authrouter = require("./routes/auth.Routes.js");
const mongoose = require("./db/db.js");
const Productrouter = require("./routes/product.Routes.js");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

app.use("/api/auth", Authrouter);
app.use("/api/products", Productrouter);
app.get("/", (req, res) => {
  res.send("API is running on render...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
