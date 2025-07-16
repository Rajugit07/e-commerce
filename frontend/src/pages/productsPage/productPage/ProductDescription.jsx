import React from "react";
import SizeSelector from "../../../components/SizeSelector";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
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
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
            <div className="space-y-4 sm:space-y-5">
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 uppercase">
                    {currentProduct.productType}
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-600 line-clamp-2">
                    {currentProduct.description}
                </p>

                {/* Price */}
                <div>
                    <p className="text-xl sm:text-2xl font-bold text-zinc-800">
                        RS:{currentProduct.price}
                    </p>
                    <p className="text-xs sm:text-[13px] text-emerald-600 font-medium">
                        inclusive of all taxes
                    </p>
                </div>

                {/* Size & Qty */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex-1">
                        <SizeSelector />
                    </div>
                    {/* <div className="flex-1">
                <       QtySelector />
                     </div> */}
                </div>

                {/* ---- Buttons ---- */}
                <div className="pt-2 pb-20 sm:pb-0">
                    {/* Mobile fixed bar */}
                    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/80 backdrop-blur-lg border-t border-zinc-200 px-4 py-3 flex gap-3">
                        <button
                            onClick={(e) =>
                                handleAddToWishlist(e, currentProduct)
                            }
                            className="flex-1 border border-zinc-300 rounded-md py-2.5 text-sm font-semibold text-zinc-700 active:bg-zinc-100"
                        >
                            Wishlist
                        </button>
                        <button
                            onClick={() => handleShopNow(currentProduct)}
                            className="flex-1 bg-zinc-900 text-white rounded-md py-2.5 text-sm font-semibold active:bg-zinc-700"
                        >
                            Buy Now
                        </button>
                    </div>

                    {/* Desktop / Tablet inline buttons */}
                    <div className="hidden sm:flex gap-4">
                        <button
                            onClick={(e) =>
                                handleAddToWishlist(e, currentProduct)
                            }
                            className="border border-zinc-300 px-5 py-2 rounded-md text-sm font-semibold text-zinc-700 hover:border-zinc-400 transition"
                        >
                            Wishlist
                        </button>
                        <button
                            onClick={() => handleShopNow(currentProduct)}
                            className="bg-zinc-900 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-zinc-700 transition"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
