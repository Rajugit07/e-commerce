import React from "react";
import SizeSelector from "../../../components/SizeSelector";
import { useNavigate } from "react-router-dom";
// import Button from "./Button";
import {
    addToWishlist,
    setSelectedProduct,
} from "../../../store/Reducers/productsReducer";
import { useDispatch, useSelector } from "react-redux";

const ProductDescription = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //add to cart
    const handleShopNow = (item) => {
        dispatch(setSelectedProduct(item));
        navigate(`/checkout/cart/`);
    };

    const handleAddToWishlist = (e, item) => {
        e.stopPropagation();
        dispatch(addToWishlist(item));
        navigate(`/wishlist`);
    };

    const currentProduct = useSelector(
        (state) => state.productReducer.currProduct
    );

    return (
        <div className="w-full max-w-2xl mx-auto sm:px-4 h-auto space-y-4 sm:space-y-6">
            {/* Product Title */}
            <h1 className="text-xl sm:text-3xl font-bold uppercase text-zinc-900 tracking-tight">
                {currentProduct.productType}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-600 line-clamp-2">
                {currentProduct.description}
            </p>

            {/* Price */}
            <div>
                <p className="text-base sm:text-2xl font-semibold text-zinc-800">
                    Rs: {currentProduct.price}
                </p>
                <p className="text-xs text-emerald-600 font-medium">
                    inclusive of all taxes
                </p>
            </div>

            {/* Size Selector */}
            <SizeSelector />

            {/* Buttons */}
            <div className="pt-4 pb-16 sm:pb-4">
                {/* Mobile Sticky Bar */}
                <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white shadow border-t border-zinc-200 px-4 py-2 flex gap-2">
                    <button
                        onClick={(e) => handleAddToWishlist(e, currentProduct)}
                        className="flex-1 border border-zinc-300 rounded-md py-2 text-sm font-semibold text-zinc-700 cursor-pointer"
                    >
                        Wishlist
                    </button>
                    <button
                        onClick={() => handleShopNow(currentProduct)}
                        className="flex-1 bg-zinc-900 text-white rounded-md py-2 text-sm font-semibold cursor-pointer"
                    >
                        Buy Now
                    </button>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden sm:flex gap-4">
                    <button
                        onClick={(e) => handleAddToWishlist(e, currentProduct)}
                        className="border border-zinc-300 px-5 py-2 rounded-md text-sm font-semibold text-zinc-700 hover:border-zinc-400"
                    >
                        Wishlist
                    </button>
                    <button
                        onClick={() => handleShopNow(currentProduct)}
                        className="bg-zinc-900 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-zinc-700"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
