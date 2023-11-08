import AppDataSource from "../database/config"
import { Animal, User } from "../entities"
import { type_identificationNumber } from "../types/Animal.type"
import { FindOperator, Not } from "typeorm"

interface FindConditions {
  identificationNumber?: number;
  identificationCard?: number;
  email?: string;
  id?: FindOperator<string>;
}

/**
 * La función verifica si un número de identificación existe en la tabla de 'animal' de la base de dato
 * y lanza un error si no existe.
 * @param {type_identificationNumber | number} identificationNumber - El parámetro `identificationNumber` es una
 * variable de tipo `type_identificationNumber` o `number`. Se utiliza para especificar el número de identificación de un
 * animal.
 */
export const identificationNumberExists = async( identificationNumber: type_identificationNumber, id?: string ) => {
  const animal = AppDataSource.getRepository(Animal)
  let findConditions:FindConditions = { identificationNumber };
  if (id) findConditions = { ...findConditions, id: Not(id) }
  const res = await animal.findOneBy(findConditions)
  if(res) throw new Error('El numero de identificacion ya existe')
}

export const emailExists = async( email: string, idUser?:string ) => {
  const user = AppDataSource.getRepository(User)
  let findConditions:FindConditions = { email };
  if (idUser) findConditions = { ...findConditions, id: Not(idUser) }
  const res = await user.findOneBy(findConditions)
  console.log("res email", res)
  if(res) throw new Error('El email ya existe')
}

export const identificationCardExists = async( identificationCard: number , idUser?:string) => {
  const user = AppDataSource.getRepository(User)
  let findConditions:FindConditions = { identificationCard };
  if (idUser) findConditions = { ...findConditions, id: Not(idUser) }
  const res = await user.findOneBy(findConditions)
  if(res) throw new Error('La cedula ya existe')
}
