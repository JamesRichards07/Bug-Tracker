const express = require('express');
const app = express();
const typeORM = require("typeorm");
require('reflect-metadata');
import {Request, Response, NextFunction} from "express";
import { connect } from "node:http2";
import {createConnection, Connection, getConnection } from "typeorm";

import { NewLineKind } from 'typescript';
import { Users } from "./Models/user";

const bugs = require("./Models/bugs.js");

const user = require("./Models/user.js");

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Persistant data???');

});

app.get('/users', (req: Request, res: Response, next: NextFunction) => {
  res.send('User data!');
});

app.get('/bugs', (req: Request, res: Response, next: NextFunction) => {
  res.send('Bug data!');
});

createConnection()
  .then(async connection => {
    let users = new Users();
    users.firstName = "James";   
    users.lastName = "Richards";
    users.email = "hand2thesword@gmail.com";
    users.team = "Alpha";
    users.position = [];
    users.submitter = null;     
    users.processor = null;
    
    async() => await connection.manager.save(users);
    console.log("Users has been saved");
  })
  .catch(error => console.log(error));

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