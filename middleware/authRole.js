import { authService } from '../routes/routesAuth.js'

import { dentistService} from '../routes/routesDentist.js'

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

//Está pegando o service(verify) das rotas dentist, verificando se dentist existe para dar permissão
export const DentistRole = {
    preHandler: (req, res, next) => {
        const token = req.headers.authorization?.replace(/^Bearer /, "")
        if(!token) {
            return res.status(401).json({message: "Unauthorized: token missing"})
        }

        const dentist = dentistService.verify(token)
        if(!dentist) {
            return res.status(404).json({message: "Unauthorized: your role isn't permission"})
        }

        req.dentist = dentist
        next()
    }
}