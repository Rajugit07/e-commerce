import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    productId:{
        type:String,
        unique:true,
        trim:true,
        require:true
    },
    title:{
        type:String,
        trim:true,
        require:true
    },
    price:{
        type:Number,
        trim:true,
        require:true,
    },
    description:{
        type:String,
        trim:true,
        require:true
    },
    image:[
        {
            public_id:{
                type:String,
                require:true
            },
            url:{
                type:String,
                require:true
            }
        }
    ],
    category:{
        type:String,
        require:true
    },
    checked:{
        type:Boolean,
        require:false
    },
    stock:{
        type:Number,
        require:true,
        require:true,
        default:1,
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("Products",productSchema);