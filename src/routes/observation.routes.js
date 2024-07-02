import { Router } from 'express'
import {
    createObservation,
    deleteObservation,
    updateObservation
} from '../controllers/observation.controller.js'

const router = Router()

router.post("/", createObservation)
router.put("/:id", deleteObservation)
router.delete("/:id", updateObservation)

export default router