import {Router} from 'express'

import {AppointmentRep} from '../database/appointment_Rep.js'
import {AppointmentService} from '../services/appointmentService.js'
import {AppointmentController} from '../controllers/appointmentContr.js'

import {AuthRole} from '../middleware/authRole.js'

const routerAppointment = Router()


const appointRepository = new AppointmentRep()
const appointService = new AppointmentService(appointRepository)
const appointController = new AppointmentController(appointService)

routerAppointment.get('/home', (req, res) => {
    res.json({message: "Welcome to the Home Page"})
})

routerAppointment.get('/appoint/list', AuthRole, (req, res) => {
    const {code, body} = appointController.index(req) // Como parametro no controller já está o req.body
    res.code(code).json(body)
})

routerAppointment.post('/appoint/create', AuthRole, (req, res) => {
    const {code, body} = appointController.save(req)
    res.code(code).json(body)
})

export default routerAppointment