import {Router} from 'express'

import {AppointmentRepository} from '../database/appointment_Rep.js'
import {AppointmentService} from '../services/appointmentService.js'
import {AppointmentController} from '../controllers/appointmentContr.js'

import {AuthRole} from '../middleware/authRole.js'
import {DentistRole} from '../middleware/authRole.js'

const routerAppointment = Router()

const appointmentRepository = new AppointmentRepository()
const appointmentService = new AppointmentService(appointmentRepository)
const appointmentController = new AppointmentController(appointmentService)

routerAppointment.get('/home', (req, res) => {
    res.json({message: "Welcome to Home Page"})
})

// Essa função GET só está disponivel para dentistas cadastrados
routerAppointment.get('/api/listAppointment', DentistRole.preHandler, (req, res) => {
    const {status, body} = appointmentController.index(req)
    res.status(status).json(body)
})

routerAppointment.post('/api/createAppointment', AuthRole.preHandler, (req, res) => {
    const {status, body} = appointmentController.save(req)
    res.status(status).json(body)
})

export { routerAppointment }