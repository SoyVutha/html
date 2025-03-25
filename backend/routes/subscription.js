import { Router } from "express";
import { authorize } from "../middleware/auth.middleware.js";
import createSubscription from "../controllers/subscription.controller.js";
import { getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();    

// Subscribe
subscriptionRouter.get('/', (req, res) => { res.send({ title: 'Subscribe Route' }); });

subscriptionRouter.get('/:id', (req, res) => { res.send({ title: 'Subscribe ID Route' }); });

subscriptionRouter.post('/',authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => { res.send({ title: 'Update Subscribe Route' }); });

subscriptionRouter.delete('/:id', (req, res) => { res.send({ title: 'Delete Subscribe Route' }); });

subscriptionRouter.get('/user/:id', authorize,getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => { res.send({ title: 'Cancel Subscribe' }); });

subscriptionRouter.get('/upcoming-renewals', (req, res) => { res.send({ title: 'Upcoming Renewals Subscribe' }); });

export default subscriptionRouter;

