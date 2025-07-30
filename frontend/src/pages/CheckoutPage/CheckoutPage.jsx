import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import AddToCartProduct from "./AddToCartProduct";
import PriceDetails from "./PriceDetails";
import AddressComp from "./AddressComp";
import { useSelector } from "react-redux";
import Footer from "../../layouts/Footer";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const CheckoutPage = () => {
    const selectedProduct = useSelector(
        (state) => state.productReducer.selectedProduct
    );
    const navigate = useNavigate();

   const EmptyAddToCart = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <FiShoppingCart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                No Products Available
            </h2>
            <p className="text-gray-600 text-center mb-6 max-w-md">
                Looks like your cart is empty. Browse our categories and add
                your favorite products to the cart.
            </p>
            <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
                Continue Shopping
            </button>
        </div>
    );
};

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
                    <EmptyAddToCart />
                )}
                <Footer />
            </div>
        </>
    );
};

export default CheckoutPage;
