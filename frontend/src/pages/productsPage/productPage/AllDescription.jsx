import React from "react";
import ProductDescription from "./ProductDescription";

const product = {
    title: "Classic Leather Jacket",
    description: "Genuine leather, perfect for all seasons and styles.",
    price: 129.99,
    sizes: ["S", "M", "L", "XL"],
};

const AllDescription = () => {
    return (
        <div>
            <ProductDescription product={product} />
        </div>
    );
};

export default AllDescription;
