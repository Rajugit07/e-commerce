import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import productRoute from "./routes/product.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};
app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);

//Product api
app.use("/api/v1",productRoute)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on PORT ${PORT}`);
});
