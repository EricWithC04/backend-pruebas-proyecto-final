import { Router } from 'express'
import {
    createUnitProgress,
    deleteUnitProgress,
    updateUnitProgress
} from '../controllers/unit_progress.controllers.js'

const router = Router()

router.post("/", createUnitProgress)
router.put("/:id", deleteUnitProgress)
router.delete("/:id", updateUnitProgress)

export default router