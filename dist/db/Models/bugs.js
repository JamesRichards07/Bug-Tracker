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
const typeorm_1 = require("typeorm");
const user_js_1 = require("./user.js");
let Bugs = class Bugs {
    constructor() {
        this.id = 0;
        this.created = "01/01/2020";
        this.application = "";
        this.description = "";
        this.submitter = 0;
        //submitter: number = 0;
        this.processor = 0;
        //processor: number = 0;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("increment", {
        zerofill: true,
    }),
    __metadata("design:type", Number)
], Bugs.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "date",
    }),
    __metadata("design:type", String)
], Bugs.prototype, "created", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Bugs.prototype, "application", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Bugs.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_js_1.Users, user => user.submitter),
    __metadata("design:type", Object)
], Bugs.prototype, "submitter", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_js_1.Users, user => user.processor),
    __metadata("design:type", Object)
], Bugs.prototype, "processor", void 0);
Bugs = __decorate([
    typeorm_1.Entity({ name: "bugs" })
], Bugs);
exports.Bugs = Bugs;
;
//# sourceMappingURL=bugs.js.map