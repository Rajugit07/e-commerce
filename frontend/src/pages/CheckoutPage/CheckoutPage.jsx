import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import AddToCartProduct from "./AddToCartProduct";
import PriceDetails from "./PriceDetails";
import AddressComp from "./AddressComp";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
    const selectedProduct = useSelector(
        (state) => state.productReducer.selectedProduct
    );

    return (
        <>
            <div className="w-full h-full">
                <nav>
                    <Navbar />
                </nav>

                {selectedProduct &&
                Object.keys(selectedProduct).length !== 0 ? (
                    <div className="w-full h-full flex sm:justify-between px-6 gap-2 max-sm:flex-wrap">
                        {/* Address comp */}
                        <section className="sm:hidden w-full mt-4">
                            <AddressComp />
                        </section>

                        {/* Product Cart */}
                        <section className="sm:w-6/10 h-full max-sm:w-full py-4">
                            <AddToCartProduct />
                        </section>

                        {/* Price Description */}
                        <section className="sm:w-4/10 h-full py-4 max-sm:w-full">
                            <PriceDetails />
                        </section>
                    </div>
                ) : (
                    <p className="text-center font-semibold text-xl text-zinc-500">
                        No product selected
                    </p>
                )}
            </div>
        </>
    );
};

export default CheckoutPage;
