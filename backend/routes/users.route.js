import { Router } from "express";
const userRouter = Router();
import { getUsers,getUser } from "../controllers/user.controller.js";
import { authorize } from "../middleware/auth.middleware.js";

// Get User Info
// Path: /users
userRouter.get('/', getUsers);
userRouter.get('/:id',authorize, getUser);

// Create
userRouter.post('/', (req, res) => { res.send({ title: 'Create new user Route' }); });

// Update 
userRouter.put('/:id', (req, res) => { res.send({ title: 'Update user Route' }); });

// Delete User
userRouter.delete('/:id', (req, res) => { res.send({ title: 'Delete user Route' }); });

export default userRouter;