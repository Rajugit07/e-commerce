import React from "react";
import { Link, useParams } from "react-router-dom";
import PriceDropDown from "./FilterDropDown/PriceDropDown";
import SizeDropDown from "./FilterDropDown/SizeDropDown";
import ColorDropDown from "./FilterDropDown/ColorDropDown ";

const FilterComponent = () => {
    const { category, subCategory, productType } = useParams();

    const breadcrumb = [
        { label: "Home", path: "/" },
        { label: category, path: `/${category}` },
        { label: subCategory, path: `/${category}/${subCategory}` },
        {
            label: productType,
            path: `/${category}/${subCategory}/${productType}`,
        },
    ];

    return (
        <div className="h-full max-sm:hidden ">
            {/* navigation stage */}
            <section className="text-sm text-gray-600">
                {breadcrumb.map((crumb, index) => (
                    <span key={index}>
                        <Link
                            to={crumb.path}
                            className="text-black hover:underline capitalize"
                        >
                            {crumb.label}
                        </Link>
                        {index < breadcrumb.length - 1 && (
                            <span className="mx-1">/</span>
                        )}
                    </span>
                ))}
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
