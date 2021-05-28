import { Request, Response} from "express"
import { update } from "lodash";
import {bug} from "../Models/bug"

// class BugController{
    exports.bug_create_new = async function(req: Request, res: Response){
        const { application } = req.body;
        const { description } = req.body;
        // const { subUser } = req.body;
        
        const Bug = new bug();

        Bug.application = application;
        Bug.description = description;
        //Bug.subUser = subUser;

        await Bug.save();
        
        return res.status(201).json(Bug);
    };

    exports.bug_get_all = async function(req: Request, res: Response){
        const Bug = await bug.find();

        return res.json(Bug);
    }

    exports.bug_get_bug = async function(req: Request, res: Response){
        const { id } = req.params;

        const Bug = await bug.findOne(id);

        return res.json(Bug);
    }

    // exports.bug_update_bug = async function(req: Request, res: Response){
    //     const { id } = req.params;
    //     const { description } = req.body;
    //     const { application } = req.body;

    //     const Bug = await bug.findOne(id);

    //     return res.json(bug);
    // }

    exports.delete_bug = async function (req: Request, res: Response){
        const { id } = req.params;

        const Bug = await bug.findOne(id);

        await Bug?.remove();

        return res.status(200).json({
            message: "Bug successfully deleted.",
            req: {
                type: "Post",
                url: 'http://localhost:3000/bugs/',
                body: { description: "String", application: "String"}
            }
        });
    }

// export default new BugController();
