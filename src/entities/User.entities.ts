import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { v4 as uuidv4 } from "uuid";
import { user_id, user_email, user_password, UserRolEnum, user_rol, user_username, user_identificationCard } from '../types/User.type'
import Activity from "./Activity.entities";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: user_id

	@Column({ type: "varchar"})
	username: user_username

	@Column({ type: "varchar"})
	password: user_password

	@Column({ type: "varchar", unique: true})
	email: user_email

	@Column({ enum: UserRolEnum })
	rol: user_rol

	@Column({ type: "integer", unique: true})
	identificationCard: user_identificationCard

	@OneToMany(() => Activity, (activity) => activity.user)
	activity: Activity[]

	constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }

}

export default User
