
import { Router } from "express";
import SubscribeEventUserDb from "../controllers/subscribeeventontroller.js";
const router = Router()

router.post('/', SubscribeEventUserDb)

export default router