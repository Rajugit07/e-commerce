import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {
    dropDownData,
    dropDownSubDataKids,
    dropDownSubDataMan,
    dropDownSubDataWomen,
    dropDownSubDataBeauty,
} from "./navData";
import MobileNavbar from "./MobileNavbar";
import ProfileDropDown from "./ProfileDropDown";
import { Toaster } from "react-hot-toast";
import { searchProduct } from "../../api/productApi/searchProduct";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const toggleDropdown = () => {
        setIsOpen2(!isOpen2);
    };
    const toggleDropdownMobile = () => {
        setIsOpen3(!isOpen3);
    };

    //search product
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            const fetchData = async () => {
                if (query.trim() === "") {
                    setResults([]);
                    return;
                }

                try {
                    setLoading(true);
                    const response = await searchProduct({ query });
                    const products = response.data;

                    const filtered = products.filter((product) => {
                        const combinedFields = `
                  ${product.productType || ""}
                  ${product.title || ""}
                  ${product.subCategory || ""}
                  ${product.category || ""}
                `.toLowerCase();

                        return combinedFields.includes(
                            query.trim().toLowerCase()
                        );
                    });

                    setResults(filtered);
                } catch (error) {
                    console.error("Search error:", error);
                    setResults([]);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, 500); // debounce time: 500ms

        return () => clearTimeout(delayDebounce);
    }, [query]);

    return (
        <div className="w-full h-auto sticky top-0 z-[9999] bg-white">
            <nav className="flex items-center justify-between sm:p-4.5  border-b border-zinc-200 font-gucciSansPro">
                {/* Full Menu (Desktop) */}
                <div>
                    <div className=" bg-white p-2 rounded-md shadow max-sm:hidden ">
                        <Link to="/">logo</Link>
                    </div>
                </div>
                <div className="bg-white border border-zinc-100 px-6 py-1 rounded-md md:flex shadow max-sm:hidden ">
                    <ul className="flex gap-6 text-sm  text-zinc-800">
                        <NavItem
                            label="Men"
                            path="/men"
                            subItems={dropDownData.men}
                            itm={dropDownSubDataMan}
                        />
                        <NavItem
                            label="Women"
                            path="/women"
                            subItems={dropDownData.woman}
                            itm={dropDownSubDataWomen}
                        />
                        <NavItem
                            label="Kids"
                            path="/kids"
                            subItems={dropDownData.kids}
                            itm={dropDownSubDataKids}
                        />
                        <NavItem
                            label="Beauty"
                            path="/home"
                            subItems={dropDownData.beauty}
                            itm={dropDownSubDataBeauty}
                        />
                    </ul>
                </div>

                {/* Searching  */}
                <div className=" relative rounded-md shadow max-sm:hidden px-6 py-1 bg-white border border-zinc-100 ">
                    <IoIosSearch className="absolute text-lg text-zinc-700 top-3 left-3" />
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className="outline-none rounded-md p-1 pl-3 "
                    />
                </div>

                {results.length > 0 && (
                    <div
                        className="
                                fixed sm:absolute sm:left-[53vw] sm:top-17 sm:w-62 sm:h-75
                                left-0 top-30 w-full h-[300px]
                                bg-white overflow-y-scroll border border-zinc-200 shadow-xl hide-scrollbar rounded-sm z-[999]
    "
                    >
                        {results.map((item, index) => (
                            <div
                                key={index}
                                className="hover:bg-gray-200 cursor-pointer transition-hover duration-200"
                                style={{
                                    padding: "10px",
                                    borderBottom:
                                        index !== results.length - 1
                                            ? "1px solid #eee"
                                            : "",
                                }}
                            >
                                {loading && (
                                    <div className="text-center">
                                        Loading...
                                    </div>
                                )}
                                <Link
                                    className="text-sm"
                                    to={`/${item.category}/${item.subCategory}/${item.productType}`}
                                    onClick={() => {
                                        setQuery(""); // clear input field
                                        setResults([]); // clear search results
                                    }}
                                >
                                    {item.productType} - {item.category}
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                {/* user profile and login */}
                <div className="bg-white border border-zinc-100 px-6 py-1 rounded-md md:flex  shadow max-sm:hidden ">
                    <ul className="flex gap-6 text-sm font-normal text-zinc-800">
                        <li
                            className="hover:bg-[#f5f3eb] p-2 rounded-md flex items-center gap-2"
                            onClick={toggleDropdown}
                        >
                            <Link to="/">Profile</Link>
                            <span>
                                <FaAngleDown
                                    className={`transition-transform duration-300 ${
                                        isOpen2 ? "rotate-180" : ""
                                    }`}
                                />
                            </span>
                            {isOpen2 && (
                                <div className="absolute top-20 mt-2 right-19">
                                    <ProfileDropDown />
                                </div>
                            )}
                        </li>
                        <li className="hover:bg-[#f5f3eb] p-2 rounded-md flex items-center gap-2">
                            <Link to="/checkout/cart">Bag</Link>
                        </li>
                        <li className="hover:bg-[#f5f3eb] p-2 rounded-md flex items-center gap-2">
                            <Link to="/wishlist">Wishlist</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Hamburger Button */}
            <div className="bg-white border-b border-b-zinc-300 w-full px-2 py-4 flex items-center justify-between text-2xl sm:hidden sticky top-0 z-50">
                <div className="flex items-center gap-3 ">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <RiCloseLargeLine className="cursor-pointer" />
                        ) : (
                            <RxHamburgerMenu className="cursor-pointer" />
                        )}
                    </button>
                    <div className="flex items-center text-xl cursor-pointer text-center text-zinc-800">
                        <Link to="/">Logo</Link>
                    </div>
                </div>
                <div className="flex items-center gap-3 ">
                    <div>
                        <FaRegHeart className="text-zinc-800 cursor-pointer" />
                    </div>
                    <div>
                        <FaShoppingBag className="text-zinc-800 cursor-pointer" />
                    </div>
                    <div>
                        <VscAccount
                            className="text-zinc-800 cursor-pointer"
                            onClick={toggleDropdownMobile}
                        />
                        {isOpen3 && (
                            <div className="absolute top-15 mt-2 right-1">
                                <ProfileDropDown />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Dropdown menu for mobile */}
            <div className="px-6 mt-2 relative">
                {isOpen && <MobileNavbar />}
            </div>

            {/* Search */}
            <div className="w-full p-1 sm:hidden relative">
                <IoIosSearch className="absolute top-3 left-4 text-xl text-zinc-700" />
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="search..."
                    className="w-full border border-zinc-300 pl-10 px-3 py-2 rounded-full outline-none"
                />
            </div>

            {/* Toaster */}
            <Toaster />
        </div>
    );
};

export default Navbar;
