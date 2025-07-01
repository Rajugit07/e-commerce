import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearWishlist } from "../../store/Reducers/productsReducer";

const WishlistPage = () => {
    const item = useSelector((state) => state.productReducer.wishlistProduct);
    const dispatch = useDispatch();

    const handleRemoveWishlist = (removeWishlist) => {
        dispatch(clearWishlist(removeWishlist));
    };

    return (
        <div className="w-full h-screen">
            <nav>
                <Navbar />
            </nav>
            <div className="px-6 flex flex-wrap gap-8 mt-10">
                {item && item.length > 0 ? (
                    item.map((product) => (
                        <div
                            key={product._id}
                            className="relative w-full sm:w-56 bg-white rounded-xl overflow-hidden flex flex-col border border-zinc-200 hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Remove Icon */}
                            <button
                                onClick={() => handleRemoveWishlist(product)}
                                aria-label="Remove from wishlist"
                                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white hover:bg-zinc-100 shadow"
                            >
                                <RxCross1 className="w-5 h-5 text-zinc-400 hover:text-red-500 cursor-pointer" />
                            </button>

                            {/* Product Image */}
                            <div className="relative h-60 w-full">
                                <img
                                    src={product.image[0].url}
                                    alt="poster"
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-4 flex flex-col gap-2 flex-1">
                                <h2 className="text-sm font-semibold text-zinc-900 truncate">
                                    {product.description}
                                </h2>
                                <p className="text-lg font-semibold text-emerald-600">
                                    RS: ₹{product.price}
                                </p>
                            </div>

                            {/* Move to Bag Button */}
                            <button
                                className="text-lg font-semibold py-3 uppercase transition-colors duration-200 border-t border-zinc-200 rounded-b-xl cursor-pointer"
                                aria-label="Move to bag"
                            >
                                <Link to="/checkout/cart">Move to Bag</Link>
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-zinc-600">Your wishlist is empty.</p>
                )}
            </div>
        </div>
    );
};

export default WishlistPage;
