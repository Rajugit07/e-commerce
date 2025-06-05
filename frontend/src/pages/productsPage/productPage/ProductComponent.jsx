import React from "react";
import Navbar from "../../../layouts/Navbar/Navbar";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";

const ProductComponent = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="shadow-sm bg-white">
                <Navbar />
            </nav>

            {/* Main Section */}
            <div className="flex items-center justify-between py-12 px-4">
                <div className="flex gap-10 w-full max-w-6xl">
                    {/* Left: Image */}
                    <section className="flex-1 bg-white">
                        <ProductImage />
                    </section>

                    {/* Right: Description */}
                    <section className="flex-1">
                        <ProductDescription />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;


// border-zinc-200 p-4 rounded-xl shadow