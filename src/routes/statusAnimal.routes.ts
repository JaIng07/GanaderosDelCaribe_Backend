import { Router } from "express";
import { deleteStatus, getStatus, postStatus, putStatus } from "../controllers/statusAnimal.controllers";
import { statusAnimalDeleteFieldValidators, statusAnimalGetFieldValidator, statusAnimalPostFieldValidators, statusAnimalPutFieldValidators } from "../validators/statusAnimal.validators";

const router=Router()

router.get('/', statusAnimalGetFieldValidator, getStatus)
router.post('/', statusAnimalPostFieldValidators, postStatus)
router.put('/', statusAnimalPutFieldValidators, putStatus)
router.delete('/', statusAnimalDeleteFieldValidators, deleteStatus)

export default router;