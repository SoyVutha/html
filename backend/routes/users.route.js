import { Router } from "express";
const userRouter = Router();
// Get User Info
userRouter.get('/', (req, res) => { res.send({ title: 'Fetch all user Route' }); });
userRouter.get('/:id', (req, res) => { res.send({ title: 'Fetch all specific user Route' }); });

// Create
userRouter.post('/', (req, res) => { res.send({ title: 'Create new user Route' }); });

// Update 
userRouter.put('/:id', (req, res) => { res.send({ title: 'Update user Route' }); });

// Delete User
userRouter.delete('/:id', (req, res) => { res.send({ title: 'Delete user Route' }); });

export default userRouter;