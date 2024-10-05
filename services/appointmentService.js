import { AppointmentRepository } from "../database/appointment_Rep.js";

export class AppointmentService {
    
    constructor(repository) {
        this.repository = repository
    }

    findAllAppointments() {
        return this.repository.findAll()
    }

    createAppointment({user, roomId, firstName, dateOfAppointment}) {
        const newAppointment = new AppointmentRepository({user, roomId, firstName, dateOfAppointment})

        const overlappingAppointment = this.repository.findAll().find((appointment) => {
            return (
                appointment.roomId === newAppointment.roomId &&
                appointment.dateOfAppointment === newAppointment.dateOfAppointment
            )
        })

        if(overlappingAppointment) {
            throw new Error ("The room is already booked for the selected dates.")
        }

        this.repository.create(newAppointment)
        return newAppointment
    }
}