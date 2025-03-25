import mongoose from "mongoose";
import { DB_url,NODE_ENV } from "../config/env.js";


if(!DB_url){
    throw new Error('DB_url is not provided,please define DB_url in development/production.local file');   
}

const connectDB = async () => {
    try{
        await mongoose.connect(DB_url);
        console.log(`MongoDB connected in ${NODE_ENV} mode`);
    }catch(error){
        console.log("error : ",error);
        process.exit(1);
    }
}
export default connectDB;
