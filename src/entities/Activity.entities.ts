
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { v4 as uuidv4 } from "uuid";
import User from "./User.entities";

@Entity()
export class Activity {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  column: string

  @Column()
  date: string

  @ManyToOne(() => User, (user) => user.activity)
  user: User

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

}

export default Activity
