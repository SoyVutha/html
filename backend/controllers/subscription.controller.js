import subscript from "../Models/subscription.model.js";
const createSubscription=async(req,res,next)=>{
    try{
        console.log("User in request : ", req.user);
        const subscription= await subscript.create({
            ...req.body,
            user:req.user._id
        })
        res.status(201).json({message:true,subscription});
    }
    catch(error){
        next(error);
    }
}

export const getUserSubscriptions=async(req,res,next)=>{
    try{
          console.log("req.user._id:", req.user._id);  // Log user ID from request object
        console.log("req.params._id:", req.params.id);  // Log ID from URL params

        if (req.user._id!=req.params.id){
            const error=new Error("You are not the owner of this account");
            error.status=401    
            throw error;
        }
        const subscriptions=await subscript.find({user:req.params._id}).populate("user");
        console.log(subscriptions);
        res.status(200).json({success:true,data:subscriptions});
    }
    catch(error){
        next(error);
    }
}


export default createSubscription;