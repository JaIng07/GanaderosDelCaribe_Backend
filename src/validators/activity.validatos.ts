import { body, param } from "express-validator";
import { validateFields } from "../middlewares/validateFields";
import { validateJWT } from "../middlewares/validateJWT";

export const animalsGetValidators = [validateJWT]

export const activityGetValidators = [
  validateJWT,
  param('idUser', "El id del usuario es requerido").notEmpty().isString(),
  validateFields
]

export const activityPostValidators = [
  validateJWT,
  body('idUser', "El id del usuario es requerido").notEmpty().isString(),
  body('title', "El titulo es requerido").notEmpty().isString(),
  body('description', "La descripcion es requerida").notEmpty().isString(),
  body('date', "La fecha es requerida").notEmpty().isString(),
  body('column', "La columna es requerida y debe ser todo|inProgress|done").notEmpty().isString().isIn(['todo', 'inProgress', 'done']),
  validateFields
]

export const changeColumnPostValidators = [
  validateJWT,
  body('idActivity', "El id de la actividad es requerido").notEmpty().isString(),
  body('column', "La columna es requerida y debe ser todo|inProgress|done").notEmpty().isString().isIn(['todo', 'inProgress', 'done']),
  validateFields
]
