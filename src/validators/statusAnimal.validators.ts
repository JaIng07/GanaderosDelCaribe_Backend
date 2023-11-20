import { body, param } from "express-validator";
import { validateFields } from "../middlewares/validateFields";
import { validateJWT } from "../middlewares/validateJWT";
import { isValidDateFormat } from "../helpers/isValidDateFormat";

export const statusAnimalGetFieldValidator= [validateJWT]

export const statusAnimalPostFieldValidators = [
    validateJWT,
    body('animalId', "El id del animal es requerido").notEmpty().isString(),
    body("animalId", "Deber se un id animal valido").isUUID(),
    body('status', "El status es obligatorio").notEmpty(),
    body('status', "El status debe ser healthy, sick o critical").isIn(['healthy', 'sick', 'critical']),
    body("description", "La descripción del estado es requerida").notEmpty().isString(),
    validateFields
]

export const statusAnimalPutFieldValidators = [
    validateJWT,
    body('status', "El status es obligatorio").notEmpty(),
    body('status', "El status debe ser healthy, sick o critical").isIn(['healthy', 'sick', 'critical']),
    body("description", "La descripción del estado es requerida").notEmpty().isString(),
    validateFields
]

export const statusAnimalDeleteFieldValidators = [
    validateJWT,
    param('id', "El id del estado es requerido").notEmpty().isString(),
    param("id", "Deber se un id valido").isUUID(),
    validateFields
]