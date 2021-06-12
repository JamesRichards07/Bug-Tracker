import { NextFunction, Request, Response } from "express";
export interface IGetUserAuthInfoRequest extends Request {
    userData: string
  }
require("dotenv").config();

const jwt = require("jsonwebtoken");

module.exports = (req: IGetUserAuthInfoRequest,  res: Response, next: NextFunction) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Auth failed"
        });
    }
};