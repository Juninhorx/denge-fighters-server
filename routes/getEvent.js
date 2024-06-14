import { Router } from "express";
import GetEventsDb from '../controllers/GetEventDb.js'
const router = Router()

router.get('/', GetEventsDb)

export default router