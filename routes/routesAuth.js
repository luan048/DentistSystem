import { Router } from "express";

import {UserRepository} from '../database/authRep.js'
import {AuthService} from '../services/authService.js'
import { AuthUserController } from "../controllers/authController.js";
import {AuthValidation} from '../middleware/authMiddleware.js'

const routerAuth = Router()

const userValidation = new AuthValidation()

const authRepository = new UserRepository()
const authService = new AuthService(authRepository)
const authController = new AuthUserController(authService)

routerAuth.post('api/authRegister', userValidation.registerValidation, (req, res) => {
    const {code, body} = authController.register(req) // Como parametro no controler já está o req.body
    res.code(code).json(body)
})

routerAuth.post('api/authLogin', userValidation.loginValidation, (req, res) => {
    const {code, body} = authController.login(req)
    res.code(code).json(body)
})

export {routerAuth}