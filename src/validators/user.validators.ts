import { body, param } from "express-validator";
import { validateFields } from "../middlewares/validateFields";
import { emailExists, identificationCardExists } from "../helpers/dbValidators";

export const userPostFieldValidators = [
  body('username', "El nombre de usuario es obligatorio").notEmpty(),
  body('email', "El email es obligatorio").isEmail(),
  body('email', "El email ya existe").custom((email) => emailExists(email)),
  body('password', "La contraseña es obligatoria").notEmpty(),
  body('role', "El rol es obligatorio").notEmpty(),
  body('role', "El rol debe ser admin o employee").isIn(['admin', 'employee']),
  body('identificationCard', "La cédula es obligatoria").notEmpty(),
  body('identificationCard', "La cédula debe ser un número").isNumeric(),
  body('identificationCard', "La cédula ya existe").custom((identificationCard) => identificationCardExists(identificationCard)),
  validateFields
]


export const userDeleteFieldValidators = [
  param('idUser', "El id del usuario es obligatorio").notEmpty(),
  param("idUser", "Deber se un id valido").isUUID(),
  validateFields
]