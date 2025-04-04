import express from 'express';
import { PORT, NODE_ENV } from './config/env.js';
import userRouter from './routes/users.route.js';
import authRouter from './routes/auth.route.js';
import subscriptionRouter from './routes/subscription.js';
import connectDB from './Database/mongodb.js';
import subscript from './Models/subscription.model.js';
import errorMiddleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';
import { arcjectmiddleware } from './Models/arcjet.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.use(errorMiddleware);
app.use(arcjectmiddleware);

app.get('/', (req, res) => {
    res.send('Hello World from the server');
})

app.listen(PORT, async() => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectDB();

})
export default app;
