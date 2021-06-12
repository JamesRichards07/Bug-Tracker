import { NextFunction, Request, Response} from "express"
import { fromPairs, update } from "lodash";
import {bug} from "../Models/bug";
import {user} from "../Models/user";
const bugImage = require("../Middleware/multer");
interface MulterRequest extends Request {file: any};

exports.bug_create_new = async (req: MulterRequest, res: Response, next: NextFunction) => {
    
    const filename: string = req.file.originalname;

    console.log(req.file);

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
    Bug.imageURL = "/images/" + filename;
    Bug.imagePath = "/public/images" + filename;

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

exports.bug_get_all = async (req: Request, res: Response) => {
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
                user: doc
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
    const {id} = req.params;
    const Bug = await bug.findOne(id);

    await bug.findOne(id)
    .then(doc => {
        console.log("from database", doc);
        if(doc){
            res.status(200).json({
                user: doc
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

    for(let ops in req.body){
        if(Bug?.hasOwnProperty(ops)){
            Bug[ops] = req.body[ops];
            await Bug.save();
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