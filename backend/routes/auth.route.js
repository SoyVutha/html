import { Router } from "express";
const authRouter = Router();
import { signIn,signOut,signUp } from '../controllers/auth.controller.js'

//Path: /api/v1/auth/sign-up 
authRouter.post('/sign-up',signUp )

//Path: /api/v1/auth/sign-in 
authRouter.post('/sign-in',signIn )

//Path: /api/v1/auth/sign-out 
authRouter.post('/sign-out',signOut )

export default authRouter;