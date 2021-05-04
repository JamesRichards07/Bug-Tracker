"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
require("reflect-metadata");
require("typeorm");
/*const http = require('http');

const port = 8080;

console.log("Before server");
http.createServer(app).listen(port, function(err: any)
{
  if (err)
  {
    console.log(err);
  }
  else
  {
    console.log(`Example app listening at http://localhost:${port}`)
  }
});*/
// console.log("Before Bugs");
// const bugs = require("./models/bugs.js");
// console.log("Before User");
// const User = require("./models/user.js");
console.log("app.js");
app.get('/', (req, res, next) => {
    res.send('Persistant data???');
});
app.get('/users', (req, res, next) => {
    res.send('User data!');
});
app.get('/bugs', (req, res, next) => {
    res.send('Bug data!');
});
/*import { createConnection, Connection, getConnection } from 'typeorm';
import { Users } from './models/user';
import { Bugs } from './models/bugs';

console.log("Stated");
async () => {createConnection()};

console.log("Connection Created");

const newUser = async() => {
//app.post('/Users', (req: Request, res: Response, next: NextFunction) => {
  const user = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Users)
    .values([
      {firstName: "James",
      lastName: "Richards",
      email: "hand2thesword@gmail.com",
      team: "Alpha",
      position: [],
      submitter: null,
      processor: null
      }]
    )
    .execute();

  user;
};
//});

newUser;

console.log(newUser);

// import { createConnection, Connection, getConnection } from 'typeorm';
// import { Users } from './models/user';

const newBug = async() => {
  //app.post("/bugs", (req: Request, res: Response, next: NextFunction) => {
    const bug = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Bugs)
    .values([
      {application: "Math",
      description: "My first bug",
      submitter: "James",
      processor: null
    }]
    )
    .execute();

    bug;
};
//})

newBug;

console.log(newBug);*/
module.exports = app;
//# sourceMappingURL=app.js.map