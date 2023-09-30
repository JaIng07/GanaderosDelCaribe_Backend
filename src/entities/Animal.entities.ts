import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { v4 as uuidv4 } from "uuid";

@Entity()
export class Animal {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ enum: ['ganado'] })
    animalType: string

    @Column({ unique: true })
    identificationNumber: number

    @Column()
    race: string

    @Column({ type: "date"})
    age: Date

    @Column()
    weight: number

    @Column()
    imagenUrl: string

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

}

export default Animal
