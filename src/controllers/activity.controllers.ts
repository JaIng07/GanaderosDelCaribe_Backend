import AppDataSource from "../database/config"
import Activity from "../entities/Activity.entities"
import { Request, Response } from "express"
import { parseActivity } from "../helpers/parseActivity"

export const getActivities = async(req: Request, res: Response) => {

  const { idUser } = req.body

  const activity = await AppDataSource.getRepository(Activity).find({
    relations: ["user"],
    where: {
      user: {
        id: idUser
      }
    }
  })

  if (!activity || activity.length === 0) {
    return res.status(404).json({
      message: "No se han encontrado actividades"
    });
  }

  return res.status(200).json({
    CustomRequest: idUser,
    message: "Se han obtenido todos los animales correctamente",
    Activity: parseActivity(activity),
  })

}