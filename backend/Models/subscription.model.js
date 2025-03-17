import mongoose from "mongoose";
const subscriptionSchema = new mongoose.Schema({
    name:{type:string,required:[true,"Subscription Name is required"],trim:true,minlength:3,maxlength:50},
    price:{type:Number,required:[true,"Subscription Price is required"],min:[0,"Price must be greater than 0"]},
    currency:{type:String,enum:["USD","EUR","GBP"],default:"USD",},
    frequency:{type:String,enum:["daily","weekly","monthly","yearly"],default:"monthly"},
    category:{type:String,enum:["business","entertainment","general","health","science","sports","technology"],require:true,trim:true,default:"general"},
    status:{type:String,enum:["active","cancel","expired"],default:"active"},
    start_date:{
        type:Date,
        required:true,
        validate:{
            validator:(value)=>value<=new Date(),
            message:"Start Date must be less than or equal to today's date"
    }},
    renewal_date:{
       type:Date,
        validate:{
            validator:function (value) {value>this.start_date},
            message:"Renewal Date must be greater than or equal to Start Date"
        }
    },
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,index:true},
    
},{timestamps:true});

subscriptionSchema.pre("save",function(next){
    if(!this.renewal_date){
        const renewalPeriod={
            daily:1,
            weekly:7,
            monthly:30,
            yearly:365  
        };
        this.renewal_date=new Date(this.start_date);
        this.renewalPeriod.setDate(this.renewal_date.getDate()+renewalPeriod[this.frequency])
    }
    if(this.renewal_date<new Date()){
        this.status="expired";
    }
    next();
})

const subscript = mongoose.model("Subscription",subscriptionSchema);
export default subscript;