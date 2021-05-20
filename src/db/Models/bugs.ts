require ('reflect-metadata');
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import {Users} from "./user"

@Entity({name: "bugs"})
export class Bugs {

    @PrimaryGeneratedColumn("increment", {
        zerofill: true,
    })
    id: number = 0;

    @Column({
        type: "date",
    })
    created: string = "";

    @Column({nullable: false})
    application: string = "";

    @Column()
    description: string = "";

    @ManyToOne(() => Users, user => user.submitter)
    submitter: Users["id"] = 0;
    //submitter: number = 0;

    @ManyToOne(() => Users, user => user.processor)
    processor: Users["id"] = 0;
    //processor: number = 0;

};