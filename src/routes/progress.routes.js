import { Router } from "express";
import { getUserProgress } from "../controllers/progress.controllers.js";

const router = Router();

router.get("/:id", getUserProgress)

export default router