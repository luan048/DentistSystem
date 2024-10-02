export class AuthUserController {
    constructor(service) {
        this.service = service
    }

    register(req, res) {
        const { firstName, email, password } = req.body

        try {
            const user = this.service.register(firstName, email, password)
            return { status: 201, body: user }
        }

        catch (error) {
            return { status: 400, body: { message: error.message } }
        }
    }

    login(req, res) {
        const { email, password } = req.body

        try {
            const body = this.service.login(email, password)
            return { status: 200, body }
        }

        catch (error) {
            return { status: 400, body: { message: error.message } }
        }
    }

}