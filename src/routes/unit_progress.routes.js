import { Router } from 'express'
import {
    createUnitProgress,
    updateUnitProgress,
    deleteUnitProgress
} from '../controllers/unit_progress.controllers.js'

const router = Router()

router.post("/", createUnitProgress)
router.put("/:idUser/:idUnit", updateUnitProgress)
router.delete("/:id", deleteUnitProgress)

export default router