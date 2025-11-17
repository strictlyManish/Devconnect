const express = require("express");
const protect = require("../middlewares/auth.middleware");
const routes = express.Router();
const getUserController = require("../controllers/user.controller");

routes.get("/user", protect, getUserController)


module.exports = routes;