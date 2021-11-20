import { Console } from "console";
import { NextFunction, Request, Response} from "express";
import { getRepository } from "typeorm";
import {bug} from "../Models/bug";
import {user} from "../Models/user";
const dateNow = require("../Middleware/multer");
interface MulterRequest extends Request {file: any};

exports.bug_create_new = async (req: MulterRequest, res: Response, next: NextFunction) => {

    const email = req.headers.email;

    const User = await getRepository(user)
    .createQueryBuilder("User")
    .where("User.email = :email", {email: email})
    .getOne();

    const Bug = new bug();

    let filename: string = "";

    if(User !== undefined && req.file !== undefined){
        filename = req.file.path.split("/")[2];
        Bug.imageURL = "localhost:8080/static/images/" + filename;
        Bug.imagePath = req.file.path;
    }
    else if(User !== undefined){

    }
    else{
        return console.log("User not found.")
    }

    Bug.application = req.body.application;
    Bug.description = req.body.description;
    Bug.submitter = User.id;

    await Bug.save()
    .then(result => {
        console.log(result);
        res.status(201).json(Bug);
        })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        });
    });
};

exports.bug_get_all = async (req: Request, res: Response, next: NextFunction) => {
    const Bug = await bug.find();

    return res.json(Bug);
};

exports.bug_get_bug = async (req: Request, res: Response) => {
    const { id } = req.params;

    await bug.findOne(id)
    .then(doc => {
        console.log("from database", doc);
        if(doc){
            res.status(200).json({
                bug: doc
            });
        }
        else{
            res.status(404).json({message: "No valid entry for provided ID "})
        };
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        });
    });
};

exports.bug_update_bug = async (req: Request, res: Response) => {

    const Bug = await getRepository(bug)
        .createQueryBuilder("Bug")
        .where("Bug.id = :id", req.params)
        .getOne();
    
    try{
        Bug;
    }
    catch{
        return res.status(404).json({
            message: "No valid entry for provided ID "
        });
    }

    for(let ops in req.body){
        if(Bug?.hasOwnProperty(ops)){
            Bug[ops] = req.body[ops];
        }
    };

    await Bug?.save()
    .then(result => {
        console.log(result);
        res.status(201).json(Bug);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

// Deletion is very insecure as it only checks the email address listed in the header. 
// I would remedy this issue be including the email address in the JWT instead. 

exports.delete_bug = async (req: Request, res: Response) => {
    const { id } = req.params;

    const Bug = await getRepository(bug)
        .createQueryBuilder("Bug")
        .where("Bug.id = :id", req.params)
        .getOne();

    try{
        Bug;
    }
    catch{
        return res.status(404).json({
            message: "No valid entry for provided ID "
        });
    }

    await bug.delete(id)
    .then(result => {
        res.status(200).json({
        message: "Bug successfully deleted.",
            req: {
                type: "Post",
                url: 'http://localhost:8080/bugs/',
                body: { description: "String", application: "String"}
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.delete_image = async (req: Request, res: Response, next: NextFunction) => {
    const Bug = await getRepository(bug)
        .createQueryBuilder("Bug")
        .where("Bug.id = :id", req.params)
        .getOne();

    const fs = require("fs");
    
    try{
        Bug;
        console.log("D");
    }
    catch{
        return res.status(404).json({
            message: "No valid entry for provided ID "
        });
    }

    if(Bug?.imagePath !== null){
        fs.unlink(Bug?.imagePath, (err) => {
            if(err) {
                throw err;
            }
            console.log("File is deleted.")
        });
    }

    next();
}