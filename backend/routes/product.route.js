import express from "express";
import { createProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.route("/product/create").post(createProduct)


export default router;