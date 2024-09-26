import { v4 as uuidv4 } from "uuid";

export class Dentist {
    constructor({id, nome, cro, password}) {
        this.id = id ?? uuidv4()
        this.nome = nome
        this.cro = cro
        this.password = password
    }
}