import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import FilterComponent from "./FilterComponent";
import Products from "./Products";
import BottomFilterMobile from "./MobileViewProducts/BottomFilterMobile";

const ProductsPage = () => {
    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="flex h-screen px-6">
                {/* Sidebar - FilterComponent */}
                <section className="w-[20%] max-sm:hidden ">
                    <FilterComponent />
                </section>

                {/* Main content - Products */}
                <section className="w-[80%] max-sm:w-full">
                    <Products />
                    <section  className="">
                        <BottomFilterMobile />
                    </section>
                </section>
            </div>
        </div>
    );
};

export default ProductsPage;
