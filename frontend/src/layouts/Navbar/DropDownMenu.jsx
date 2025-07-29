import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Utility function to normalize item keys
const normalizeKey = (str) => str.toLowerCase().replace(/\s+/g, "");

const DropDownMenu = ({ items, basePath, itm }) => {
    return (
        <motion.div
            className="w-2xl h-72 absolute top-full -left-5 mt-3 bg-[#ffffff] border border-zinc-200 shadow rounded-xl z-20"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{
                duration: 0.2,
                ease: "easeOut"
            }}
        >
            <ul className="flex justify-between text-sm text-zinc-800">
                {items.map((item, index) => {
                    const key = normalizeKey(item);
                    const subItems = itm?.[key] || [];

                    return (
                        <motion.div
                            key={index}
                            className="px-4 py-2 flex flex-wrap justify-center rounded-md w-40 h-60"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.3,
                                ease: "easeOut"
                            }}
                        >
                            <ul className="w-2xl px-2">
                                <motion.li
                                    className="font-semibold mb-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: index * 0.1 + 0.1,
                                        duration: 0.2
                                    }}
                                >
                                    {item}
                                </motion.li>
                                {subItems.map((subItem, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="text-zinc-950 p-2 rounded-md text-[14px] hover:font-bold"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.1 + idx * 0.05 + 0.2,
                                            duration: 0.2,
                                            ease: "easeOut"
                                        }}
                                        whileHover={{
                                            x: 4,
                                            transition: { duration: 0.15 }
                                        }}
                                    >
                                        <Link
                                            to={`${basePath}/${key}/${subItem
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                        >
                                            {subItem}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </ul>
        </motion.div>
    );
};

export default DropDownMenu;
