import React from "react";
import Navbar from "../../../layouts/Navbar/Navbar";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import { useSelector } from "react-redux";
import Footer from "../../../layouts/Footer";

const ProductComponent = () => {
    const selectedProduct = useSelector(
        (state) => state.productReducer.selectedProduct
    );

    return (
        <>
            <div className="w-full min-h-auto bg-white">
                {/* Navbar */}
                <Navbar />

                {/* Main Section */}
                <div className="flex flex-row max-sm:flex-col md:flex-row items-start py-6 px-4 sm:py-8 sm:px-6 w-full gap-6">
                    {/* Product Image */}
                    <section className="w-[35%] max-sm:w-full md:w-1/2 flex justify-center mb-6 md:mb-0 max-sm:h-96">
                        <ProductImage items={selectedProduct} />
                    </section>

                    {/* Product Description */}
                    <section className="w-[45%] max-sm:w-full md:w-1/2">
                        <ProductDescription items={selectedProduct} />
                    </section>
                </div>

                {/* footer */}
                <Footer/>
            </div>
        </>
    );
};

export default ProductComponent;
