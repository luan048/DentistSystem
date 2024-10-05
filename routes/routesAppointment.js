import {Router} from 'express'

import {AppointmentRep} from '../database/appointment_Rep.js'
import {AppointmentService} from '../services/appointmentService.js'
import {AppointmentController} from '../controllers/appointmentContr.js'

import {AuthRole} from '../middleware/authRole.js'

const routerAppointment = Router()
// Restruturação

export { routerAppointment }