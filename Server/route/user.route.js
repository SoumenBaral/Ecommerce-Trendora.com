import { Router } from "express";
import {registerUserController} from './controllers/RegisterUserController';

const userRouter = Router();

userRouter.post('/register',registerUserController)

