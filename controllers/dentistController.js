export class AuthDentist {
    constructor(service) {
        this.service = service
    }

    register(req, res) {
        const {nome, cro, password} = req.body

        try {
            const dentist = this.service.register(nome, cro, password)
            return {status: 200, body: dentist}
        }

        catch(error) {
            return {status: 400, body: {message: error.message}}
        }
    }

    login(req, res) {
        const {cro, password} = req.body
        
        try {
            const body = this.service.login(cro, password)
            return {status: 200, body}
        }

        catch(error) {
            return {status: 400, body: {message: error.message}}
        }
    }
}