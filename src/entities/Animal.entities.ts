import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { v4 as uuidv4 } from "uuid";
import {
    type_id,
    type_animalType,
    type_identificationNumber,
    type_race,
    type_age,
    type_weight,
    type_imagenUrl,
    AnimalTypeEnum
} from '../types/Animal.type'

@Entity()
export class Animal {
    @PrimaryGeneratedColumn("uuid")
    id: type_id

    @Column({ enum: AnimalTypeEnum })
    animalType: type_animalType

    @Column({ unique: true })
    identificationNumber: type_identificationNumber

    @Column()
    race: type_race

    @Column({ type: "date" })
    age: type_age

    @Column()
    weight: type_weight

    @Column()
    imagenUrl: type_imagenUrl

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

}

export default Animal
