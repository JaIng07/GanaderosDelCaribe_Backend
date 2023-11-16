import { Response, NextFunction, RequestHandler, Request } from 'express';
import jwt from 'jsonwebtoken'
import User from '../entities/User.entities';
import AppDataSource from '../database/config';

export const validateJWT = async( req:Request, res:Response, next:NextFunction ) => {

  const token = req.headers["ganadero-token"] as string

  if( !token ){
    return res.status(401).json({
      ok: false,
      message: 'No se ha proporcionado un token [ganadero-token]'
    })
  }

  try {

    const secretOrPrivateKey = process.env.TOKEN_SECRET!.toString();

    const tokenDecoded = jwt.verify(token, secretOrPrivateKey)
    const id = (tokenDecoded as any).id

    const user = await AppDataSource.getRepository(User).findOneBy({ id: id })

    if( !user ){
      return res.status(401).json({
        ok: false,
        message: 'Token no valido'
      })
    }

    req.headers["authUserID"] = user.id
    req.headers["authUserROL"] = user.rol


    next()

  } catch (error) {
    res.status(401).json({
      ok: false,
      message: "Token no valido",
      error: error
    })
  }

}