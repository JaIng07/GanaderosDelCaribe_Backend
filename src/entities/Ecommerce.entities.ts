import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { v4 as uuidv4 } from "uuid";

@Entity()
export class Ecommerce {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    productName: string

    @Column()
    price: number

    @Column()
    stock: number

    @Column({ enum: ['Cabezas', 'Litros', 'Kilogramos', 'Gramos', 'Docenas', 'Unidades', 'Metros cuadrados'] })
    unit: string

    @Column()
    description: string

    @Column()
    date: string

    @Column()
    img: string

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

}

export default Ecommerce
