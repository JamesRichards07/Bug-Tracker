//require ('reflect-metadata');
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, BaseEntity, JoinColumn } from "typeorm";
import {user} from "./user"

@Entity({name: "bug"})
export class bug extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @CreateDateColumn()
    createdOn: Date;

    @Column("varchar", {length: 255})
    application: string;

    @Column("varchar", {length: 255})
    description: string;

    // @ManyToOne(
    //     () => user, 
    //     (subUser) => subUser.submitter
    // )
    // @JoinColumn({name: "SubmitterUserID"})
    // subUser: user;

    // @ManyToOne(
    //     () => user, 
    //     (users) => users.processor
    // )
    // @JoinColumn({name: "ProcessorUserID"})
    // user: user;
    //processor: Users["id"];
    // processor: string;
};