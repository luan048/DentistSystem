export function AppointmentController(service) {
    function index(req) {
        const appointments = service.findAllAppointments()
        return {status: 200, body: {appointments}}
    }

    function save(req) {
        const {roomId, firstName, dateOfAppointment} = req.body
        const user = req.user

        const appointments = service.createAppointment({user, roomId, firstName, dateOfAppointment})
        return {status: 201, body: {message: 'Appointment created sucessfully', appointments}}
    }

    return {index, save}
}