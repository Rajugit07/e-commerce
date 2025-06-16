import  Product  from "../models/product.model.js";

export const createProduct = async (req, res) => {
    try {
        const {
            productId,
            title,
            price,
            description,
            category,
            subCategory,
            productType,
            stock,
            checked,
            image,
        } = req.body;

        const newProduct = new Product({
            productId,
            title,
            price,
            description,
            category,
            subCategory,
            productType,
            stock,
            checked,
            image,
        });

        await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Product created",
            product: newProduct,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error uploading product",
            error: error.message,
        });
    }
};
