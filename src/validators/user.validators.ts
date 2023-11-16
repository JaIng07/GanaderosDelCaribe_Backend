import { body, param } from "express-validator";
import { validateFields } from "../middlewares/validateFields";
import { emailExists, identificationCardExists } from "../helpers/dbValidators";
import { validateJWT } from "../middlewares/validateJWT";


export const usersPostFieldValidators = [validateJWT]

export const userPostFieldValidators = [
  validateJWT,
  body('username', "El nombre de usuario es obligatorio").notEmpty(),
  body('email', "El email es obligatorio").isEmail(),
  body('email', "El email ya existe").custom((email) => emailExists(email)),
  body('password', "La contraseña es obligatoria").notEmpty(),
  body('rol', "El rol es obligatorio").notEmpty(),
  body('rol', "El rol debe ser admin o employee").isIn(['admin', 'employee']),
  body('identificationCard', "La cédula es obligatoria").notEmpty(),
  body('identificationCard', "La cédula debe ser un número").isNumeric(),
  body('identificationCard', "La cédula ya existe").custom((identificationCard) => identificationCardExists(identificationCard)),
  validateFields
]

export const userDeleteFieldValidators = [
  validateJWT,
  param('idUser', "El id del usuario es obligatorio").notEmpty(),
  param("idUser", "Deber se un id valido").isUUID(),
  validateFields
]

export const userPutFieldValidators = [
  validateJWT,
  param('idUser', "El id del usuario es obligatorio").notEmpty(),
  param("idUser", "Deber se un id valido").isUUID(),
  body('username', "El nombre no puede estar vacio").optional().notEmpty(),
  body('email', "El email no puede estar vacio").optional().notEmpty(),
  body('email', "El email no es un email valido").optional().isEmail(),
  body('email', "El email ya existe").optional().custom((email, {req}) => emailExists(email, req.params?.idUser)),
  body('rol', "El rol no puede estar vacio").optional().notEmpty(),
  body('rol', "El rol debe ser admin o employee").optional().isIn(['admin', 'employee']),
  body('identificationCard', "La cédula no puede estar vacia").optional().notEmpty(),
  body('identificationCard', "La cédula debe ser un número").optional().isNumeric(),
  body('identificationCard', "La cédula ya existe").optional().custom((identificationCard, {req}) => identificationCardExists(identificationCard, req.params?.idUser)),
  validateFields
]
