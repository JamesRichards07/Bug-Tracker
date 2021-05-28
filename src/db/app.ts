import express, { Application, Request, Response, NextFunction, response } from "express";
const app = express();
import { result } from "lodash";
const typeorm = require("typeorm");
import 'reflect-metadata';
import {getConnectionManager, Connection, getConnection, createConnection, EntityManager} from "typeorm";

const bugRoutes = require("./Routes/bugs");
const userRoutes = require("./Routes/users");

app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send("Get works!");
});

app.use("/bugs", bugRoutes);
app.use("/users", userRoutes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500);
  res.json({
    error:{
      message: error.message
    }
  })
})

module.exports = app;