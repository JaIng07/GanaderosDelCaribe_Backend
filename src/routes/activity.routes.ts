import { Router } from "express";
import { getActivities } from "../controllers/activity.controllers";
import { validateJWT } from "../middlewares/validateJWT";

const router = Router()

router.get('/', [validateJWT] ,getActivities)

export default router;