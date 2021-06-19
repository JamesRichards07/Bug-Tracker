import { NextFunction, Request, Response } from "express";
import {getRepository} from "typeorm";
import { user } from "../Models/user";
import { bug } from "../Models/bug";

export interface IGetUserAuthInfoRequest extends Request {
    userData: string
  }
require("dotenv").config();

const jwt = require("jsonwebtoken");

exports.genAuth = (req: IGetUserAuthInfoRequest,  res: Response, next: NextFunction) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        });
    }
}

exports.devAuth = async (req: IGetUserAuthInfoRequest,  res: Response, next: NextFunction) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;

        const User = await getRepository(user)
        .createQueryBuilder("User")
        .where("User.email = :email", {email: req.headers.email})
        .getOne();

        //console.log("User id: " + User?.id);

        const Bug = await getRepository(bug)
        .createQueryBuilder("Bug")
        .where("Bug.id = :id", {id: req.params.id})
        .getOne();

        console.log("Bug processor: " + Bug?.processor);

        if(Bug?.status === "Created"){
            const bugSubmitterUserId: string = Bug?.submitter;

            if(User?.id === bugSubmitterUserId || User?.position === "manager" || User?.position === "supervisor"){
                next();
            }
            else{
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
        }
        else{
            const bugProcessorUserId = Bug?.processor;

            if(User?.id === bugProcessorUserId || User?.position === "manager" || User?.position === "supervisor"){
                next();
            }
            else{
                return res.status(401).json({
                    message: "Auth failed"
                });
            }
        }
        
    } catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        });
    }
};

exports.supAuth = async (req: IGetUserAuthInfoRequest,  res: Response, next: NextFunction) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;

        const User = await getRepository(user)
        .createQueryBuilder("User")
        .where("User.email = :email", {email: req.headers.email})
        .getOne();

        if(User?.position === "supervisor" || User?.position === "manager"){
            next();
        }
        else{
            return res.status(401).json({
                message: "Auth failed"
            });
        }    
    } 
    catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        });
    }
};

exports.managerAuth = async (req: IGetUserAuthInfoRequest,  res: Response, next: NextFunction) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;

        const User = await getRepository(user)
        .createQueryBuilder("User")
        .where("User.email = :email", {email: req.headers.email})
        .getOne();

        if(User?.position === "manager"){
            next();
        }
        else{
            return res.status(401).json({
                message: "Auth failed"
            });
        }    
    } 
    catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        });
    }
};
