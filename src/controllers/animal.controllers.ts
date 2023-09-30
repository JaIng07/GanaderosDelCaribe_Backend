import { Request, Response } from "express";

import AppDataSource from "../database/config";
import { Animal } from "../entities/Animal.entities";

export const getAnimals = (req: Request, res: Response) => {
  res.status(200).json({
    message: "se obtuvo el animal"
  })
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
export const postAnimals = async(req: Request, res: Response) => {
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

