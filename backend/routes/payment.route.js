import express from "express";
import {
    checkout,
    paymentverification,
} from "../controllers/payment.controller.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/checkout").post(isAuthenticated, checkout);
router.route("/paymentverification").post(paymentverification);

export default router;
