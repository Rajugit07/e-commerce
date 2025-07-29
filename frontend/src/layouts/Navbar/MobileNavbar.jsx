import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.05
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white h-auto w-[70%] absolute top-2 left-1 border border-zinc-300 p-4 z-20 rounded-xl shadow-lg sm:hidden"
        >
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
                            <motion.div
                                animate={{ rotate: openCategory === category ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <FaAngleDown />
                            </motion.div>
                        </div>

                        {/* Subcategories */}
                        <AnimatePresence>
                            {openCategory === category && (
                                <motion.ul
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="ml-4 mt-2 space-y-2 text-[14px] overflow-hidden"
                                >
                                    {items.map((item, i) => (
                                        <motion.li key={i} variants={itemVariants}>
                                            {/* Subcategory header with toggle */}
                                            <div
                                                className="flex justify-between items-center cursor-pointer font-medium"
                                                onClick={() => handleSubCategoryClick(item)}
                                            >
                                                <span>{item}</span>
                                                <motion.div
                                                    animate={{ rotate: openSubCategory === item ? 180 : 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <FaAngleDown className="text-xs" />
                                                </motion.div>
                                            </div>

                                            {/* Sub-subcategories (actual products) */}
                                            <AnimatePresence>
                                                {openSubCategory === item && (
                                                    <motion.ul
                                                        variants={containerVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="exit"
                                                        className="ml-4 mt-1 space-y-1 text-[13px] overflow-hidden"
                                                    >
                                                        {getSubCategoryData(category, item).map((subItem, j) => (
                                                            <motion.li key={j} variants={itemVariants}>
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
                                                            </motion.li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default MobileNavbar;
