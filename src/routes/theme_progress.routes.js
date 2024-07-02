import { Router } from 'express'
import {
    createThemeProgress,
    deleteThemeProgress,
    updateThemeProgress
} from '../controllers/theme_progress.controllers.js'

const router = Router()

router.post("/", createThemeProgress)
router.put("/:id", deleteThemeProgress)
router.delete("/:id", updateThemeProgress)

export default router