import { Router } from 'express'
import {
    getAllUserThemeProgress,
    createThemeProgress,
    updateThemeProgress,
    deleteThemeProgress
} from '../controllers/theme_progress.controllers.js'

const router = Router()

router.get("/:idUser", getAllUserThemeProgress)
router.post("/", createThemeProgress)
router.put("/:idProgress/:idTheme", updateThemeProgress)
router.delete("/:id", deleteThemeProgress)

export default router