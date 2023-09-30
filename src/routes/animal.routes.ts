import { Router } from "express";
import {  body } from "express-validator";

import { getAnimals, postAnimals } from "../controllers/animal.controllers";
import { validateFields } from "../middlewares/validateFields";

const router = Router()

router.get('/', getAnimals)

// todo: validar que la fecha este en el formato yyyy-mm-dd
// todo: validad que el identificador no se repita en la base de datos
router.post('/', [
  body('animalType', "El tipo de animal es requerido").notEmpty().isString(),
  body("animalType", "El tipo de animal no es valido").if(body("animalType").exists()).isIn(["ganado"]),
  body('identificationNumber', "El numero de identificacion del animal es requerido").notEmpty().isNumeric(),
  body("race", "La raza del animal es requerida").notEmpty().isString(),
  body("birthdate", "La edad del animal es requerida").notEmpty(),
  body("weight", "El peso del animal es requerido").notEmpty().isNumeric(),
  body("weight", "El peso del animal no es valido").isFloat({ min: 0 }),
  body("imagenUrl", "La imagen del animal es requerida").notEmpty().isString(),
  body("imagenUrl", "La imagen del animal no es valida").if(body("imagenUrl").exists()).isURL(),
  validateFields
] ,postAnimals)

export default router;