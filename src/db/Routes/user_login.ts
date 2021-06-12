export{}
const express = require("express");
const router = express.Router();
const UserLoginController = require("../Controllers/user_login");
const UserController = require("../Controllers/user");
const checkAuth = require('../Middleware/checkAuth');

router.post("/signup", UserLoginController.new_user_signup);

router.post("/login", UserLoginController.user_login);

router.get("/", checkAuth.managerAuth, UserLoginController.user_login_get_all);

router.get("/:id", checkAuth.managerAuth, UserLoginController.user_login_get_user_login);

router.delete("/:id", checkAuth.managerAuth, UserLoginController.delete_user_login);

module.exports = router;