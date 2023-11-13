import { Request, Response } from "express"
import { User } from "../entities"
import AppDataSource from "../database/config"


export const getUsers = async (req: Request, res: Response) => {

  try{

    const response = await AppDataSource.getRepository(User).find()

    res.json({
      ok: true,
      message: "Lista de usuarios",
      users: response
    })

  }catch(error){
    res.status(400).json({
      ok: false,
      message: "Error al obtener los usuarios",
      error: error
    })
  }

}

export const postUser = (req: Request, res: Response) => {

  try{

    const { username, email, password, rol, identificationCard} = req.body

    const user = new User()
    user.username = username
    user.password = password
    user.email = email
    user.rol = rol
    user.identificationCard = identificationCard
    AppDataSource.manager.save(user)

    res.json({
      ok: true,
      message: "El usuario se ha creado correctamente",
      user: user
    })

  }catch(error){
    res.status(400).json({
      ok: false,
      message: "Error al crear el usuario",
      error: error
    })
  }

}

export const putUser = async (req: Request, res: Response) => {
  try{

    const { idUser } = req.params
    const { id, ...rest} = req.body

    const userRepository = AppDataSource.getRepository(User)
    await userRepository.update(idUser, rest)

    return res.status(200).json({
      message: "Se ha modificado correctamente el animal",
    })

  }catch(error){
    res.status(400).json({
      ok: false,
      message: "Error al actualizar el usuario",
      error: error
    })
  }

}

export const deleteUser = async (req: Request, res: Response) => {

  try{

    const { idUser } = req.params

    const user = await AppDataSource.getRepository(User).findOneBy({ id: idUser })

    if(!user){
      return res.status(404).json({
        ok: false,
        message: "No se ha encontrado usuario con ese id",
      })
    }

    await AppDataSource.manager.delete(User, idUser)

    res.json({
      ok: true,
      message: "El usuario se ha eliminado correctamente",
      user: user
    })

  }catch(error){
    res.status(400).json({
      ok: false,
      message: "Error al eliminar el usuario",
      error: error
    })
  }

}


