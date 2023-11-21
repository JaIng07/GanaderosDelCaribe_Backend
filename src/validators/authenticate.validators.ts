import { body } from "express-validator";
import { validateFields } from "../middlewares/validateFields";

export const authenticateFieldValidators = [
  body('email', 'El email es obligatorio').notEmpty(),
  body('email', 'El email no se encuentra en el formato correcto').isEmail(),
  body('password', 'La contraseña es obligatoria').notEmpty(),
  validateFields
]