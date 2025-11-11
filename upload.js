const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "=" +
      Math.random(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, error: "No file uploaded" });
    }
    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      filename: req.file.filename,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.listen(5000, () => {
  console.log("File upload server running on port 5000");
});
