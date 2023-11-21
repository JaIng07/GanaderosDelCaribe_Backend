import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { v4 as uuidv4 } from "uuid";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({ enum: ["suministros", "medicamentos", "equipos", "otros"] })
    type: string

    @Column()
    amount: number

    @Column()
    description: string

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

}

export default Inventory
