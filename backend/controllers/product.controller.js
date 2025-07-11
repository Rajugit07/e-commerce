import Product from "../models/product.model.js";

// new product create
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
            size,
            color,
            checked,
            image,
        } = req.body;

        // Basic validation
        if (!title || typeof title !== "string") {
            return res.status(400).json({
                success: false,
                message: "Title is required and must be a string",
            });
        }

        if (price == null || typeof price !== "number" || price < 0) {
            return res.status(400).json({
                success: false,
                message: "Price is required and must be a positive number",
            });
        }

        if (!category || typeof category !== "string") {
            return res.status(400).json({
                success: false,
                message: "Category is required and must be a string",
            });
        }

        if (stock == null || typeof stock !== "number" || stock < 0) {
            return res.status(400).json({
                success: false,
                message: "Stock is required and must be a non-negative number",
            });
        }

        // Optionally check if productId is unique
        const existingProduct = await Product.findOne({ productId });
        if (existingProduct) {
            return res
                .status(409)
                .json({ success: false, message: "Product ID already exists" });
        }

        const newProduct = new Product({
            productId,
            title,
            price,
            description,
            category,
            subCategory,
            productType,
            stock,
            size,
            color,
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

// show All product
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().lean();
        res.status(200).json({
            success: true,
            count: products.length,
            products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: error.message,
        });
    }
};

// product filterByPrice

export const filterProductsByPrice = async (req, res) => {
    try {
        // Get maxPrice from query params
        const maxPrice = parseFloat(req.query.maxPrice);

        // Basic validation
        if (isNaN(maxPrice) || maxPrice <= 0) {
            return res.status(404).json({
                message: "Invalid max Price.",
            });
        }

        // MongoDB query: price less than or equal to maxPrice
        const products = await Product.find({
            price: { $lte: maxPrice },
        });

        res.status(200).json(products);
    } catch (error) {
        console.error("Error filtering products:", error);
        res.status(500).json({ message: "Server error." });
    }
};

//product filter by size

export const filterProductBySize = async (req, res) => {
    try {
        // Get size from query params
        const size = req.query.size?.trim();

        if (!size) {
            return res.status(400).json({ message: "Invalid size." });
        }

        const products = await Product.find({ size });
        res.status(200).json(products);
    } catch (error) {
        console.error("Error filtering products:", error);
        res.status(500).json({ message: "Server error." });
    }
};

//product filter by color

export const filterProductByColor = async (req, res) => {
    try {
        let colors = req.query.color;

        if (!colors) {
            return res
                .status(400)
                .json({ message: "Color parameter is required." });
        }
        // Handle multiple colors
        colors = colors.split(",").map((c) => c.trim().toLowerCase());

        const products = await Product.find({
            color: { $in: colors },
        });

        res.status(200).json(products);
    } catch (error) {
        console.error("Error filtering products:", error);
        res.status(500).json({ message: "Server error." });
    }
};

//product filter by category

export const productFilterByCategory = async (req, res) => {
    try {
        const normalize = (str) => str?.toLowerCase().trim();

        const category = normalize(req.query.category);
        const subCategory = normalize(req.query.subCategory);
        const productType = normalize(req.query.productType);

        //  filters
        const max = parseFloat(req.query.max); // price filter
        const color = normalize(req.query.color);
        const size = normalize(req.query.size);

        // Ensure all three values are provided
        if (!category || !subCategory || !productType) {
            return res.status(400).json({
                success: false,
                message: "All three filters (category, subCategory, productType) are required",
            });
        }

        const filter = {
            category: new RegExp(`^${category}$`, "i"),
            subCategory: new RegExp(`^${subCategory}$`, "i"),
            productType: new RegExp(`^${productType}$`, "i"),
        };

         //  price filter
         if (!isNaN(max)) {
            filter.price = { $lte: max };
        }

          //  color filter
          if (color) {
            filter.color = { $in: [new RegExp(`^${color}$`, "i")] };
        }

        //  size filter
        if (size) {
            filter.size = { $in: [new RegExp(`^${size}$`, "i")] };
        }

        const products = await Product.find(filter);

        res.status(200).json({
            success: true,
            count: products.length,
            products,
        });
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// search product

export const searchProduct = async (req,res) => {
    try {
        const {query} = req.query;

        if(!query) {
            return res.status(400).json({
                success:false,
                message:"Search query is required"
            })
        }

        const searchRegex = new RegExp(query, 'i');
        // const searchFields = ['title', 'description','category','subCategory','productType'];
        const searchFields = ['title',"description"];

        const products = await Product.find({
            $or: searchFields.map(field => ({
                [field]: {
                    $regex: searchRegex
                }
            }))
        }).limit(10);

        if (products.length === 0) {
            return res.status(404).json({
                success: true,
                message: 'No products found matching your search.',
                data: []
            });
        }

        res.status(200).json({
            success: true,
            message: 'Products fetched successfully.',
            count: products.length,
            data: products
        });

    } catch (error) {
        console.error('Error searching products:', error);
        res.status(500).json({
            success: false,
            message: 'Server error during product search.',
            error: error.message
        });
    }
}
