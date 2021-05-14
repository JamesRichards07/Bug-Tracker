"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const express =  require("express");
//import * as express from "express";
const express = require("express");
const app = express();
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const bugs = require("./Models/bugs.js");
const User = require("./Models/user.js");
app.get('/', (req, res, next) => {
    res.send('Persistant data???');
});
app.get('/user', (req, res, next) => {
    res.send('User data!');
});
app.get('/bugs', (req, res, next) => {
    res.send('Bug data!');
});
const connectionManager = typeorm_1.getConnectionManager();
//   .then(async connection => {
//     console.log("New user");
//     const user = new User();
//     user.firstName = "James";   
//     user.lastName = "Richards";
//     user.email = "hand2thesword@gmail.com";
//     user.team = "Alpha";
//     user.position = [];
//     user.submitter = null;     
//     user.processor = null;
//     await connection.manager.save(User, user);
//     console.log("Users has been saved with id" + user.id);
//     console.log("Loading from database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);
//   })
//   .catch(error => console.log(error));
// const newUser = async() => {
// //app.post('/Users', (req: Request, res: Response, next: NextFunction) => {
//   const users = await getConnection()
//     .createQueryBuilder()
//     .insert()
//     .into(user)
//     .values([
//       {firstName: "James",   
//       lastName: "Richards",
//       email: "hand2thesword@gmail.com",
//       team: "Alpha",
//       position: [],
//       submitter: null,     
//       processor: null     
//       }]
//     )
//     .execute();
//   users;
//   console.log("User created:" + users);
// };
//});
// console.log(newUser);
// import { createConnection, Connection, getConnection } from 'typeorm';
// import { Users } from './models/user';
// const newBug = async() => {
//   //app.post("/bugs", (req: Request, res: Response, next: NextFunction) => {
//     const bug = await getConnection()
//     .createQueryBuilder()
//     .insert()
//     .into(bugs)
//     .values([
//       {application: "Math",
//       description: "My first bug",
//       submitter: "James",  
//       processor: null    
//     }]
//     )
//     .execute();
//     bug;
//     console.log("Bug created:" + bug);
//};
//})
// newBug;
// console.log(newBug);
module.exports = app;
//# sourceMappingURL=app.js.map