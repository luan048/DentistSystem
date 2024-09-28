import { Router } from "express";

import {UserRepository} from '../database/authRep.js'
import {AuthService} from '../services/authService.js'
import { AuthUserController } from "../controllers/authController.js";
import {AuthValidation} from '../middleware/authMiddleware.js'