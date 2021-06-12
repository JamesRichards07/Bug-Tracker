import { NextFunction, Request, Response} from "express"
import {user} from "../Models/user";
const checkAuth = import('../Middleware/checkAuth');

// exports.user_new_user = async function(req: Request, res: Response){
//     console.log("start of user login");
//     const { firstName } = req.body;
//     const { lastName } = req.body;
//     const { email } = req.body;
//     const { team } = req.body;
//     const { position } = req.body;
//     const { password } = req.body;

//     const User = new user();
//     const User_Login = new user_login();

//     User.firstName = firstName;
//     User.lastName = lastName;
//     User.email = email;
//     User.team = team;
//     User.position = position;
//     //User.bugs_submitted = bugs_submitted;

//     User_Login.email = email;
//     User_Login.password = password;
                        
//     await User.save()
//     .then(result => {
//     console.log(result);
//     res.status(201).json({
//                                 message: "User created."
//                             });
//                         })
//                         .catch(err => {
//                             console.log(err);
//                             res.status(500).json({
//                                 error: err
//                             });
//                         });
//                     };

exports.user_get_all = async function(req: Request, res: Response){
    const User = await user.find();
        
    return res.json(User);
};

exports.user_get_user = async function(req: Request, res: Response){
    const { id } = req.params;

    await user.findOne(id)
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

exports.user_update_user = async function(req: Request, res: Response){
    const {id} = req.params;

    await user.findOne(id)
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

    const User = await user.findOne(id);

    for(const ops in req.body){
        if(User?.hasOwnProperty(ops)){
            User[ops] = req.body[ops];
        }
    };

    await User?.save()
    .then(result => {
        console.log(result);
        res.status(201).json(User);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
};

exports.delete_user = async function(req: Request, res: Response){
    const { id } = req.params;

    await user.delete(id)
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

exports.delete_user = async function(req: Request, res: Response, next: NextFunction){
    const { id }= req.params;

    await user.delete(id)
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