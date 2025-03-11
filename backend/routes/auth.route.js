import { Router } from "express";
const authRouter = Router();

authRouter.post('/sign-up',(req, res) => {res.send({ tittle: 'Sign up route' });  })
authRouter.post('/sign-in',(req, res) => {res.send({ tittle: 'Sign in route' });  })
authRouter.post('/sign-out',(req, res) => {res.send({ tittle: 'Sign out route' });  })

export default authRouter;