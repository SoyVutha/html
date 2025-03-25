import { JWT_SECRET } from "../config/env.js";
import jwt from 'jsonwebtoken';
import User from "../Models/user.model.js";
 export const authorize=async(req,res,next)=>{
    try{
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token=req.headers.authorization.split(' ')[1];
        }
        
        if(!token) return res.status(401).json({success:false,message:'No Token Found,You are unAuthorize!'});
        
        const decoded=jwt.verify(token,JWT_SECRET);
        console.log("Decode Token by the auth middleware : ", decoded)
        
        const user=await User.findById(decoded.userId).select('-password');
        
        if (!user) return res.status(401).json({success:false,message:'No User ,You are unAuthorize!'});
        req.user=user;
        next();


    }catch(error){
        res.status(401).json({message:"Unauthorized",error:error.message})
    }
}