import express, { Application, Request, Response, NextFunction, response } from "express";
const app = express();

require("dotenv").config();
const typeorm = require("typeorm");
import 'reflect-metadata';

const bugRoutes = require("./Routes/bugs");
const userRoutes = require("./Routes/users");
const user_loginRoutes = require("./Routes/user_login");

app.use('/static', express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    'Access-Control-Allow-Headers', 
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, imageURL, email"
    );
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS"
    );
    
  next();
})

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
