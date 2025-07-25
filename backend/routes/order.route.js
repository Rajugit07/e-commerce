import express from "express";
import { getUserOrders } from "../controllers/order.controller.js";
// import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/orders").get(getUserOrders);

export default router;