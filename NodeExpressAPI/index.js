// REMEMBER THAT NODE AND EXPRESS IS ALL ABOUT ROUTING
import express from 'express';
import bodyParser from 'body-parser';
import {router as usersRouter} from './routes/users.js';

const app=express();
const PORT=process.env.PORT||5000;

app.use(bodyParser.json());

app.use('/users',usersRouter);

app.get('/',(req,res)=>{
    res.status(200).json("Hello Duck from GET");
  
})

app.listen(PORT,()=>{
    console.log(`server is running on port:http://localhost:${PORT}`);
})
