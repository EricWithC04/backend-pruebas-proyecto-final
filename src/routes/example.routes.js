import { Router } from "express";
import { 
    exampleRouteDelete, 
    exampleRouteGet, 
    exampleRoutePost, 
    exampleRoutePut } from "../controllers/example.controllers.js";

const router = Router();

router.get('/', exampleRouteGet)

router.post('/', exampleRoutePost)

router.put('/', exampleRoutePut)

router.delete('/', exampleRouteDelete)

export default router