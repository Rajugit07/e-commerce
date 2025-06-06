import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import AddToCartProduct from "./AddToCartProduct";
import PriceDetails from "./PriceDetails";

const CheckoutPage = () => {
    return (
        <div className="w-full h-full">
            <nav>
                <Navbar />
            </nav>

            <div className="w-full h-full flex justify-between px-6 gap-2">
                {/* Product Cart */}
                <div className="w-6/10 h-full bg-[#f4f4f4]">
                    <AddToCartProduct />
                </div>

                {/* Price Description */}
                <div className="w-4/10 h-full py-4">
                    <PriceDetails />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
