import { Router } from "express";

import {DentistRepository} from '../database/dentistRep.js'
import {DentistService} from '../services/dentistService.js'
import {AuthDentist} from '../controllers/dentistController.js'
import {DentistValidation} from '../middleware/dentistMiddleware.js'