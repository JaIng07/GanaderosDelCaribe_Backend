import { Router } from "express";
import { getAnimals } from "../controllers/animal.controllers";

const router = Router()

router.get('/', getAnimals)


export default router;