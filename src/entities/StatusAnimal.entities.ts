import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { v4 as uuidv4 } from "uuid";
import Animal from "./Animal.entities";
import { StatusEnum } from "../types/StatusAnimal";

@Entity()
export class StatusAnimal {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({enum: StatusEnum})
    status: string

    @Column()
    description: string

    @Column()
    date: string

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

    @ManyToOne(() => Animal, (animal) => animal.statuses)
    animal: Animal

}

export default StatusAnimal