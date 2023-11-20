import { Request, Response } from "express"
import AppDataSource from "../database/config"
import StatusAnimal from "../entities/StatusAnimal.entities"
import { stat } from "fs"

export const getStatus = async (req: Request, res: Response) => {

    try {
        const status = await AppDataSource.getRepository(StatusAnimal).find({relations: ["animal"]})
        res.json({
            ok: true,
            message: "Lista de estados de animales",
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
    const { animalId, status, description } = req.body

    const date = new Date().toISOString().slice(0, 10)

    const statusAnimal = await AppDataSource.getRepository(StatusAnimal).save({
        animal: {
            id: animalId
        },
        status,
        description,
        date
    })
    
    if (!statusAnimal) {
        return res.status(400).json({
            message: "Ha ocurrido un error al guardar el estado del animal",
        })
    }

    return res.status(201).json({
        message: "Se ha guardado correctamente el estado del animal",
        statusAnimal: statusAnimal,
    })
}

export const putStatus = async (req: Request, res: Response) => {
        try {

            const { idStatus } = req.params
            const { status, ...rest } = req.body

            const userRepository = AppDataSource.getRepository(StatusAnimal)
            await userRepository.update(idStatus, rest)

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

        const { idStatus } = req.params

        try {

            const statusRepository = await AppDataSource.getRepository(StatusAnimal)
            const statusToRemove = await statusRepository.findOneBy({ id: idStatus })

            if (statusToRemove) await statusRepository.remove(statusToRemove)

            return res.status(200).json({
                message: "Se ha eliminado correctamente el estado",
            })

        } catch (error) {
            return res.status(400).json({
                message: "Ha ocurrido un error al eliminar el estado",
                error: error,
            })
        }
    }