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

app.use('/uploads', express.static('uplaods'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/bugs", bugRoutes);
app.use("/users", userRoutes);
app.use("/user_login", user_loginRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500);
  res.json({
    error:{
      message: error.message
    }
  })
})

module.exports = app;