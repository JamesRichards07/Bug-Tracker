export{}
const express = require("express");
const router = express.Router();
const BugController = require("../Controllers/bug")

router.post("/", BugController.bug_create_new);

router.get("/", BugController.bug_get_all);

router.get("/:id", BugController.bug_get_bug);

router.delete("/:id", BugController.delete_bug);

module.exports = router;