import { Router } from "express";
import { 
    ctrlCreateUser, 
    ctrlDeleteUser, 
    ctrlGetAllUsers, 
    ctrlGetOneUser, 
    ctrlUpdateUser } from "../controllers/user.controllers.js";

const router = Router();

router.get('/', ctrlGetAllUsers)

router.get('/:id', ctrlGetOneUser)

router.post('/', ctrlCreateUser)

router.put('/', ctrlUpdateUser)

router.delete('/', ctrlDeleteUser)

export default router