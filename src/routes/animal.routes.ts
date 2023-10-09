import { Router } from "express";
import { getAnimals, postAnimals, deleteAnimal, putAnimal } from "../controllers/animal.controllers";
import { animalDeleteFieldValidators, animalPostFieldValidators, animalPutFieldValidators } from "../validators/animals.validators";

const router = Router()

router.get('/', getAnimals)
router.post('/', animalPostFieldValidators, postAnimals)
router.delete('/:id', animalDeleteFieldValidators, deleteAnimal)
router.put('/:id', animalPutFieldValidators, putAnimal)

export default router;