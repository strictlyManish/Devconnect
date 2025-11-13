const express = require("express");
const postController = require("../controllers/post.controller");
const protect = require("../middlewares/auth.middleware");
const routes = express.Router();



routes.post("/",protect,postController)




module.exports = routes;