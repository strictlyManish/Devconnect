const express = require("express");
const postController = require("../controllers/post.controller");
const protect = require("../middlewares/auth.middleware");
const routes = express.Router();
const multer = require("multer");



const upload = multer({ storage: multer.memoryStorage() })

routes.post("/", protect,
    upload.single("image"),
    postController
)




module.exports = routes;