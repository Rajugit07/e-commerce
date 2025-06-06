import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true,
        enum:["user","admin"]
    }
},
{
    timestamps:true,
})

export const User = mongoose.model("User",userSchema);