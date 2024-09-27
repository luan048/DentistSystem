import bcrypt from 'bcrypt'
import { User } from '../models/authModel'


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
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })

        if (!user) return res.status(404).json({ message: 'User not found.' })

        const isSamePassword = bcrypt.compareSync(password, user.password)
        if (!isSamePassword) return res.status(401).json({ message: "Invalid Password" })

        req.user = user

        next()
    }
}