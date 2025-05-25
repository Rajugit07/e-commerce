import express from 'express'
import dotenv from "dotenv";
import connectDB from './database/db.js';
import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());


// api
app.use("/api/v1/user",userRoute);


app.listen(PORT,()=> {
    connectDB();
    console.log(`Server running on PORT ${PORT}`);
})

