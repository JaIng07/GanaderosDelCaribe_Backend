import AppDataSource from "../database/config"
import { Animal } from "../entities"
import { type_identificationNumber } from "../types/Animal.type"

/**
 * The function checks if an identification number exists in the Animal repository and throws an error
 * if it doesn't.
 * @param {type_identificationNumber | number} identificationNumber - The `identificationNumber` parameter is a
 * variable of type `type_identificationNumber`. It is used to specify the identification number of an
 * animal.
 */
export const identificationNumberExists = async( identificationNumber: type_identificationNumber ) => {

  const animal = AppDataSource.getRepository(Animal)

  const idNumberExists = await animal.findOneBy({ identificationNumber: identificationNumber })

  if(idNumberExists) throw new Error('El numero de identificacion ya existe')

}