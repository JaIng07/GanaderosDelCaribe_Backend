import { Request, Response } from "express"
import AppDataSource from "../database/config"
import StatusAnimal from "../entities/StatusAnimal.entities"
import { stat } from "fs"

export const getStatus = async (req: Request, res: Response) => {

    try {
      const status = await AppDataSource.getRepository(StatusAnimal).find()
      res.json({
        ok: true,
        message: "Lista de estado animal",
        status: status
      })
    } catch (error) {
      res.status(400).json({
        ok: false,
        message: "Error al obtener los estados",
        error: error
      })
    }
  
}

export const postStatus = async (req: Request, res: Response) => {
    const { id, status, description, date} = req.body
  
    try {
  
      const newStatus = new StatusAnimal
      newStatus.id = id
      newStatus.status = status
      newStatus.description = description
      newStatus.date = new Date() // NOTA: LA FECHA DEBE SER PASADA DE LA SIGUEINTE FORMA 2020-01-01 - YYYY-MM-DD
  
      const response = await AppDataSource.manager.save(newStatus)
  
      return res.status(201).json({
        message: "Se ha guardado correctamente el estado del animal",
        newStatus: response,
      })
  
    } catch (error) {
      return res.status(400).json({
        message: "Ha ocurrido un error al guardar el estado del animal",
        error: error
      })
  
    }
  
}

  export const putStatus = async (req: Request, res: Response) => {
    try {
  
      const { idAnimal } = req.params
      const { id, ...rest } = req.body
  
      const userRepository = AppDataSource.getRepository(StatusAnimal)
      await userRepository.update(idAnimal, rest)
  
      res.json({
        ok: true,
        message: "Se ha actualizado correctamente el estado",
      })
  
    } catch (error) {
      res.status(400).json({
        ok: false,
        message: "Error al actualizar el estado",
        error: error
      })
    }
}

  export const deleteStatus = async (req: Request, res: Response) => {
    const id = req.params.id
  
    try {
  
      const statusRepository = await AppDataSource.getRepository(StatusAnimal)
      const statusToRemove = await statusRepository.findOneBy({ id: id })
  
      if (statusToRemove) await statusRepository.remove(statusToRemove)
  
      return res.status(200).json({
        message: "Se ha eliminado correctamente el estado",
      })
  
    } catch (error) {
      return res.status(400).json({
        message: "Ha ocurrido un error al eliminar el estado",
        error: error,
        id
      })
    }
}