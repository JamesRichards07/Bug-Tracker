require("reflect-metadata");
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, Unique, BaseEntity, JoinColumn } from "typeorm";
import {user} from "./user";

@Entity({name: "user_login"})
export class user_login extends BaseEntity{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", {length: 255})
    email: string;

    @Column("varchar", {length: 255})
    password: string;

    @OneToOne(() => user)
    @JoinColumn()
    user: user;
}