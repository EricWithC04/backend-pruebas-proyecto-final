import { Router } from "express";
import { evaluation, unitEvaluation } from "../controllers/evaluations.controllers.js";

const router = Router();

router.post("/theme", evaluation)
router.post("/unit", unitEvaluation)

export default router