import { Router } from "express";
import { authenticate } from '../controllers/authenticate.controllers'
import { authenticateFieldValidators } from "../validators/authenticate.validators";

const router = Router()

router.post('/', authenticateFieldValidators, authenticate)

export default router;