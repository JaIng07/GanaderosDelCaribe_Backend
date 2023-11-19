import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"
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

    @Column({ type: "date" })
    date: Date

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

    @OneToOne(() => Animal)
    @JoinColumn()
    animal: Animal

}

export default StatusAnimal