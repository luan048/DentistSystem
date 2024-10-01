import {Appointment} from '../models/appointmentModel.js'

export class AppointmentService {
    constructor(repository) {
        this.repository = repository
    }

    findAllAppointents() {
        return this.repository.findAll()
    }

    createAppointment({user, roomId, firstName, dateOfAppointment}) {
        const newAppointment = new Appointment({user, roomId, firstName, dateOfAppointment})

        const overlappingAppointment = this.repository.findAll().find((appointment) => {
            return (
                appointment.roomId === newAppointment.roomId && appointment.firstName < newAppointment.firstName && appointment.dateOfAppointment > newAppointment.dateOfAppointment
            )
        })

        if(overlappingAppointment) {
            throw new Error("An appointment is already scheduled")
        }

        this.repository.create(newAppointment)
        return newAppointment
    }
}