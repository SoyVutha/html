const errorMiddleware=(err,req,res,next)=>{
    try{
        let error={...err};
        error.message=err.message;
        console.log(err);
        if(err.name==="CastError"){
            error.message=`Resource not found.Invalid:${err.path}`;
            error=new Error(error.message);
            error.statusCode=404;
        }
        if(err.code===11000){
            error.message=`Duplicate Field Value Entered`;
            error=new Error(error.message);
            error.statusCode=400;
        }
        if(err.name==="ValidationError"){
          const message=Object.values(err.errors).map(value=>value.message);
          error=new Error(message.join(", "));
          error.statusCode=400;

        }
        res.status(error.statusCode || 500).json({
            success:false,
            message:error.message || "Server Error"
        })
    }
    catch(error){
        next(error);
    }
}
export default errorMiddleware;