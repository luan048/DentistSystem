export class DentistRepository {
    constructor() {
        this.dentists = []
    }

    findByCRO(cro) {
        return this.dentists.find((dentist) => dentist.cro === cro)
    }

    save(dentist) {
        this.dentists.push(dentist)
    }
}