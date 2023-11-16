import { Router } from "express";
import { getActivities, postActivity } from "../controllers/activity.controllers";
import { activityGetFieldValidators, activityPostFieldValidators } from "../validators/activity.validatos";

const router = Router()

router.get('/:idUser', activityGetFieldValidators, getActivities)
router.post('/',  activityPostFieldValidators, postActivity)

export default router;