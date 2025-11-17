const express = require("express");
const { RegisterController,
    LoginController,
    LogoutController } = require("../controllers/auth.controller");


const routes = express.Router();

routes.post("/register", RegisterController)
routes.post("/login", LoginController)
routes.get("/logout", LogoutController)


module.exports = routes;