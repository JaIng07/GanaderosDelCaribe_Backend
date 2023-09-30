import { body, param } from "express-validator";
import { validateFields } from "../middlewares/validateFields";
import { isValidDateFormat } from "../helpers/isValidDateFormat";
import { identificationNumberExists } from "../helpers/dbValidators";

import { type_identificationNumber } from "../types/animal.type";

export const animalPostFieldValidators = [
  body('animalType', "El tipo de animal es requerido").notEmpty().isString(),
  body("animalType", "El tipo de animal no es valido").if(body("animalType").exists()).isIn(["ganado"]),
  body('identificationNumber', "El numero de identificacion del animal es requerido").notEmpty().isNumeric(),
  body('identificationNumber', "El numero de identificacion del animal ya existe").custom((idNumber: type_identificationNumber) => identificationNumberExists(idNumber)),
  body("race", "La raza del animal es requerida").notEmpty().isString(),
  body("birthdate", "La edad del animal es requerida").notEmpty(),
  body("birthdate", "La edad del animal no es valida").custom((date:string) => isValidDateFormat(date)),
  body("weight", "El peso del animal es requerido").notEmpty().isNumeric(),
  body("weight", "El peso del animal no es valido").isFloat({ min: 0 }),
  body("imagenUrl", "La imagen del animal es requerida").notEmpty().isString(),
  body("imagenUrl", "La imagen del animal no es valida").if(body("imagenUrl").exists()).isURL(),
  validateFields
]

export const animalDeleteFieldValidators = [
  param('id', "El id del animal es requerido").notEmpty().isString(),
  param("id", "Deber se un id valido").isUUID(),
  validateFields
]