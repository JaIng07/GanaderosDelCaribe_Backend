import { Router } from "express";
import { postUser, getUsers, deleteUser, putUser } from "../controllers/user.controllers";
import { userPostFieldValidators, userDeleteFieldValidators, usersPostFieldValidators,userPutFieldValidators } from "../validators/user.validators";

const router = Router()

router.get('/', usersPostFieldValidators, getUsers)
router.post('/', userPostFieldValidators, postUser)
router.delete('/:idUser', userDeleteFieldValidators, deleteUser)
router.put('/:idUser', userPutFieldValidators, putUser)


export default router;