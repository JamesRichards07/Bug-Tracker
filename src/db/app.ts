import express, { Application, Request, Response, NextFunction, response } from "express";
const app = express();

require("dotenv").config();
import { result } from "lodash";
const typeorm = require("typeorm");
import 'reflect-metadata';
import {getConnectionManager, Connection, getConnection, createConnection, EntityManager} from "typeorm";

const bugRoutes = require("./Routes/bugs");
const userRoutes = require("./Routes/users");
const user_loginRoutes = require("./Routes/user_login");

app.use('/static', express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Autorization, imageURL, email");

  // if(req.Method === "OPTIONS"){
  //     res.header("Access-Allow-Control-Methods", "Get, Post, Put, Patch, Delete");
  //     return res.status(200).json({})
  // }
  next();
})

app.use("/bugs", bugRoutes);
app.use("/users", userRoutes);
app.use("/user_login", user_loginRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500);
  console.log(error);
  
  res.json({
    error:{
      message: error.message
    }
  })
})

module.exports = app;
