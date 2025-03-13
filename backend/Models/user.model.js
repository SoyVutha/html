import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {type: String, required: [true, "User Name is required"],trim: true,minlength: 3,maxlength: 50},
    email: {type: String, required: [true, "User Email is required"],trim: true,unique: true,minlength: 3,maxlength: 50,lowercase: true,match: [/\S+@\S+\.\S+/, "Please enter a valid email"]},
    password: {type: String, required: [true, "User Password is required"],minlength: 6},
 
},{timestamps: true}); //The timestamps option automatically adds two fields to your data:createdAt updatedAt
const User = mongoose.model("User", userSchema);
export default User;