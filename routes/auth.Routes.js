const express = require("express");
const Authrouter = express.Router();
const { register, login } = require("../controllers/auth.controller.js");

Authrouter.post("/register", register);
Authrouter.post("/login", login);
module.exports = Authrouter;
