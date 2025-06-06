import React from "react";
import Navbar from "../../../layouts/Navbar/Navbar";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";

const ProductComponent = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50">
            {/* Navbar */}
            <div className=" bg-white">
                <Navbar />

                {/* Main Section */}
                <div className="flex flex-row md:flex-col items-start justify-between py-8 px-6 md:py-12 md:px-4 w-full gap-10 max-sm:flex-col ">
                    <section className="w-5/12 md:w-1/2 max-sm:w-full flex-shrink-0 flex justify-center bg-white mb-8 md:mb-0">
                        <ProductImage />
                    </section>
                    <section className="w-7/12 md:w-1/2 max-sm:w-full flex flex-col justify-center">
                        <ProductDescription />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;
