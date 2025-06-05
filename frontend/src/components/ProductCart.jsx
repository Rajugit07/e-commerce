import React from "react";
import Cart from "./Cart";

const ProductCart = ({ sectionTitle, items }) => {
    return (
        <div>
            <h1 className="ml-6 mt-10 text-2xl font-semibold text-zinc-700">{sectionTitle}</h1>
            <Cart items={items} />
        </div>
    );
};

export default ProductCart;
