import { Router } from "express";

import {DentistRepository} from '../database/dentistRep.js'
import {DentistService} from '../services/dentistService.js'
import {AuthDentist} from '../controllers/dentistController.js'
import {DentistValidation} from '../middleware/dentistMiddleware.js'

const routerDentist = Router()

const dentistValidation = new DentistValidation()

const dentistRepository = new DentistRepository()
const dentistService = new DentistService(dentistRepository)
const dentistController = new AuthDentist(dentistService)

routerDentist.post('api/dentistRegister', dentistValidation.registerValidation, (req, res) => {
    const {code, body} = dentistController.register(req) // Como parametro, no controller já está o req.body
    res.status(code).json(body)
})

routerDentist.post('api/dentistLogin', dentistValidation.loginValidation, (req, res) => {
    const {code, body} = dentistController.login(req)
    res.status(code).json(body)
})

export {routerDentist}