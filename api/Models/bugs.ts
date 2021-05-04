import { userInfo } from 'node:os';
import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, Timestamp, ManyToOne } from "typeorm";
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