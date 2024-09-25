export function AppointmentController(service) {
    function index() {
        const appointments = service.findAllAppointments()
        return {code: 200, body: {appointments}}
    }

    function save(req) {
        const {roomId, firstName, dateOfAppointment} = req.body
        const user = req.user

        const appointments = service.createAppointment({user, roomId, firstName, dateOfAppointment})
        return {code: 201, body: {message: 'Appointment created sucessfully', appointments}}
    }

    return {index, save}
}