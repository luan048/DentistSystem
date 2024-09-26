export class AuthDentist {
    constructor(service) {
        this.service = service
    }

    register(req) {
        const {nome, cro, password} = req.body

        try {
            const dentist = this.service.register(nome, cro, password)
            return {code: 201, body: dentist}
        }

        catch(error) {
            return {code: 400, body: {message: error.message}}
        }
    }

    login(req) {
        const {cro, password} = req.body
        
        try {
            const body = this.service.login(cro, password)
            return {code: 200, body}
        }

        catch(error) {
            return {code: 400, body: {message: error.message}}
        }
    }
}