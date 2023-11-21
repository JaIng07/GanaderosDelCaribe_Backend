import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { v4 as uuidv4 } from "uuid";
import {
    type_id,
    type_animalType,
    type_identificationNumber,
    type_race,
    type_birthdate,
    type_weight,
    type_imagenUrl,
    AnimalTypeEnum
} from '../types/Animal.type'
import StatusAnimal from "./StatusAnimal.entities";

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
    birthdate: type_birthdate

    @Column()
    weight: type_weight

    @Column()
    imagenUrl: type_imagenUrl

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

    @OneToMany(() => StatusAnimal, (status) => status.animal)
    statuses: StatusAnimal[]

}

export default Animal
