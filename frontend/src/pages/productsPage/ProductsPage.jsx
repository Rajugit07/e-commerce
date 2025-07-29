import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import FilterComponent from "./FilterComponent";
import Products from "./Products";
import BottomFilterMobile from "./MobileViewProducts/BottomFilterMobile";
import Footer from "../../layouts/Footer"

const ProductsPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar always on top */}
            <Navbar />

            {/* Main Layout */}
            <div className="flex flex-1 px-6">
                {/* Sidebar - FilterComponent */}
                <section className="w-[20%] max-sm:hidden">
                    <FilterComponent />
                </section>

                {/* Main content - Products */}
                <section className="w-[80%] max-sm:w-full">
                    <Products />

                    {/* Mobile Bottom Filter */}
                    <section>
                        <BottomFilterMobile />
                    </section>
                </section>
            </div>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default ProductsPage;
