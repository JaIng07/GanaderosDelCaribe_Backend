import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator'; // para validar los campos


/**
 * La función "validateFields" verifica si hay errores de validación en la solicitud y devuelve
 * una respuesta de error si los hay.
 * @param {Request} req - El parámetro `req` representa el objeto de solicitud HTTP, que contiene
 * información sobre la solicitud entrante, como encabezados, parámetros de consulta y cuerpo de la solicitud.
 * @param {Response} res - El parámetro `res` es el objeto de respuesta que se utiliza para enviar la respuesta
 * de vuelta al cliente. Contiene métodos y propiedades que le permiten controlar la respuesta, como establecer el
 * código de estado, los encabezados y enviar el cuerpo de la respuesta.
 * @param {NextFunction} next - El parámetro `next` es una función que se utiliza para pasar el control al
 * siguiente middleware en el ciclo solicitud-respuesta. Se usa típicamente cuando deseas moverte
 * al siguiente middleware después de realizar algunas operaciones en la función de middleware actual.
 * @returns una respuesta con un código de estado de 400 y un objeto JSON que contiene información sobre los
 * errores de validación.
 */
export const validateFields = ( req:Request, res:Response, next:NextFunction ) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    const result = {
      ok: false,
      message: errors.array()[0].msg,
      total_errors: errors.array().length,
      errors: errors.array()
    }

    return res.status(400).json(result);
  }
  next();
}