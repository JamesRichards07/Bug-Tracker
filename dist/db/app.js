"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
//import * as express from "express";
//import express = require('express');
var app = express_1.default();
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var bugs = require("./Models/bugs.ts");
var User = require("./Models/user.ts");
app.get('/', function (req, res, next) {
    res.send('Persistant data???');
});
app.get('/user', function (req, res, next) {
    res.send('User data!');
});
app.get('/bugs', function (req, res, next) {
    res.send('Bug data!');
});
var connection = typeorm_1.getConnection();
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