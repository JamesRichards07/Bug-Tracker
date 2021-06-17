export{}
const express = require("express");
const router = express.Router();
const BugController = require("../Controllers/bug");
const checkAuth = require('../Middleware/checkAuth');
const images = require("../Middleware/multer");

router.get("/", checkAuth.genAuth, BugController.bug_get_all);

router.get("/:id", checkAuth.genAuth, BugController.bug_get_bug);

router.post("/", checkAuth.genAuth, images.upload, BugController.bug_create_new);

router.patch("/:id", checkAuth.devAuth, BugController.bug_update_bug);

router.delete("/:id", checkAuth.managerAuth, BugController.delete_image, BugController.delete_bug);

module.exports = router;