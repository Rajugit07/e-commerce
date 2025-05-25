import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import DropdownMenu from "./DropDownMenu";

const NavItem = ({ label, path, subItems,itm }) => {
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null);


    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 100);
    };

    return (
        <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className=" flex items-center gap-2 p-2 rounded-md hover:bg-[#f5f3eb]">
                <Link to={path}>{label}</Link>
                <FaAngleDown  className={`transition-transform ${
                        isHovered ? "rotate-180" : ""
                    }`}/>
            </div>

            {isHovered && subItems?.length > 0 && (
                <DropdownMenu
                    items={subItems}
                    basePath={path}
                    itm={itm}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            )}
        </li>
    );
};

export default NavItem;
