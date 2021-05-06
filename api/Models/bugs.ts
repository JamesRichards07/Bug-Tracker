import { type, userInfo } from 'node:os';
import { Type } from 'typescript';
require ('reflect-metadata');
import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne } from "typeorm";
// const typeorm = require("typeorm");
// const Entity = typeorm.Entity;
// const PrimaryGeneratedColumn = typeorm.PrimaryGeneratedColumn;
// const Column = typeorm.Column;
// const Timestamp = typeorm.Timestamp;
// const ManyToOne = typeorm.ManyToOne;
import {Users} from "./user.js"

@Entity()
export class Bugs {

    @PrimaryGeneratedColumn({
        zerofill: true,
    })
    id: number;

    @Column({
        type: "timestamp"
    })
    created: Timestamp;

    @Column()
    application: string;

    @Column()
    description: string;

    @ManyToOne(() => Users, user => user.submitter)
    //submitter: Users["id"];
    submitter: string;

    @ManyToOne(() => Users, user => user.processor)
    //processor: Users["id"];
    processor: string;

};