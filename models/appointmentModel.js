import {v4 as uuidv4} from 'uuid'

export class Appointment {
    constructor ({id, user, roomId, firstName, dateOfAppointment}) { // Analisar o dateOfAppointment 
        this.id = id ?? uuidv4()
        this.user = user
        this.roomId = roomId
        this.firstName = firstName
        this.dateOfAppointment = dateOfAppointment
    }
}