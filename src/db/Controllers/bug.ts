import { NextFunction, Request, Response} from "express";
import { getRepository } from "typeorm";
import {bug} from "../Models/bug";
import {user} from "../Models/user";
const dateNow = require("../Middleware/multer");
interface MulterRequest extends Request {file: any};

exports.bug_create_new = async (req: MulterRequest, res: Response, next: NextFunction) => {
    
    console.log(req.file.path);

    const filename: string = req.file.path.split("/")[2];

    //let dateNow: number = Date.now();
    //console.log("filename: " + JSON.stringify(filename));

    const { application } = req.body;
    const { description } = req.body;
    const { submitterUserID } = req.body;
    let { submitter } = {submitter: "Rick James"}

    const User = await user.findOne(submitterUserID);
    const Bug = new bug();

    if(User?.firstName && User?.lastName){
        submitter = User.firstName + " " + User.lastName + " userId:" + User.id;
    }

    Bug.application = application;
    Bug.description = description;
    Bug.submitterUserID = submitterUserID;
    Bug.submitter = submitter;
    Bug.imageURL = "localhost:3000/static/images/" + filename;
    Bug.imagePath = req.file.path;

    await Bug.save()
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

    let Bug: any = {};
    
    try{
        Bug = await getRepository(bug)
        .createQueryBuilder("Bug")
        .where("Bug.id = :id", req.params)
        .getOne();
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

exports.delete_bug = async (req: Request, res: Response) => {
    const { id } = req.params;
    let Bug: any = {};

    try{
        Bug = await getRepository(bug)
        .createQueryBuilder("Bug")
        .where("Bug.id = :id", req.params)
        .getOne();
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
                url: 'http://localhost:3000/bugs/',
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
    let Bug: any = {};
    const fs = require("fs");
    
    try{
        Bug = await getRepository(bug)
        .createQueryBuilder("Bug")
        .where("Bug.id = :id", req.params)
        .getOne();
    }
    catch{
        return res.status(404).json({
            message: "No valid entry for provided ID "
        });
    }

    console.log("image Path: " + Bug.imagePath);
    console.log("image type: " + typeof Bug.imagePath)

    fs.unlink(Bug.imagePath, (err) => {
        if(err) {
            throw err;
        }
        console.log("File is deleted.")
    });

    next();
}