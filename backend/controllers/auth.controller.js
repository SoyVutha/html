import mongoose from "mongoose"
import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRE_IN,JWT_SECRET } from "../config/env.js";

export const signUp=async(res,req,next)=>{
    //With startSession, both steps will happen together, or nothing happens if something goes wrong.
    const session=await mongoose.startSession();
    session.startTransaction();
    try{
        const {name,email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser) {
            const error=new Error("User already exist");
            error.statusCode=409;
            throw error;
        }

        //hash password : secure the password
        const salt=await bcrypt.genSalt(10);//A salt is a random value added to a password before hashing to make it more secure
        const hashPassword=await bcrypt.hash(password,salt);

        const newUser=await User.create([{name,email,password:hashPassword},{session},JWT_SECRET,{expireIn:JWT_EXPIRE_IN}]);


        const token=jwt.sign({userId:newUser[0]._id},);
        //commitTransaction saves (confirms) all changes made inside a transaction. Once committed, the changes cannot be undone.
        await session.commitTransaction();
        session.endSession();
        res.statusCode(201).json({
            success:true,
            message:"User create Successfully",
            data:{
                token,
                user:newUser[0],
            }    
        })
    }catch(error){
        //abortTransaction cancels (rolls back) all changes inside a MongoDB transaction if something goes wrong.
        await session.abortTransaction();
        session.endSession();
        next(error);

    }
}

export const signIn=async(res,req,next)=>{
}

export const signOut=async(res,req,next)=>{
}
