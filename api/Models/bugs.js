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
exports.Bugs = void 0;
require('reflect-metadata');
var typeorm_1 = require("typeorm");
// const typeorm = require("typeorm");
// const Entity = typeorm.Entity;
// const PrimaryGeneratedColumn = typeorm.PrimaryGeneratedColumn;
// const Column = typeorm.Column;
// const Timestamp = typeorm.Timestamp;
// const ManyToOne = typeorm.ManyToOne;
var user_js_1 = require("./user.js");
var Bugs = /** @class */ (function () {
    function Bugs() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({
            zerofill: true,
        }),
        __metadata("design:type", Number)
    ], Bugs.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamp"
        }),
        __metadata("design:type", typeorm_1.Timestamp)
    ], Bugs.prototype, "created", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Bugs.prototype, "application", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Bugs.prototype, "description", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_js_1.Users; }, function (user) { return user.submitter; }),
        __metadata("design:type", String)
    ], Bugs.prototype, "submitter", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_js_1.Users; }, function (user) { return user.processor; }),
        __metadata("design:type", String)
    ], Bugs.prototype, "processor", void 0);
    Bugs = __decorate([
        typeorm_1.Entity()
    ], Bugs);
    return Bugs;
}());
exports.Bugs = Bugs;
;
//# sourceMappingURL=bugs.js.map