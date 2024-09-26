import bcrypt from 'bcrypt'
import { User } from '../models/authModel'
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config()

export class AuthService {
    constructor(repository) {
        this.repository = repository
    }

    register(name, email, password) {
        const userExists = this.repository.findByEmail(email)
        if (userExists) throw new Error("This email was already user another user")

        const newUser = new User({ name, email, password })
        newUser.password = bcrypt.hashSync(newUser.password, 10)

        this.repository.save(newUser)
        return newUser
    }

    login(req, res) {
        const token = jwt.sign({ id: req.user.id, email: req.user.email }, process.env.SECRET, { expiresIn: "1d" })
        req.user.password = undefined
        return { token, user:  req.user }
    }

    verifyToken(token) {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        const user = this.repository.findByEmail(decodedToken.email)
        return user
    }
}