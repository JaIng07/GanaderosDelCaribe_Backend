import { Router } from "express";
import { getAnimals, getAnimal, postAnimals, deleteAnimal, putAnimal } from "../controllers/animal.controllers";
import { animalDeleteFieldValidators, animalGetFieldValidators, animalPostFieldValidators, animalPutFieldValidators } from "../validators/animals.validators";

const router = Router()

router.get('/', getAnimals)
router.get('/:id', animalGetFieldValidators, getAnimal)
router.post('/', animalPostFieldValidators, postAnimals)
router.delete('/:id', animalDeleteFieldValidators, deleteAnimal)
router.put('/:id', animalPutFieldValidators, putAnimal)

export default router;