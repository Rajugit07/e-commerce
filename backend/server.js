// 1. Imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import Razorpay from "razorpay";

// 2. Config
dotenv.config();

// 3. Local imports
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import productRoute from "./routes/product.route.js";
import paymentRoute from "./routes/payment.route.js";
import orderRoute from "./routes/order.route.js";

// 4. App setup
const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: [
        "http://localhost:5173",
        "https://e-commerce-chi-two-50.vercel.app",
    ],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// 5. Razorpay instance
export const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
});

// 6. Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/orders", orderRoute);

app.get("/api/v1/getkey", (req, res) =>
    res.status(200).json({ key: process.env.KEY_ID })
);

app.get("/", (req, res) => {
    res.send("Server is running");
});

// 7. Start server after DB connects
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`);
        });
    } catch (err) {
        console.error("Failed to connect to DB", err);
        process.exit(1);
    }
};

startServer();
