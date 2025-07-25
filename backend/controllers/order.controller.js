import Order from "../models/order.model.js";

export const getUserOrders = async (req, res) => {
    try {
        const { user } = req.query;

        if (!user) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const orders = await Order.find({ user: user }).sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            orders,
        });
    } catch (error) {
        console.error("Error fetching orders:", error.message);
        res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
            error: error.message,
        });
    }
};
