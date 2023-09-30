import { Router } from "express";
import { getAnimals, postAnimals } from "../controllers/animal.controllers";

const router = Router()

router.get('/', getAnimals)
router.post('/', postAnimals)

export default router;