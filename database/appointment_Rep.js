export class AppointmentRepository {
    constructor() {
        this.appointments = []
    }

    findAll() {
        return this.appointments
    }

    create(appointment) {
        appointments.push(appointment)
    }
}