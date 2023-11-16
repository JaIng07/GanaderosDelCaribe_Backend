import { body } from "express-validator";
import { validateFields } from "../middlewares/validateFields";
import { validateJWT } from "../middlewares/validateJWT";

export const animalsGetFieldValidators = [validateJWT]

export const activityGetFieldValidators = [
  validateJWT,
  body('idUser', "El id del usuario es requerido").notEmpty().isString(),
  validateFields
]

export const activityPostFieldValidators = [
  validateJWT,
  body('idUser', "El id del usuario es requerido").notEmpty().isString(),
  body('title', "El titulo es requerido").notEmpty().isString(),
  body('description', "La descripcion es requerida").notEmpty().isString(),
  body('date', "La fecha es requerida").notEmpty().isString(),
  body('column', "La columna es requerida y debe ser todo|inProgress|done").notEmpty().isString().isIn(['todo', 'inProgress', 'done']),
  validateFields
]
