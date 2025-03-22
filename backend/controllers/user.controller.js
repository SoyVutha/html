import User from "../Models/user.model.js";
export const getUsers= async(req,res,next)=>{
    try {
            const users = await User.find();
            res.status(200).json({message:true,data:users });
    }
    catch(error){
        next(error);
    }
}

export const getUser= async(req,res,next)=>{
    try {
        const id = req.params.id;
        const user = await User.findById(id).select('-password');  // Exclude password field
        if(!user){
            const error = new Error("user not found");
            res.status(404)
            throw error;
        }

            res.status(200).json({message:true,data:user });
    }
    catch(error){
        next(error);
    }
}