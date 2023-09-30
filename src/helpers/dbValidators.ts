import AppDataSource from "../database/config"
import { Animal } from "../entities"
import { type_identificationNumber } from "../types/animal.type"

/**
 * La función verifica si un número de identificación existe en la tabla de 'animal' de la base de dato
 * y lanza un error si no existe.
 * @param {type_identificationNumber | number} identificationNumber - El parámetro `identificationNumber` es una
 * variable de tipo `type_identificationNumber` o `number`. Se utiliza para especificar el número de identificación de un
 * animal.
 */
export const identificationNumberExists = async( identificationNumber: type_identificationNumber ) => {

  const animal = AppDataSource.getRepository(Animal)

  const idNumberExists = await animal.findOneBy({ identificationNumber: identificationNumber })

  if(idNumberExists) throw new Error('El numero de identificacion ya existe')

}