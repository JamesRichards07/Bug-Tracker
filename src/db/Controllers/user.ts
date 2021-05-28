import { Request, Response} from "express"
import { update } from "lodash";
import {user} from "../Models/user"

// class UserController{
exports.user_create_new = async function (req: Request, res: Response){
    const { firstName } = req.body;
    const { lastName } = req.body;
    const { email } = req.body;
    const { team } = req.body;
    const { position } = req.body;

    const User = new user();
    User.firstName = firstName;
    User.lastName = lastName;
    User.email = email;
    User.team = team;
    User.position = position;

    await User.save();
    
    return res.status(201).json(User);
};

exports.user_get_all = async function(req: Request, res: Response){
    const User = await user.find();

    return res.json(User);
}

exports.user_get_user = async function(req: Request, res: Response){
    const { id } = req.params;

    const User = await user.findOne(id);

    return res.json(User);
}

exports.delete_user = async function(req: Request, res: Response){
    const { id } = req.params;

    const User = await user.findOne(id);

    await User?.remove();

    return res.status(200).json({
        message: "User successfully deleted.",
        req: {
            type: "Post",
            url: 'http://localhost:3000/user/',
            body: { firstName: "String", lastName: "String", email: "String", team: "String", position: "String"}
        }
    });
}

//export default new UserController;