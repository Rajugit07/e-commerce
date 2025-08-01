import { instance } from "../server.js";
import crypto from "crypto";
import Payment from "../models/payment.model.js";
import Order from "../models/order.model.js";

//order create
export const checkout = async (req, res) => {
    try {
        const { amount, user, products } = req.body;
        const options = {
            amount: Number(req.body.amount),
            currency: "INR",
        };
        const order = await instance.orders.create(options);

        await Order.create({
            user,
            products,
            totalAmount: amount / 100, // store in INR
            razorpay_order_id: order.id,
            status: "Created",
        });

        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error("Payment error:", error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const paymentverification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

    const generated_signature = crypto
        .createHmac("sha256", process.env.KEY_SECRET)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

    const isAuthenticate = generated_signature === razorpay_signature;

    if (isAuthenticate) {
        //database
        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

        await Order.findOneAndUpdate(
            { razorpay_order_id },
            {
                razorpay_payment_id,
                razorpay_signature,
                status: "Paid",
            }
        );
        res.redirect(
            `https://e-commerce-9kun.onrender.com/payment/paymentsuccess?reference=${razorpay_payment_id}`
        );
    } else {
        return res.status(400).json({
            success: false,
            message: "Payment verification failed",
        });
    }
};

// https://e-commerce-chi-two-50.vercel.app
// https://e-commerce-9kun.onrender.com