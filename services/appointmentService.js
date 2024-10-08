import {Appointment} from '../models/appointmentModel.js'

export class AppointmentService {
    
    constructor(repository) {
        this.repository = repository
    }

    findAllAppointments() {
        return this.repository.findAll()
    }

    createAppointment({user, roomId, firstName, dateOfAppointment}) {
        const newAppointment = new Appointment({user, roomId, firstName, dateOfAppointment})

        const overlappingAppointment = this.repository.findAll().find((appointment) => {
            return (
                appointment.roomId === newAppointment.roomId
            )
        })

        if (overlappingAppointment) {
            throw new Error("The room is already booked for the selected dates.")
        }

        this.repository.create(newAppointment)
        return newAppointment
    }
}