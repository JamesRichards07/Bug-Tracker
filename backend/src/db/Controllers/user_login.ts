import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import {user_login} from "../Models/user_login";
import {user} from "../Models/user";
import jwt = require("jsonwebtoken");
import { result } from "lodash";

const bcrypt = require("bcrypt");

exports.new_user_signup = async function(req: Request, res: Response, NextFunction){
    await user.find({email: req.body.email})
    .then(users => {
            if(users.length >= 1){
                return res.status(409).json({
                    message:"Email already exists."
                })
            }    
            else{
                bcrypt.hash(req.body.password, 10, async (err: Error, hash) => {
                    if(err){
                        return res.status(500).json({
                            error: err
                        });
                    }
                    else{
                        const User = new user();
                        const User_Login = new user_login;

                        User.firstName = req.body.firstName;
                        User.lastName = req.body.lastName;
                        User.email = req.body.email;
                        User.team = req.body.team;

                        User_Login.email = req.body.email;
                        User_Login.user = User;
                        User_Login.password = hash;

                        User.save();
                        User_Login.save()
                            .then(result => {
                                res.status(201).json({
                                message: "User login created."
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    };
                });
            };
        });
};

exports.user_login = async function(req: Request, res: Response, next: NextFunction){
    
    user_login.find({email: req.body.email})
        .then(user => {
            console.log(user);
            if(user.length < 1){
                return res.status(401).json({
                    message: "Auth failed"
                });
            };

            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err){
                    return res.status(401).json({
                        message: "Auth failed"
                    });
                }

                if (result) {
                    const token = jwt.sign({
                        email: user[0].email,
                    }, 
                    process.env.JWT_KEY, 
                    {
                        expiresIn: "1h"
                    })

                    return (
                        res.status(200).json({
                        message: "Auth successful",
                        token: token
                    }))
                }
                    
                res.status(401).json({
                    message: "Auth failed"
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.user_login_get_all = async function(req: Request, res: Response, next: NextFunction){
    const User_Login = await user_login.find();
        
    return res.json(User_Login);
};

exports.user_login_get_user_login = async function(req: Request, res: Response, next: NextFunction){
    const { id } = req.params;

    await user_login.findOne(id)
    .then(doc => {
        console.log("from database", doc);
        if(doc){
            res.status(200).json({
                user_login: doc
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

exports.user_login_update_user_login =async function(req: Request, res: Response, next: NextFunction){
    const { id } = req.params;

    const User_Login = await getRepository(user_login)
    .createQueryBuilder("User_Login")
    .where("User_Login.id = :id", req.params)
    .getOne();

    try{
        User_Login;
    }
    catch{
        return res.status(404).json({
            message: "No valid entry for provided ID "
        });
    }

    for(const ops in req.body){
        if(User_Login?.hasOwnProperty(ops)){
            User_Login[ops] = req.body[ops];
        }
    };

    await User_Login?.save()
    .then(result => {
        console.log(result);
        res.status(201).json(User_Login);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

    next();
};

exports.delete_user_login = async function(req: Request, res: Response, next: NextFunction){
    const { email } = req.body.email;
    
    // const User_Login = await getRepository(user_login)
    // .createQueryBuilder("User")
    // .where("User.email = :email", {email: email})
    // .getOne();

    await user_login.delete(email)
    .then(result => {
        res.status(200).json({
            message: "User successfully deleted.",
            req: {
                type: "Post",
                url: 'http://localhost:3000/user/',
                body: { firstName: "String", lastName: "String", email: "String", team: "String", position: "String"}
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