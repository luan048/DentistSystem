import express from "express";

import {routerAppointment} from './routes/routesAppointment.js'
import {routerAuth} from './routes/routesAuth.js'
import {routerDentist} from './routes/routesDentist.js'

const server = express()
const port = 8001

server.use(express.json())
server.use(routerAppointment)
server.use(routerAuth)
server.use(routerDentist)

server.listen(port, () => {
    console.log(`Running in port: ${port}`)
})