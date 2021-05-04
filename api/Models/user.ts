import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
export enum UserRole {
    MANAGER = "manager", 
    SUPERVISOR = "supervisor", 
    DEVELOPER = "developer"
};
import {Bugs} from "./bugs.js";

@Entity({name: "Users"})
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({
        type: "varchar",
        length: 15
    })
    firstName: string;

    @Column({
        type: "varchar",
        length: 25
    })
    lastName: string;

    @Column({
        type: "varchar",
        unique: true,
    })
    email: string;

    @Column()
    team: string;

    @Column({
        type: "set",
        enum: UserRole,
        default: [UserRole.DEVELOPER]
    })
    position: UserRole[];

    @OneToMany(() => Bugs, bugs => bugs.submitter)
    submitter: Bugs["id"]

    @OneToMany(() => Bugs, bugs => bugs.processor)
    processor: Bugs["id"]
}