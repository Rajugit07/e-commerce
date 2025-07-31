import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import productRoute from "./routes/product.route.js";
import Razorpay from "razorpay";
import paymentRoute from "./routes/payment.route.js";
import orderRoute from "./routes/order.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: ["http://localhost:5173","https://e-commerce-chi-two-50.vercel.app"],
    credentials: true,
};
app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));

export const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
});

// api
app.use("/api/v1/user", userRoute);

//Product api
app.use("/api/v1", productRoute);

// payment route
app.use("/api/v1", paymentRoute);
app.use("/api/v1",orderRoute);
app.get("/api/v1/getkey", (req, res) =>
    res.status(200).json({ key: process.env.KEY_ID })
  );

// test route
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on PORT ${PORT}`);
});
