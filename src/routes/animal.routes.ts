import { Router } from "express";
import { getAnimals, postAnimals, deleteAnimal } from "../controllers/animal.controllers";
import { animalPostFieldValidators } from "../validators/animals.validators";

const router = Router()

router.get('/', getAnimals)
router.post('/', animalPostFieldValidators, postAnimals)
router.delete('/:id', deleteAnimal)

export default router;