import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        user: [
            {
                type: String,
                required: true,
            },
        ],
        products: [
            {
                productId: String,
                name: String,
                price: Number,
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        totalAmount: {
            type: Number,
            required: true,
        },
        razorpay_order_id: String,
        razorpay_payment_id: String,
        razorpay_signature: String,
        status: {
            type: String,
            enum: ["Created", "Paid", "Failed"],
            default: "Created",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
