import React from "react";

const ProductType = ({ productTitle, category }) => {
    return (
        <div className="border border-zinc-200 w-full h-40 bg-zinc-700 text-white flex flex-col items-center justify-center p-2">
            <h1 className="text-lg font-semibold">{category}</h1>
            <h2 className="text-sm">{productTitle}</h2>
        </div>
    );
};

export default ProductType;
