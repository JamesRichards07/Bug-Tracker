import { NextFunction, Request, Response} from "express";
import { getRepository } from "typeorm";
import {user} from "../Models/user";
import {user_login} from "../Models/user_login";
const checkAuth = import('../Middleware/checkAuth');

exports.user_get_all = async function(req: Request, res: Response){
    const User = await user.find();
        
    return res.json(User);
};

exports.user_get_user = async function(req: Request, res: Response){
    const { id } = req.params;

    await user.findOne(id)
    .then(doc => {
        if(doc){
            res.status(200).json({
                user: doc
            });
        }
        else{
            res.status(404).json({
                message: "No valid entry for provided ID "
            })
        };
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};

exports.user_update_user = async function(req: Request, res: Response){

    const User = await getRepository(user)
    .createQueryBuilder("User")
    .where("User.id = :id", req.params)
    .getOne();
    
    
    try{
        User;
    }
    catch{
        return res.status(404).json({
            message: "No valid entry for provided ID "
        });
    }

    for(const ops in req.body){
        if(User?.hasOwnProperty(ops)){
            User[ops] = req.body[ops];
        }
    };

    await User?.save()
    .then(result => {
        res.status(201).json(User);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};

exports.delete_user = async function(req: Request, res: Response, next: NextFunction){
    
    const {id} = req.params;
    const email = req.body.email;

    const userLoggedIn = await getRepository(user_login)
    .createQueryBuilder("userLogin")
    .where("userLogin.email = :email", {email: email})
    .getOne();

    const selectedUser = await getRepository(user)
    .createQueryBuilder("User")
    .where("User.id = :id", {id: id })
    .getOne();

    if(userLoggedIn !== undefined && selectedUser !== undefined && selectedUser.email === email){

    }
    else{
        return console.log("User not found.")
    };

    try{
        userLoggedIn;

        const ul_id:any = userLoggedIn?.id;

        await user_login.delete(ul_id);
        await user.delete(id)
        .then(result => {
            res.status(200).json({
                message: "User successfully deleted.",
                req: {
                    type: "Post",
                    url: 'http://localhost:8080/user/',
                    body: { firstName: "String", lastName: "String", email: "String", team: "String", position: "String"}
                }
            });
        })
    }
    catch (error) {
        res.status(500).json({
            message: "No valid entry provided."
        });
    }
};