import express from 'express';
import { PORT, NODE_ENV } from './config/env.js';
import userRouter from './routes/users.route.js';
import authRouter from './routes/auth.route.js';
import subscriptionRouter from './routes/subscription.js';
import connectDB from './Database/mongodb.js';
const app = express();
app.use('/api/v1/user', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.get('/', (req, res) => {
    res.send('Hello World from the server');
})

app.listen(PORT, async() => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectDB();

})
export default app;
