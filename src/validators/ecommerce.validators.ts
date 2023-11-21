import { body, param } from "express-validator";
import { validateFields } from "../middlewares/validateFields";
import { validateJWT } from "../middlewares/validateJWT";

export const getProductByIdValidators = [
  param('idProduct', "El id del producto es requerido").notEmpty().isString(),
  validateFields
]

export const postProductValidators = [
  validateJWT,
  body('productName', "El nombre del producto es requerido").notEmpty().isString(),
  body('price', "El precio es requerido").notEmpty().isNumeric(),
  body('price', "El precio debe ser mayor a 0").notEmpty().isNumeric().custom(a => a > 0),
  body('description', "La descripcion es requerida").notEmpty().isString(),
  body('date', "La fecha es requerida").notEmpty().isString(),
  body('stock', "El stock es requerido").notEmpty().isNumeric(),
  body('stock', "El stock debe ser mayor a 0").notEmpty().isNumeric().custom(a => a > 0),
  body('unit', "La unidad es requerida").notEmpty().isString(),
  body('unit', "La unidad ingresada no es permitida").notEmpty().isString().isIn(["Cabezas", "Litros", "Kilogramos", "Gramos", "Docenas", "Unidades", "Metros cuadrados"]),
  validateFields
]

export const putProductValidators = [
  validateJWT,
  param('idProduct', "El id del producto es requerido").notEmpty().isString(),
  body('productName', "El nombre del producto es requerido").optional().notEmpty().isString(),
  body('price', "El precio es requerido").optional().notEmpty().isNumeric(),
  body('price', "El precio debe ser mayor a 0").optional().notEmpty().isNumeric().custom(a => a > 0),
  body('description', "La descripcion es requerida").optional().notEmpty().isString(),
  body('date', "La fecha es requerida").optional().notEmpty().isString(),
  body('stock', "El stock es requerido").optional().notEmpty().isNumeric(),
  body('stock', "El stock debe ser mayor a 0").optional().notEmpty().isNumeric().custom(a => a > 0),
  body('unit', "La unidad es requerida").optional().notEmpty().isString(),
  body('unit', "La unidad ingresada no es permitida").optional().notEmpty().isString().isIn(["Cabezas", "Litros", "Kilogramos", "Gramos", "Docenas", "Unidades", "Metros cuadrados"]),
  validateFields
]

export const deleteProductValidators = [
  validateJWT,
  param('idProduct', "El id del producto es requerido").notEmpty().isString(),
  validateFields
]

