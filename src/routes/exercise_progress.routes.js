import { Router } from 'express'
import {
    createExerciseProgress,
    deleteExerciseProgress,
    updateExerciseProgress
} from '../controllers/exercise_progress.controllers.js'

const router = Router()

router.post("/", createExerciseProgress)
router.put("/:id", deleteExerciseProgress)
router.delete("/:id", updateExerciseProgress)

export default router