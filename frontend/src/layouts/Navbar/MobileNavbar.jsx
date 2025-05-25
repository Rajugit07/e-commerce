    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import { FaAngleDown } from "react-icons/fa6";
    import { dropDownData } from "./navData";

    const MobileNavbar = () => {
        const [openCategory, setOpenCategory] = useState(null);

        const handleCategoryClick = (category) => {
            setOpenCategory((prev) => (prev === category ? null : category));
        };

        return (
            <div className="bg-white h-auto w-[70%]  absolute top-2 left-1 border border-zinc-300 p-4 z-20 rounded-xl shadow-lg sm:hidden">
                <span className="text-lg uppercase text-zinc-700  font-semibold block mb-4">
                    Menu
                </span>

                <ul className="flex flex-col gap-6  text-sm font-normal text-zinc-800 ml-3">
                    {Object.entries(dropDownData).map(([category, items], idx) => (
                        <li key={idx} className="">
                            {/* Category header with toggle */}
                            <div
                                className="flex justify-between items-center cursor-pointer font-semibold capitalize "
                                onClick={() => handleCategoryClick(category)}
                            >
                            <span className="text-md uppercase text-zinc-900">{category}</span>
                                <FaAngleDown
                                    className={`transition-transform ${
                                        openCategory === category
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>

                            {/* Subcategories */}
                            {openCategory === category && (
                                <ul className="ml-4 mt-2 space-y-1 text-[14px]">
                                    {items.map((item, i) => (
                                        <li key={i}>
                                            <Link
                                                to={`/${category}/${item
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "-")}`}
                                                className="block"
                                            >
                                                {item}
                                            </Link>
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
