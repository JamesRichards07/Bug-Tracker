//export{}
const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user")

router.post("/", UserController.user_create_new);

router.get("/", UserController.user_get_all);

router.get("/:id", UserController.user_get_user);

router.delete("/:id", UserController.delete_user);

module.exports = router;