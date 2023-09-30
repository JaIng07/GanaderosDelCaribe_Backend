import { Request, Response } from "express";

import AppDataSource from "../database/config";
import { Animal } from "../entities/Animal.entities";

export const getAnimals = (req: Request, res: Response) => {
  res.status(200).json({
    message: "se obtuvo el animal"
  })
}

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

    res.status(201).json({
      message: "Se ha guardado correctamente un nuevo animal",
      animal: response,
    })

  } catch (error) {
    res.status(400).json({
      message: "Ha ocurrido un error al guardar el animal",
      error: error
    })

  }

}

