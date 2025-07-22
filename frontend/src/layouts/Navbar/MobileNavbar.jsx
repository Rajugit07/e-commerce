import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import {
    dropDownData,
    dropDownSubDataMan,
    dropDownSubDataWomen,
    dropDownSubDataKids,
    dropDownSubDataBeauty
} from "./navData";

const MobileNavbar = () => {
    const [openCategory, setOpenCategory] = useState(null);
    const [openSubCategory, setOpenSubCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setOpenCategory((prev) => (prev === category ? null : category));
        setOpenSubCategory(null); // Close any open subcategory when switching categories
    };

    const handleSubCategoryClick = (subcategory) => {
        setOpenSubCategory((prev) => (prev === subcategory ? null : subcategory));
    };

    // Helper function to get subcategory data based on category
    const getSubCategoryData = (category, subcategory) => {
        const subcategoryKey = subcategory.toLowerCase().replace(/\s+/g, "");

        switch (category) {
            case "men":
                return dropDownSubDataMan[subcategoryKey] || [];
            case "woman":
                return dropDownSubDataWomen[subcategoryKey] || [];
            case "kids":
                return dropDownSubDataKids[subcategoryKey] || [];
            case "beauty":
                return dropDownSubDataBeauty[subcategoryKey] || [];
            default:
                return [];
        }
    };

    return (
        <div className="bg-white h-auto w-[70%] absolute top-2 left-1 border border-zinc-300 p-4 z-20 rounded-xl shadow-lg sm:hidden">
            <span className="text-lg uppercase text-zinc-700 font-semibold block mb-4">
                Menu
            </span>

            <ul className="flex flex-col gap-6 text-sm font-normal text-zinc-800 ml-3">
                {Object.entries(dropDownData).map(([category, items], idx) => (
                    <li key={idx} className="">
                        {/* Category header with toggle */}
                        <div
                            className="flex justify-between items-center cursor-pointer font-semibold capitalize"
                            onClick={() => handleCategoryClick(category)}
                        >
                            <span className="text-md uppercase text-zinc-900">{category}</span>
                            <FaAngleDown
                                className={`transition-transform ${
                                    openCategory === category ? "rotate-180" : ""
                                }`}
                            />
                        </div>

                        {/* Subcategories */}
                        {openCategory === category && (
                            <ul className="ml-4 mt-2 space-y-2 text-[14px]">
                                {items.map((item, i) => (
                                    <li key={i}>
                                        {/* Subcategory header with toggle */}
                                        <div
                                            className="flex justify-between items-center cursor-pointer font-medium"
                                            onClick={() => handleSubCategoryClick(item)}
                                        >
                                            <span>{item}</span>
                                            <FaAngleDown
                                                className={`transition-transform text-xs ${
                                                    openSubCategory === item ? "rotate-180" : ""
                                                }`}
                                            />
                                        </div>

                                        {/* Sub-subcategories (actual products) */}
                                        {openSubCategory === item && (
                                            <ul className="ml-4 mt-1 space-y-1 text-[13px]">
                                                {getSubCategoryData(category, item).map((subItem, j) => (
                                                    <li key={j}>
                                                        <Link
                                                            to={`/${category}/${item
                                                                .toLowerCase()
                                                                .replace(/\s+/g, "-")}/${subItem
                                                                .toLowerCase()
                                                                .replace(/\s+/g, "-")}`}
                                                            className="block text-zinc-600 hover:text-zinc-900 py-1"
                                                        >
                                                            {subItem}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileNavbar;
