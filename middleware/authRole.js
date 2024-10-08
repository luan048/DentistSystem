import { authService } from '../routes/routesAuth.js'

export const AuthRole = {
    preHandler: (req, res, next) => {
        const token = req.headers.authorization?.replace(/^Bearer /, "")
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: token missin" })
        }

        const user = authService.verifyToken(token)
        if (!user) {
            return res.status(404).json({ message: "Unauthorized: invalid token" })
        }

        req.user = user
        next()
    }
}