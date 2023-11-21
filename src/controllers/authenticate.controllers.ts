import { Request, Response } from "express"
import AppDataSource from "../database/config"
import { User } from "../entities"
import { generateJWT } from "../helpers/generateJWT"

export const authenticate = async (req: Request, res: Response) => {

  const { email, password } = req.body

  try {

    AppDataSource.getRepository(User)

    const error = { ok: false, message: 'El correo o la contraseña estan incorrectas' }

    if(!email || !password) return res.status(400).json(error)

    const user = await AppDataSource.getRepository(User).findOne({where:{ password: password, email: email }})

    if (!user) return res.status(400).json(error)

    const token = await generateJWT(user.id, user.rol, user.username);

    res.status(200).json({
      ok: true,
      message: 'Usuario autenticado correctamente',
      token: token
    })

  } catch (error) {

    res.status(500).json({
      ok: false,
      message: "Error al intentar obtener el usuario",
      error: error
    })

  }
}