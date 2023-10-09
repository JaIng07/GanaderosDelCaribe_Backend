import { Request, Response } from "express";

import AppDataSource from "../database/config";
import { Animal } from "../entities/Animal.entities";

/**
 * La función `getAnimals` obtiene todos los animales de una fuente de datos y los devuelve en orden
 * inverso.
 * @param {Request} req - El parámetro `req` es un objeto que representa la solicitud HTTP hecha al
 * servidor. Contiene información como el método de la solicitud, encabezados, parámetros de consulta y cuerpo.
 * @param {Response} res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta
 * HTTP de vuelta al cliente. Contiene métodos y propiedades que le permiten establecer el código de estado de la
 * respuesta, los encabezados y el cuerpo. En este caso, se está utilizando para enviar una respuesta JSON con un
 * código de estado.
 * @returns una respuesta JSON con un mensaje y un array de animales. Si la obtención de los animales es
 * exitosa, el mensaje indicará que se han obtenido correctamente todos los animales y los animales
 * se devolverán en orden inverso para obtener en el array al inicio los mas recientes.
 * Si hay un error al obtener los animales, el mensaje indicará que ha ocurrido un error y
 * el objeto de error se incluirá en la respuesta.
 */
export const getAnimals = async (req: Request, res: Response) => {

  try {

    const response = await AppDataSource.getRepository(Animal).find()

    return res.status(200).json({
      message: "Se han obtenido todos los animales correctamente",
      animals: response.reverse()
    })

  } catch (error) {
    return res.status(400).json({
      message: "Ha ocurrido un error al obtener los animales",
      error: error
    })
  }

}

/**
 * Esta función guarda un nuevo animal en una base de datos utilizando los datos proporcionados.
 * @param {Request} req - El parámetro `req` es un objeto que representa la solicitud HTTP hecha al
 * servidor. Contiene información como los encabezados de la solicitud, el cuerpo de la solicitud, el método de la solicitud,
 * la URL de la solicitud, etc.
 * @param {Response} res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar una respuesta
 * de vuelta al cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como establecer el
 * código de estado, los encabezados y enviar el cuerpo de la respuesta.
 * @returns una respuesta JSON con un mensaje de éxito y los datos del animal guardado si el animal se
 * guarda correctamente. Si hay un error, devuelve una respuesta JSON con un mensaje de error y los
 * detalles del error.
 */
export const postAnimals = async (req: Request, res: Response) => {
  const bodyData = req.body
  const { animalType, identificationNumber, race, birthdate, weight, imagenUrl } = bodyData

  try {

    const animal = new Animal()
    animal.animalType = animalType
    animal.identificationNumber = identificationNumber
    animal.race = race
    animal.birthdate = birthdate // NOTA: LA FECHA DEBE SER PASADA DE LA SIGUEINTE FORMA 2020-01-01 - YYYY-MM-DD
    animal.weight = weight
    animal.imagenUrl = imagenUrl

    const response = await AppDataSource.manager.save(animal)

    return res.status(201).json({
      message: "Se ha guardado correctamente un nuevo animal",
      animal: response,
    })

  } catch (error) {
    return res.status(400).json({
      message: "Ha ocurrido un error al guardar el animal",
      error: error
    })

  }

}

/**
 * Esta función elimina un animal de la base de datos basándose en su ID y devuelve un mensaje de éxito si
 * la eliminación se realiza correctamente, o un mensaje de error si falla.
 * @param {Request} req - El parámetro `req` es un objeto que representa la solicitud HTTP hecha al
 * servidor. Contiene información como el método de la solicitud, encabezados, parámetros de consulta y cuerpo de la solicitud.
 * @param {Response} res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta
 * HTTP de vuelta al cliente. Contiene métodos y propiedades que le permiten establecer el código de estado de la
 * respuesta, los encabezados y el cuerpo de la respuesta. En este fragmento de código, se utiliza para enviar una
 * respuesta JSON con un mensaje de éxito o un
 * @returns una respuesta JSON con un mensaje de éxito si el animal se elimina correctamente, o un mensaje de error
 * si hay un error durante el proceso de eliminación.
 */
export const deleteAnimal = async (req: Request, res: Response) => {
  const id = req.params.id

  try {

    const animalRepository = await AppDataSource.getRepository(Animal)
    const animalToRemove = await animalRepository.findOneBy({ id: id })

    if (animalToRemove) await animalRepository.remove(animalToRemove)

    return res.status(200).json({
      message: "Se ha eliminado correctamente el animal",
    })

  } catch (error) {
    return res.status(400).json({
      message: "Ha ocurrido un error al eliminar el animal",
      error: error,
      id
    })
  }

}

export const putAnimal = async (req: Request, res: Response) => {
  const idAnimal = req.params.id
  const bodyData=req.body
  //Se coloca el ID para que no pueda tomarse desde el back, en caso de que lo manden al front
  const { animalType, id, ...rest} = bodyData

  try {

    const animalRepository = await AppDataSource.getRepository(Animal)
    //La funcion valida directamente si existe
    await animalRepository.update(idAnimal, rest)

    return res.status(200).json({
      message: "Se ha modificado correctamente el animal",
    })

  } catch (error) {
    return res.status(400).json({
      message: "Ha ocurrido un error al modificar el animal",
      error: error,
      id
    })
  }

}

