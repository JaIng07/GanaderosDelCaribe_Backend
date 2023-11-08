import { Router } from "express";
import { postUser, getUsers, deleteUser, putUser } from "../controllers/user.controllers";
import { userPostFieldValidators, userDeleteFieldValidators, userPutFieldValidators } from "../validators/user.validators";

const router = Router()

router.get('/', getUsers)
router.post('/', userPostFieldValidators, postUser)
router.delete('/:idUser', userDeleteFieldValidators ,deleteUser)
router.put('/:idUser', userPutFieldValidators ,putUser)


export default router;