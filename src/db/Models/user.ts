require("reflect-metadata");
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique, BaseEntity } from "typeorm";
export enum UserRole {
    MANAGER = "manager", 
    SUPERVISOR = "supervisor", 
    DEVELOPER = "developer"
};
import {bug} from "./bug";

@Entity({name: "user"})
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

    @Column("varchar", {length: 255, nullable: true})
    bugs_submitted: string[];

    @OneToMany(type => bug,  bug => bug.id)
    bugsIdSubmitted: bug[];

    @Column("varchar", {length: 255, nullable: true})
    bugs_processor: string[];

    @OneToMany(type => bug, bugs => bugs.id)
    bugsIdProcessor: bug[];
}