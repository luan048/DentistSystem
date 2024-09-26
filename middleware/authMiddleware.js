import bcrypt from 'bcrypt'
import { User } from '../models/authModel'

// MAKE TO CONNECTION WITH authService in ROUTES
export const verifyPassword = async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) return res.status(404).json({ message: 'User not found.' })

    const isSamePassword = bcrypt.compareSync(password, user.password)
    if (!isSamePassword) return res.status(401).json({message: "Invalid Password"})

    req.user = user

    next()
}