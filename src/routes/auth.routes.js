import { Router } from 'express'
import { register, login } from '../controllers/auth.controllers.js'

const authRoutes = Router()

authRoutes.post('/register', register)
authRoutes.post('/login', login)

export default authRoutes