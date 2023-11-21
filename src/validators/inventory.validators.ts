import { body, param } from "express-validator";
import { validateFields } from "../middlewares/validateFields";
import { validateJWT } from "../middlewares/validateJWT";

export const getInventoryValidators = [validateJWT]

export const getItemInventoryValidators = [
  validateJWT,
  param('idItem', "El id del item es requerido").notEmpty().isString(),
  validateFields
]

export const postItemInventoryValidators = [
  validateJWT,
  body('name', "El nombre del item es requerido").notEmpty().isString(),
  body('description', "La descripcion es requerida").notEmpty().isString(),
  body('type', "El tipo debe ser suministros|medicamentos|equipos|otros").notEmpty().isString().isIn(["suministros", "medicamentos", "equipos", "otros"]),
  body('amount', "La cantidad es requerida").notEmpty().isNumeric(),
  body('amount', "La cantidad debe ser mayor o igual a 0").notEmpty().isNumeric().custom(a => a >= 0),
  validateFields
]

export const putItemInventoryValidators = [
  validateJWT,
  param('idItem', "El id del item es requerido").notEmpty().isString(),
  body('name', "El nombre del item es requerido").optional().notEmpty().isString(),
  body('description', "La descripcion es requerida").optional().notEmpty().isString(),
  body('type', "El tipo debe ser suministros|medicamentos|equipos|otros").optional().notEmpty().isString().isIn(["suministros", "medicamentos", "equipos", "otros"]),
  body('amount', "La cantidad es requerida").optional().notEmpty().isNumeric(),
  body('amount', "La cantidad debe ser mayor o igual a 0").optional().notEmpty().isNumeric().custom(a => a >= 0),
  validateFields
]

export const deleteItemInventoryValidators = [
  validateJWT,
  param('idItem', "El id del item es requerido").notEmpty().isString(),
  validateFields
]


