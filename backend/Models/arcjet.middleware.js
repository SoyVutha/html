import { aj } from "../config/arcjet.js";
export const arcjectmiddleware=async(req,res,next)=>{
    try{
        const dicision = await aj.protect(req);
        
        if(dicision.isDenied){
            if(dicision.reason.isRateLimit()){
                return res.status(429).send(dicision.reason.message);
            }
            if(dicision.reason.isBot()) {
                return res.status(403).send(dicision.reason.message);
            }
            return res.status(403).json({érror:'access denied'});
        }
        next();

    }catch(error){
        console.error(error);
        res.status(500).send({message:"Internal Server Error"});
        next(error);
    }
}