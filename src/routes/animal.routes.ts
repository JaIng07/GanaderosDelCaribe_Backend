import { Router } from "express";
import { getAnimals, postAnimals } from "../controllers/animal.controllers";
import { animalPostFieldValidators } from "../validators/animals.validators";

const router = Router()

router.get('/', getAnimals)
router.post('/', animalPostFieldValidators, postAnimals)

export default router;