import { Link } from "react-router-dom";
// import { motion } from "motion/react"

// Utility function to normalize item keys
const normalizeKey = (str) => str.toLowerCase().replace(/\s+/g, "");

const DropDownMenu = ({ items, basePath, itm }) => {
    return (
        <div className="w-2xl h-72 absolute top-full -left-5 mt-3 bg-[#ffffff] border border-zinc-200 shadow rounded-xl z-20">
            <ul className="flex justify-between text-sm text-zinc-800  ">
                {items.map((item, index) => {
                    const key = normalizeKey(item); // Match: Topwear => topwear
                    const subItems = itm?.[key] || [];

                    return (
                        <div
                            key={index}
                            className="px-4 py-2 flex flex-wrap justify-center rounded-md w-40 h-60 "
                        >
                            <ul className="w-2xl  px-2">
                                <li className="font-semibold mb-2">{item}</li>
                                {subItems.map((subItem, idx) => (
                                    <li
                                        key={idx}
                                        className="text-zinc-950 p-2 rounded-md text-[14px] hover:font-bold "
                                    >
                                        <Link
                                            to={`${basePath}/${key}/${subItem
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                        >
                                            {subItem}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default DropDownMenu;
