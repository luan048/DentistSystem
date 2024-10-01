import express from "express";

import {routerAppointment} from './routes/routesAppointment'
import {routerAuth} from './routes/routesAuth'
import {routerDentist} from './routes/routesDentist'

const server = express()
const port = 8001

server.use(express.json())
server.use(routerAppointment)
server.use(routerAuth)
server.use(routerDentist)

server.listen(port, () => {
    tryToConnect()
    console.log(`Running in port: ${port}`)
})