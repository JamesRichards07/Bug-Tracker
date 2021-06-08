export{}
const express = require("express");
const router = express.Router();
const BugController = require("../Controllers/bug");
const multer = require('multer');
const checkAuth = import('../Middleware/checkAuth');
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
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname);
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

router.get("/:id", BugController.bug_get_bug);

router.post("/", checkAuth, upload.single("bugImage"), BugController.bug_create_new);

router.patch("/:id", checkAuth, BugController.bug_update_bug);

router.delete("/:id", checkAuth, BugController.delete_bug);

module.exports = router;