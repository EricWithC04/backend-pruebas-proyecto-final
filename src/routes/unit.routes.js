import { Router } from "express";
import {
    getAllUnits,
    getOneUnit,
    createUnit,
    updateUnit,
    deleteUnit
} from "../controllers/unit.controllers.js";

const router = Router();

router.get("/", getAllUnits)
router.get("/:id", getOneUnit)
router.post("/", createUnit)
router.put("/:id", updateUnit)
router.delete("/:id", deleteUnit)

export default router