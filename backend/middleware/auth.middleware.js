import { JWT_SECRET } from "../config/env";
import jwt from 'jsonwebtoken';
import User from "../Models/user.model";
 export const authorize=async(req,res,next)=>{
    try{
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token=req.headers.authorization.split(' ')[1];
        }
        
        if(!token) return res.status(401).json({success:false,message:'You are unAuthorize!',error:error.message});
        
        const decoded=jwt.verify(token,JWT_SECRET);
        
        const user=await User.findById(decoded.id).select('-password');
        
        if (!user) return res.status(401).json({success:false,message:'You are unAuthorize!',error:error});
        req.user=user;
        next();


    }catch(error){
        res.status(401).json({message:"Unauthorized",error:error.message})
    }
}