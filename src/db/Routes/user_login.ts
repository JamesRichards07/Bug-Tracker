export{}
const express = require("express");
const router = express.Router();
const UserLoginController = require("../Controllers/user_login");
const checkAuth = require('../Middleware/checkAuth');

router.get("/", checkAuth.managerAuth, UserLoginController.user_login_get_all);

router.get("/:id", checkAuth.managerAuth, UserLoginController.user_login_get_user_login);

router.delete("/:id", checkAuth.managerAuth, UserLoginController.delete_user_login);

module.exports = router;