export{};
const multer = require("multer");

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
        cb(null, './public/images/')
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

exports.bugImage = upload.single("bugImage");


