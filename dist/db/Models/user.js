"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.UserRole = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var UserRole;
(function (UserRole) {
    UserRole["MANAGER"] = "manager";
    UserRole["SUPERVISOR"] = "supervisor";
    UserRole["DEVELOPER"] = "developer";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
;
var bugs_1 = require("./bugs");
var Users = /** @class */ (function () {
    function Users() {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.team = "";
        this.position = UserRole.DEVELOPER;
        this.submitter = 0;
        this.processor = 0;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", Number)
    ], Users.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 15
        }),
        __metadata("design:type", String)
    ], Users.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            length: 25
        }),
        __metadata("design:type", String)
    ], Users.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column({
            type: "varchar",
            unique: true,
        }),
        __metadata("design:type", String)
    ], Users.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Users.prototype, "team", void 0);
    __decorate([
        typeorm_1.Column({
            type: "set",
            enum: UserRole,
            default: [UserRole.DEVELOPER]
        }),
        __metadata("design:type", String)
    ], Users.prototype, "position", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return bugs_1.Bugs; }, function (bugs) { return bugs.submitter; }),
        __metadata("design:type", Object)
    ], Users.prototype, "submitter", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return bugs_1.Bugs; }, function (bugs) { return bugs.processor; }),
        __metadata("design:type", Object)
    ], Users.prototype, "processor", void 0);
    Users = __decorate([
        typeorm_1.Entity({ name: "User" })
    ], Users);
    return Users;
}());
exports.Users = Users;
//# sourceMappingURL=user.js.map