import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import banner from "../../assets/images/banner.jpg";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const WishlistPage = () => {
    return (
        <div className="w-full h-screen">
            <nav>
                <Navbar />
            </nav>
            <p className="px-6 mt-10 text-2xl text-zinc-800">
                {" "}
                <span className="font-bold text-black">My Wishlist</span> 7
                Items
            </p>
            <div className="px-6 flex flex-wrap gap-8 mt-10">
                <div className="relative w-full sm:w-56 bg-white rounded-xl  overflow-hidden flex flex-col border border-zinc-200 hover:shadow-md transition-shadow duration-300 ">
                    {/* Remove Icon */}
                    <button
                        aria-label="Remove from wishlist"
                        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white hover:bg-zinc-100 shadow"
                    >
                        <RxCross1 className="w-5 h-5 text-zinc-400 hover:text-red-500 cursor-pointer"/>
                    </button>

                    {/* Product Image */}
                    <div className="relative h-60 w-full">
                        <img
                            src={banner}
                            alt="poster"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col gap-2 flex-1">
                        <h2 className="text-sm font-semibold text-zinc-900 truncate">
                        Men Soft Pure Cotton Round Neck Half Sleeve T-shirt
                        </h2>
                        <p className="text-lg font-semibold text-emerald-600">
                            ₹499
                        </p>
                        {/* Optionally add brand, rating, etc. */}
                    </div>

                    {/* Move to Bag Button */}
                    <button
                        className="text-lg font-semibold py-3 uppercase transition-colors duration-200 border-t border-zinc-200 rounded-b-xl cursor-pointer"
                        aria-label="Move to bag"
                    >
                        <Link to="/checkout/cart">Move to Bag</Link>
                    </button>
                </div>
                <div className="relative w-full sm:w-56 bg-white rounded-xl  overflow-hidden flex flex-col border border-zinc-200 hover:shadow-md transition-shadow duration-300">
                    {/* Remove Icon */}
                    <button
                        aria-label="Remove from wishlist"
                        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white hover:bg-zinc-100 shadow"
                    >
                        <RxCross1 className="w-5 h-5 text-zinc-400 hover:text-red-500 cursor-pointer"/>
                    </button>

                    {/* Product Image */}
                    <div className="relative h-60 w-full">
                        <img
                            src={banner}
                            alt="poster"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col gap-2 flex-1">
                        <h2 className="text-sm font-semibold text-zinc-900 truncate">
                        Men Soft Pure Cotton Round Neck Half Sleeve T-shirt
                        </h2>
                        <p className="text-lg font-semibold text-emerald-600">
                            ₹499
                        </p>
                        {/* Optionally add brand, rating, etc. */}
                    </div>

                    {/* Move to Bag Button */}
                    <button
                        className="text-lg font-semibold py-3 uppercase transition-colors duration-200 border-t border-zinc-200 rounded-b-xl cursor-pointer"
                        aria-label="Move to bag"
                    >
                        <Link to="/checkout/cart">Move to Bag</Link>
                    </button>
                </div>
                <div className="relative w-full sm:w-56 bg-white rounded-xl  overflow-hidden flex flex-col border border-zinc-200 hover:shadow-md transition-shadow duration-300">
                    {/* Remove Icon */}
                    <button
                        aria-label="Remove from wishlist"
                        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white hover:bg-zinc-100 shadow"
                    >
                        <RxCross1 className="w-5 h-5 text-zinc-400 hover:text-red-500 cursor-pointer"/>
                    </button>

                    {/* Product Image */}
                    <div className="relative h-60 w-full">
                        <img
                            src={banner}
                            alt="poster"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col gap-2 flex-1">
                        <h2 className="text-sm font-semibold text-zinc-900 truncate">
                        Men Soft Pure Cotton Round Neck Half Sleeve T-shirt
                        </h2>
                        <p className="text-lg font-semibold text-emerald-600">
                            ₹499
                        </p>
                        {/* Optionally add brand, rating, etc. */}
                    </div>

                    {/* Move to Bag Button */}
                    <button
                        className="text-lg font-semibold py-3 uppercase transition-colors duration-200 border-t border-zinc-200 rounded-b-xl cursor-pointer"
                        aria-label="Move to bag"
                    >
                        <Link to="/checkout/cart">Move to Bag</Link>
                    </button>
                </div>
                <div className="relative w-full sm:w-56 bg-white rounded-xl  overflow-hidden flex flex-col border border-zinc-200 hover:shadow-md transition-shadow duration-300">
                    {/* Remove Icon */}
                    <button
                        aria-label="Remove from wishlist"
                        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white hover:bg-zinc-100 shadow"
                    >
                        <RxCross1 className="w-5 h-5 text-zinc-400 hover:text-red-500 cursor-pointer"/>
                    </button>

                    {/* Product Image */}
                    <div className="relative h-60 w-full">
                        <img
                            src={banner}
                            alt="poster"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col gap-2 flex-1">
                        <h2 className="text-sm font-semibold text-zinc-900 truncate">
                        Men Soft Pure Cotton Round Neck Half Sleeve T-shirt
                        </h2>
                        <p className="text-lg font-semibold text-emerald-600">
                            ₹499
                        </p>
                        {/* Optionally add brand, rating, etc. */}
                    </div>

                    {/* Move to Bag Button */}
                    <button
                        className="text-lg font-semibold py-3 uppercase transition-colors duration-200 border-t border-zinc-200 rounded-b-xl cursor-pointer"
                        aria-label="Move to bag"
                    >
                        <Link to="/checkout/cart">Move to Bag</Link>
                    </button>
                </div>
                <div className="relative w-full sm:w-56 bg-white rounded-xl  overflow-hidden flex flex-col border border-zinc-200 hover:shadow-md transition-shadow duration-300">
                    {/* Remove Icon */}
                    <button
                        aria-label="Remove from wishlist"
                        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white hover:bg-zinc-100 shadow"
                    >
                        <RxCross1 className="w-5 h-5 text-zinc-400 hover:text-red-500 cursor-pointer"/>
                    </button>

                    {/* Product Image */}
                    <div className="relative h-60 w-full">
                        <img
                            src={banner}
                            alt="poster"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col gap-2 flex-1">
                        <h2 className="text-sm font-semibold text-zinc-900 truncate">
                        Men Soft Pure Cotton Round Neck Half Sleeve T-shirt
                        </h2>
                        <p className="text-lg font-semibold text-emerald-600">
                            ₹499
                        </p>
                        {/* Optionally add brand, rating, etc. */}
                    </div>

                    {/* Move to Bag Button */}
                    <button
                        className="text-lg font-semibold py-3 uppercase transition-colors duration-200 border-t border-zinc-200 rounded-b-xl cursor-pointer"
                        aria-label="Move to bag"
                    >
                        <Link to="/checkout/cart">Move to Bag</Link>
                    </button>
                </div>
                <div className="relative w-full sm:w-56 bg-white rounded-xl  overflow-hidden flex flex-col border border-zinc-200 hover:shadow-md transition-shadow duration-300">
                    {/* Remove Icon */}
                    <button
                        aria-label="Remove from wishlist"
                        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white hover:bg-zinc-100 shadow"
                    >
                        <RxCross1 className="w-5 h-5 text-zinc-400 hover:text-red-500 cursor-pointer"/>
                    </button>

                    {/* Product Image */}
                    <div className="relative h-60 w-full">
                        <img
                            src={banner}
                            alt="poster"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col gap-2 flex-1">
                        <h2 className="text-sm font-semibold text-zinc-900 truncate">
                        Men Soft Pure Cotton Round Neck Half Sleeve T-shirt
                        </h2>
                        <p className="text-lg font-semibold text-emerald-600">
                            ₹499
                        </p>
                        {/* Optionally add brand, rating, etc. */}
                    </div>

                    {/* Move to Bag Button */}
                    <button
                        className="text-lg font-semibold py-3 uppercase transition-colors duration-200 border-t border-zinc-200 rounded-b-xl cursor-pointer"
                        aria-label="Move to bag"
                    >
                        <Link to="/checkout/cart">Move to Bag</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishlistPage;
