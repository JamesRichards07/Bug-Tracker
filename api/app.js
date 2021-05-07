"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
require("typeorm");
require('reflect-metadata');
var typeorm_1 = require("typeorm");
//import { Users } from "./Models/user";
var bugs = require("./Models/bugs.js");
var User = require("./Models/user.js");
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('Persistant data???');
// });
// app.get('/user', (req: Request, res: Response, next: NextFunction) => {
//   res.send('User data!');
// });
// app.get('/bugs', (req: Request, res: Response, next: NextFunction) => {
//   res.send('Bug data!');
// });
console.log("About to create a connection");
typeorm_1.createConnection()
    .then(function (connection) { return __awaiter(void 0, void 0, void 0, function () {
    var user, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("New user");
                user = new User();
                user.firstName = "James";
                user.lastName = "Richards";
                user.email = "hand2thesword@gmail.com";
                user.team = "Alpha";
                user.position = [];
                user.submitter = null;
                user.processor = null;
                (function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, connection.manager.save(User, user)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                }); }); });
                console.log("Users has been saved with id" + user.id);
                console.log("Loading from database...");
                return [4 /*yield*/, connection.manager.find(User)];
            case 1:
                users = _a.sent();
                console.log("Loaded users: ", users);
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (error) { return console.log(error); });
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