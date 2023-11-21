import { Router } from "express";
import { deleteStatus, getStatus, postStatus, putStatus, getStatusbyIdAnimal } from "../controllers/statusAnimal.controllers";
import { statusAnimalDeleteFieldValidators, statusAnimalGetFieldValidator, statusAnimalPostFieldValidators, statusAnimalPutFieldValidators } from "../validators/statusAnimal.validators";

const router=Router()

router.get('/', statusAnimalGetFieldValidator, getStatus)
router.get("/:idAnimal", statusAnimalGetFieldValidator, getStatusbyIdAnimal)
router.post('/', statusAnimalPostFieldValidators, postStatus)
router.put('/:idStatus', statusAnimalPutFieldValidators, putStatus)
router.delete('/:idStatus', statusAnimalDeleteFieldValidators, deleteStatus)

export default router;