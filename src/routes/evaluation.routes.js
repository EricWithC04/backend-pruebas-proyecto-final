import { Router } from "express";
import { evaluation } from "../controllers/evaluations.controllers.js";

const router = Router();

router.post("/", evaluation)

export default router