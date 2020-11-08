import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Budget } from './Budget'

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

    @OneToMany(() => Budget, budget => budget.user)
    //budgets: budgets[];

}
