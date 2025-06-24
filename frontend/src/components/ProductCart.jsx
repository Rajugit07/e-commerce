import React from "react";
import Cart from "./Cart";

const ProductCart = ({ items, productType }) => {
    return (
        <div className="mt-10">
            <h1 className="ml-6 text-2xl font-semibold text-zinc-700 uppercase">
                {productType}
            </h1>
            <Cart key={items.productId} items={items} />
        </div>
    );
};

export default ProductCart;
