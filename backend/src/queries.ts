
import { NextFunction, Request, Response} from "express";
import { getRepository, Repository } from "typeorm";
import {bug} from "./db/Models/bug";
import {user} from "./db/Models/user";

const userID = async(req: Request, res: Response, next: NextFunction) => {
    const getUserId = req.body.email;

    const userid = await getRepository(user)
    .createQueryBuilder("getUserID")
    .where("User.id = :id", {id: getUserId})
    .getOne();
    
    try{
        userid;
    }
    catch{
        return res.status(404).json({
            message: "No valid entry."
        });
    }

    return userid;
}

const bugID = async(req: Request, res: Response, next: NextFunction) => {
    const userid = userID;

    const bugid = await getRepository(bug)
    .createQueryBuilder("getUserID")
    .where("Bug.submitter or Bug.processor = :id", {submitter: userid, processor: userid})
    .getMany();

    try{
        bugid;
    }
    catch{
        return res.status(404).json({
            message: "No valid entry for provided ID."
        });
    };
    
    return bugid;
}

const bugsSubmittedByUser = async (userID) => {

    await getRepository(bug)
    .createQueryBuilder("bugsSubmittedByUser")
    .where("Bug.submiiter = :userID", {submitter: userID})
    .getMany();
}

const bugsProcessedByUser = async (userID) => {
    await getRepository(bug)
    .createQueryBuilder("bugsSubmittedByUser")
    .where("Bug.processor = :userID", {processor: userID})
    .getMany();
}