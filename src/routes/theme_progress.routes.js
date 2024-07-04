import { Router } from 'express'
import {
    createThemeProgress,
    updateThemeProgress,
    deleteThemeProgress
} from '../controllers/theme_progress.controllers.js'

const router = Router()

router.post("/", createThemeProgress)
router.put("/:idProgress/:idTheme", updateThemeProgress)
router.delete("/:id", deleteThemeProgress)

export default router