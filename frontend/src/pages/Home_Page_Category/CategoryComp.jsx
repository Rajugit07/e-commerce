import React from "react";
import ProductType from "./ProductType";

const CategoryComp = ({ categoryName, products }) => {
    return (
        <div className="my-8">
            <h1 className="text-2xl font-bold capitalize">{categoryName}</h1>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {products.map((product) => (
                    <ProductType
                        key={product._id}
                        productTitle={product.productType || product.description}
                        category={product.subCategory || product.title}
                        type={product.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryComp;
