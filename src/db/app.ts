const express =  require("express");
//import * as express from "express";
//import express = require('express');
const app = express();
const metadata = require('reflect-metadata');
import {Request, Response, NextFunction} from "express";
import {getConnectionManager, Connection, getConnection} from "typeorm";

import { NewLineKind } from 'typescript';

const bugs = require("./Models/bugs.js");

const User = require("./Models/user.js");

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Persistant data???');

});

app.get('/user', (req: Request, res: Response, next: NextFunction) => {
  res.send('User data!');
});

app.get('/bugs', (req: Request, res: Response, next: NextFunction) => {
  res.send('Bug data!');
});

const connectionManager = getConnectionManager();
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