//require ('reflect-metadata');
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, BaseEntity, JoinColumn } from "typeorm";
export enum BugStatus {
    CREATED = "Created", 
    UNDER_DEVELOPMENT = "Under_Development", 
    IN_REVIEW = "In_Review",
    COMPLETED = "Completed"
};
import {user} from "./user"

@Entity({name: "bug"})
export class bug extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    createdOn: Date;

    @Column("varchar", {length: 255})
    application: string;

    @Column("varchar", {length: 255})
    description: string;

    @Column("varchar", {nullable: true})
    imagePath: string;

    @Column({nullable: true})
    imageURL: string;

    @Column("varchar", {length: 255})
    submitter: string;

    // @ManyToOne(type => user, User => User.Bug)
    // @JoinColumn({name: "submitterUserID"})
    // submitterUserID: [];

    @Column("varchar", {length: 255, nullable: true})
    processor: string;

    // @ManyToOne(type => user, User => User.Bug)
    // @JoinColumn({name: "processorUserID"})
    // processorUserID: [];

    @Column({
        type: "enum",
        enum: BugStatus,
        default: BugStatus.CREATED
    })
    status: BugStatus;
};