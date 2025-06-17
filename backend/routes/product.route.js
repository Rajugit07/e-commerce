import express from "express";
import { createProduct, filterProductByColor, filterProductBySize, filterProductsByPrice } from "../controllers/product.controller.js";

const router = express.Router();

router.route("/product/create").post(createProduct);
router.route("/products/filterByPrice").get(filterProductsByPrice);
router.route("/products/filterBySize").get(filterProductBySize);
router.route("/products/filterByColor").get(filterProductByColor);


export default router;