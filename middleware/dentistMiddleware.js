export class DentistValidation {

    async registerValidation(req, res, next) {
        const {nome, cro, password} = req.body || {}
        const fields = ["nome", "cro", "password"]
        const errors = []

        for(const field of fields) {
            if(!req.body[field]) {
                errors.push(`The ${field} is null`)
            }
        }

        if(errors.length) {
            return res.status(404).json({message: errors})
        }

        next()
    }

    async loginValidation(req, res, next) {
        const {cro, password} = req.body || {}
        const fields = ["cro", "password"]
        const errors = []

        for(const field of fields) {
            if(!req.body[field]) {
                errors.push(`The ${field} is null`)
            }
        }

        if(errors.length) {
            return res.status(404).json({message: errors})
        }

        next()
    }
}