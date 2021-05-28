require("reflect-metadata");
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique, BaseEntity } from "typeorm";
export enum UserRole {
    MANAGER = "manager", 
    SUPERVISOR = "supervisor", 
    DEVELOPER = "developer"
};
import {bug} from "./bug";

@Entity({name: "user"})
@Unique(["email"])
export class user extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("varchar", {length: 15})
    firstName: string;

    @Column("varchar", {length: 25})
    lastName: string;

    @Column("varchar", {length: 255})
    email: string;

    @Column("varchar", {length: 255})
    team: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.DEVELOPER
    })
    position: UserRole;

    // @OneToMany(() => bug, (bugs) => bugs.subUser)
    // submitter: bug[];

    // @OneToMany(() => bug, (bugs) => bugs.processor)
    // processor: bug["id"];
}