import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
    return (
        <>
            <Link
                to="/wishlist"
                className="flex-1 bg-[#ff406c] text-white text-sm font-semibold px-4 py-3 rounded-md transition duration-200 shadow text-center"
            >
                Add to Wishlist
            </Link>
            <Link
                to="/checkout/cart"
                className="flex-1 bg-black hover:bg-zinc-800 text-white text-sm font-semibold px-4 py-3 rounded-md transition duration-200 shadow text-center"
            >
                Buy Now
            </Link>
        </>
    );
};

export default Button;
