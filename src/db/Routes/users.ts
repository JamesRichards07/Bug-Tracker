//export{}
const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user");
const UserLoginController = require("../Controllers/user_login");
const checkAuth = require('../Middleware/checkAuth');

router.post("/signup", UserLoginController.new_user_signup);

router.post("/login", UserLoginController.user_login);

router.get("/", checkAuth, UserController.user_get_all);

router.get("/:id", checkAuth, UserController.user_get_user);

router.patch("/:id", checkAuth, UserController.user_update_user);

router.delete("/:id", checkAuth, UserController.delete_user);

module.exports = router;