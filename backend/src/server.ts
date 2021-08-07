import express, { Application, Request, Response, NextFunction } from "express";
import "reflect-metadata"
import {createConnection} from "typeorm";
const app = require('./db/app.ts'); 

createConnection()
  .then(async (connection) => {
    const http = require('http');
    const port = 8080;
  
    const server = http.createServer(app);
  
    server.listen(port, function(err: any){
      if (err){
      console.log(err);
      }
      else{
      console.log(`Example app listening at http://localhost:${port}`)
      }
    });
  })
  .catch((error) => console.log(error))

