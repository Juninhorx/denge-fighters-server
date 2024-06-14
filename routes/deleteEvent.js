import { Router } from "express";
import DeleteEventDb from "../controllers/DeleteEventDb.js";
const router = Router()

router.delete('/:id', DeleteEventDb)

export default router