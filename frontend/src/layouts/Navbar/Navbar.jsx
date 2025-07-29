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
import { MdPerson } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);

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
        <div className="w-full h-auto sticky top-0 z-[9999]">
            <section className="flex items-center justify-between sm:p-3 font-gucciSansPro">
                {/* Full Menu (Desktop) */}
                <nav className="bg-[#ffffff] flex items-center w-full justify-between p-2 rounded-xl py-1 border border-zinc-200">
                    <div>
                        <div className=" p-2 max-sm:hidden ">
                            <Link to="/">logo</Link>
                        </div>
                    </div>
                    <div className=" px-6 py-1 md:flex  max-sm:hidden ">
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
                    <div className=" relative  max-sm:hidden px-6 py-1">
                        <IoIosSearch className="absolute text-lg text-zinc-700 top-3 left-3" />
                        <input
                            type="text"
                            value={query}
                            onChange={handleSearch}
                            placeholder="Search..."
                            className="outline-none p-1 pl-3 "
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
                    <div className="px-6 py-1  md:flex  max-sm:hidden ">
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
            </section>

            {/* Mobile Top Bar */}
            <div className="bg-white border-b border-b-zinc-300 w-full px-2 py-4 flex items-center justify-between sm:hidden sticky top-0 z-50">
                {/* Left: Hamburger & Logo */}
                <div className="flex items-center gap-3">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <RiCloseLargeLine /> : <RxHamburgerMenu />}
                    </button>
                    {!showMobileSearch && (
                        <div className="flex items-center text-xl cursor-pointer text-zinc-800">
                            <Link to="/">Logo</Link>
                        </div>
                    )}
                </div>

                {/* Center: Search Icon or Expanded Search Input */}
                <div className="flex-1 px-2 relative top-0.5 ">
                    {!showMobileSearch ? (
                        <IoIosSearch
                            className="text-xl text-zinc-700 cursor-pointer"
                            onClick={() => setShowMobileSearch(true)}
                        />
                    ) : (
                        <div className="relative">
                            <IoIosSearch className="absolute top-2.5 left-3 text-xl text-zinc-700" />
                            <input
                                type="text"
                                value={query}
                                onChange={handleSearch}
                                placeholder="Search..."
                                autoFocus
                                className="w-full border border-zinc-300 pl-10 pr-10 py-2 rounded-full outline-none"
                            />
                            <RiCloseLargeLine
                                className="absolute top-2.5 right-3 text-lg text-zinc-600 cursor-pointer"
                                onClick={() => {
                                    setShowMobileSearch(false);
                                    setQuery("");
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* Right: Wishlist, Bag, Account */}
                {!showMobileSearch && (
                    <div className="flex items-center gap-3">
                        <Link to="/wishlist">
                            <FaRegHeart className="text-zinc-800" />
                        </Link>
                        <Link to="/checkout/cart">
                            <FaShoppingBag className="text-zinc-800" />
                        </Link>
                        <div className="relative">
                            <VscAccount
                                className="text-zinc-800"
                                onClick={toggleDropdownMobile}
                            />
                            {isOpen3 && (
                                <div className="absolute top-8 right-0">
                                    <ProfileDropDown />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Dropdown menu for mobile */}
            <div className="px-6 mt-2 relative">
                {isOpen && <MobileNavbar />}
            </div>
            {/* Toaster */}
            <Toaster />
        </div>
    );
};

export default Navbar;
