import bcrypt from 'bcrypt'
import { Dentist } from '../models/dentistModel'
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config()

export class DentistService {
    constructor(repository) {
        this.repository = repository
    }

    register(nome, cro, password) {
        const dentistExists = this.repository.findByCRO(cro)
        if(dentistExists) throw new Error("This dentist was already registered ")

        const newDentist = new Dentist({nome, cro, password})
        newDentist.password = bcrypt.hashSync(newDentist.password, 10)

        this.repository.save(newDentist)
        return newDentist
    }

    login(cro, password) {
        const dentist = this.repository.findByCRO(cro)

        const token = jwt.sign({id: dentist.id, cro: dentist.cro}, process.env.SECRET, {expiresIn: "1d"})
        dentist.password = undefined
        return {token, dentist}
    }

    verify(token) {
        const decodedToken = jwt.verify(token, process.env.SECRET)
        const dentist = this.repository.findByCRO(decodedToken.cro)
        return dentist
    }
}