import { Router } from "express";
import {
    getAllThemes,
    getOneTheme,
    createTheme,
    updateTheme,
    deleteTheme
} from "../controllers/theme.controllers.js";

const router = Router();

router.get("/", getAllThemes)
router.get("/:id", getOneTheme)
router.post("/", createTheme)
router.put("/:id", updateTheme)
router.delete("/:id", deleteTheme)

export default router