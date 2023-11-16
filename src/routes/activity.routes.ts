import { Router } from "express";
import { getActivities, postActivity, changeColumnActivity } from "../controllers/activity.controllers";
import { activityGetValidators, activityPostValidators, changeColumnPostValidators } from "../validators/activity.validatos";

const router = Router()

router.get('/:idUser', activityGetValidators, getActivities)
router.post('/',  activityPostValidators, postActivity)
router.post('/update',  changeColumnPostValidators, changeColumnActivity)

export default router;