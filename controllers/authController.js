export class AuthController {
    constructor(service) {
        this.service = service
    }

    register(req) {
        const {firstName, email, password} = req.body

        try {
            const user = this.service.register(firstName, email, password)
            return {code: 201, body: user}
        }

        catch(error) {
            return {code: 400, body: {message: error.message}}
        }
    }

    login(req) {
        const {email, password} = req.body

        try {
            const body = this.service.login(email, password)
            return {code: 200, body}
        }

        catch(error) {
            return {code: 400, body: {message: error.message}}
        }
    }
}