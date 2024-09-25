export class AppointmentRep {
    constructor() {
        this.appointments = []
    }

    findAll() {
        return this.appointments
    }

    create(appointment) {
        this.appointments.push(appointment)
    }
}