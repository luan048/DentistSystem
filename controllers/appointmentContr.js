export class AppointmentController{
    constructor(service) {
        this.service = service
    }

    index(req) {
        const appointments = this.service.findAllAppointments()
        return {status: 200, body: {appointments}}
    }

    save(req) {
        const {roomId, firstName, dateOfAppointment} = req.body
        const user = req.user

        if(!roomId || !firstName || !dateOfAppointment) {
            return {status: 400, body: {message: 'All fields are required'}}
        }

        const appointment = this.service.createAppointment({user, roomId, firstName, dateOfAppointment})

        return {status: 201, body : {message: 'Appointment created sucessfully', appointment}}
    }
}