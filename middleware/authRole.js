import {UserRepository} from '../database/authRep.js'
import {AuthService} from '../services/authService.js'

const userRepository = new UserRepository()
const userService = new AuthService(userRepository)

export const AuthRole = {
    preHandler: (req, reply, done) => {
        const token = req.headers.authorization?.replace(/^Bearer /, "")
        if(!token) reply.status(401).json({message: "Unauthorized: token missing"})

        const user = userService.verifyToken(token)
        if(!user) reply.status(404).json({message: "Unauthorized invalid token"})

        req.user = user
        done()
    }
}