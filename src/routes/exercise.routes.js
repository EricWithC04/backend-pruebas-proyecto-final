import { Router } from "express";
import {
    getAllExercises,
    getOneExercise,
    createExercise,
    updateExercise,
    deleteExercise
} from "../controllers/exercise.controller.js";

const router = Router();

router.get("/", getAllExercises)
router.get("/:id", getOneExercise)
router.post("/", createExercise)
router.put("/:id", updateExercise)
router.delete("/:id", deleteExercise)

export default router