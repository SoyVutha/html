import { Router } from "express";
const subscriptionRouter = Router();    

// Subscribe
subscriptionRouter.get('/', (req, res) => { res.send({ title: 'Subscribe Route' }); });

subscriptionRouter.get('/:id', (req, res) => { res.send({ title: 'Subscribe ID Route' }); });

subscriptionRouter.post('/', (req, res) => { res.send({ title: 'Create Subscribe Route' }); });

subscriptionRouter.put('/:id', (req, res) => { res.send({ title: 'Update Subscribe Route' }); });

subscriptionRouter.delete('/:id', (req, res) => { res.send({ title: 'Delete Subscribe Route' }); });

subscriptionRouter.get('/user/:id', (req, res) => { res.send({ title: 'Get all user Subscribe ID Route' }); });

subscriptionRouter.put('/:id/cancel', (req, res) => { res.send({ title: 'Cancel Subscribe' }); });

subscriptionRouter.get('/upcoming-renewals', (req, res) => { res.send({ title: 'Upcoming Renewals Subscribe' }); });

export default subscriptionRouter;

