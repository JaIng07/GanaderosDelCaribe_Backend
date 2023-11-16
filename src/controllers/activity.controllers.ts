import AppDataSource from "../database/config"
import Activity from "../entities/Activity.entities"
import { Request, Response } from "express"
import { parseActivity } from "../helpers/parseActivity"

export const getActivities = async (req: Request, res: Response) => {

  const { idUser } = req.body

  try {

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
      message: "Se han obtenido las actividades correctamente",
      Activity: parseActivity(activity),
    })

  } catch (error) {
    return res.status(400).json({
      message: "Ha ocurrido un error al obtener las actividades",
      error: error
    })
  }
}

export const postActivity = async (req: Request, res: Response) => {

  const { idUser, title, description, date, column } = req.body

  const activity = await AppDataSource.getRepository(Activity).save({
    user: {
      id: idUser
    },
    title,
    description,
    date,
    column
  })

  if (!activity) {
    return res.status(404).json({
      message: "No se ha podido crear la actividad"
    });
  }

  return res.status(200).json({
    message: "Se ha creado la actividad correctamente",
    Activity: activity,
  })

}