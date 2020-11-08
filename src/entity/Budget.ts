import { User } from './User'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Budget {

    constructor(value: number, description: string, date: Date, user: User) {
        this.value = value;
        this.description = description;
        this.date = date;
        this.user = user;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'float' })
    value: number;

    @Column()
    description: string;

    @Column()
    date: Date;

    @ManyToOne(() => User)
    user: User;
}
