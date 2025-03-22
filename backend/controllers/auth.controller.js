import mongoose from "mongoose"
import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRE_IN,JWT_SECRET } from "../config/env.js";

export const signUp=async(req,res,next)=>{
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

        const newUser = await User.create([{ name, email, password: hashPassword }], { session });

        const token = jwt.sign({ userId: newUser[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRE_IN });
        //commitTransaction saves (confirms) all changes made inside a transaction. Once committed, the changes cannot be undone.
        await session.commitTransaction();
        session.endSession();
        res.status(201).json({
            success:true,
            message:"User create Successfully",
            data:{
                token,
                User:newUser[0],
            }    
        })
    }catch(error){
        //abortTransaction cancels (rolls back) all changes inside a MongoDB transaction if something goes wrong.
        await session.abortTransaction();
        session.endSession();
        next(error);

    }
}

export const signIn=async(req,res,next)=>{
    try{
        const {email, password} =req.body;
        const user = await User.findOne({email});
        if(!user) {
            const error=new Error('User not found ');
            error.statusCode=404;
            throw error;
        }
        const isPasswordValid= await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            const error=new Error('Invalid password');
            error.statusCode=401;
            throw error;
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRE_IN})
        res.status(200).json({
            success:true,
            message:"User login Successfully",
            data:{
                token,
                User:user
                }
        })
    }
    catch(error){
        next(error);
    }
}

export const signOut=async(res,req,next)=>{
}
