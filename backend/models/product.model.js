import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        productId: {
            type: String,
            unique: true,
            trim: true,
            required: true,
        },
        title: {
            type: String,
            trim: true,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },
        image: [
            {
                url: {
                    type: String,
                    required: true,
                },
            },
        ],
        category: {
            type: String, // e.g. "man", "woman", "kids", "beauty"
            required: true,
            lowercase: true,
        },
        subCategory: {
            type: String, // e.g. "Topwear", "Indian Wear", "Footwear"
            required: true,
        },
        productType: {
            type: String, // e.g. "T-Shirt", "Saree", "Shoes"
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        color: {
            type: [String],
            required: true,
        },
        checked: {
            type: Boolean,
            required: false,
        },
        stock: {
            type: Number,
            required: true,
            default: 1,
        },
        discount: {
            type: Number,
            required: true,
            default: 10,
        },
        coupon: {
            type: Number,
            required: true,
            default: 20,
        },
    },
    {
        timestamps: true,
    }
);
export default mongoose.model("Products", productSchema);
