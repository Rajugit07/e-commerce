import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import AddToCartProduct from "./AddToCartProduct";
import PriceDetails from "./PriceDetails";
import AddressComp from "./AddressComp";

const CheckoutPage = () => {
    return (
        <div className="w-full h-full">
            <nav>
                <Navbar />
            </nav>

            <div className="w-full h-full flex sm:justify-between px-6 gap-2 max-sm:flex-wrap">
                {/* Address comp */}
                <div className="sm:hidden w-full mt-4">
                    <AddressComp />
                </div>

                {/* Product Cart */}
                <div className="sm:w-6/10 h-full bg-[#f4f4f4] max-sm:w-full py-4">
                    <AddToCartProduct />
                </div>

                {/* Price Description */}
                <div className="sm:w-4/10 h-full py-4 max-sm:w-full">
                    <PriceDetails />
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
