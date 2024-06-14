import { Router } from "express";
import getEventSubscribers from '../controllers/getEventSubscribeController.js'
const router = Router()

router.get('/:eventId', getEventSubscribers)

export default router