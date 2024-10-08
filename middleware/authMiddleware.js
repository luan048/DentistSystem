export class AuthValidation {

    async registerValidation(req, res, next) {
        const { name, email, password } = req.body || {}
        const fields = ["name", "email", "password"]
        const errors = []

        for (const field of fields) {
            if (!req.body[field]) {
                errors.push(`The ${field} is null`)
            }
        }

        if (errors.length) {
            return res.status(404).json({ message: errors })
        }

        next()
    }

    async loginValidation(req, res, next) {
        const { email, password } = req.body || {}
        const fields = ["email", "password"]
        const errors = []
    
        for (const field of fields) {
            if (!req.body[field]) {
                errors.push(`The ${field} is null`)
            }
        }
    
        if (errors.length) {
            return res.status(400).json({ message: errors })
        }
    
        next()
    }
    
}