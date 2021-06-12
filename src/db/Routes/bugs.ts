export{}
const express = require("express");
const router = express.Router();
const BugController = require("../Controllers/bug");
const multer = require('multer');
const checkAuth = require('../Middleware/checkAuth');
// const upload = multer({dest: 'uploads/'})

const fileFilter = function(req, file, cb){

    if(file.mimetype === 'image/jpeg' || 'image/png'){
    cb(null, true);
    }
    else{
    cb(null, false);
    }
};

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({
    storage: storage, 
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get("/", BugController.bug_get_all);

router.get("/:id", checkAuth.devAuth, BugController.bug_get_bug);

router.post("/", checkAuth.devAuth, upload.single("bugImage"), BugController.bug_create_new);
//router.post("/", checkAuth, BugController.bug_create_new);

router.patch("/:id", checkAuth.supAuth, BugController.bug_update_bug);

router.delete("/:id", checkAuth.managerAuth, BugController.delete_bug);

module.exports = router;