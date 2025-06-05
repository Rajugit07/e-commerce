import React from "react";
import { Link } from "react-router-dom";
import PriceDropDown from "./FilterDropDown/PriceDropDown";
import SizeDropDown from "./FilterDropDown/SizeDropDown";
import ColorDropDown from "./FilterDropDown/ColorDropDown ";

const FilterComponent = () => {
    return (
        <div className="h-full max-sm:hidden">
            {/* navigation stage */}
            <section className="">
                <Link>home/man/t-shirt</Link>
            </section>

            {/* filter section */}
            <section className="">
                <h1 className="text-center uppercase mt-6 font-semibold">
                    Filters
                </h1>
                <PriceDropDown />
            </section>

            {/* Size filter */}
            <section className="my-2">
                {/* <h2 className="text-lg font-semibold mb-2">Select Size</h2> */}
                <SizeDropDown />
            </section>

            {/* Color Filter */}
            <section className="my-4">
                {/* <h2 className="text-lg font-semibold mb-2">Select Color</h2> */}
                <ColorDropDown />
            </section>
        </div>
    );
};

export default FilterComponent;
