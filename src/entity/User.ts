import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    constructor (name: string, email: string){
        this.name = name
        this.email = email
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

}
