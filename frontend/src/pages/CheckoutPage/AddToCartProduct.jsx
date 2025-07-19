import React from "react";
import SizeSelector from "../../components/SizeSelector";
import QtySelector from "../../components/QtySelector";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedProduct } from "../../store/Reducers/productsReducer";

const AddToCartProduct = () => {
    const selectedProducts = useSelector(
        (state) => state.productReducer.selectedProduct
    );

    const dispatch = useDispatch();

    const handleProductRemove = (productToRemove) => {
        dispatch(clearSelectedProduct(productToRemove));
    };

    return (
        <div className="w-full bg-white px-2 relative rounded-md">
            {selectedProducts.length === 0 ? (
                <p className="text-center text-zinc-500">
                    No products in cart.
                </p>
            ) : (
                selectedProducts.map((product, index) => (
                    <div
                        key={index}
                        className="sm:flex sm:items-start sm:gap-8 bg-white mb-4 border border-zinc-200 rounded-md p-2 shadow- flex gap-4"
                    >
                        {/* Left: Image */}
                        <div className="w-24 h-34 sm:w-52 sm:h-62 overflow-hidden rounded-xl relative">
                            <img
                                src={product.image[0]?.url}
                                alt="product"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Right: Product Details */}
                        <div className="flex-1 flex flex-col gap-3 max-sm:gap-2">
                            {/* Product Title */}
                            <p className="text-md font-semibold text-zinc-700 max-sm:text-[13px]">
                                {product.description}
                            </p>

                            {/* Size Selector */}
                            <SizeSelector />

                            {/* Quantity Selector */}
                            <QtySelector />

                            {/* Price */}
                            <div className="flex flex-col">
                                <p className="font-semibold text-zinc-700">
                                    Price:{" "}
                                    <span className="text-[#278e2f]">
                                        {product.price}
                                    </span>
                                </p>
                                <p className="font-semibold text-zinc-500 text-sm max-sm:text-[11px]">
                                    MRP incl. of all taxes
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-start gap-2 max-sm:gap-1 mt-1">
                                <button
                                    onClick={() => handleProductRemove(product)}
                                    className="px-3 py-1.5 border border-zinc-300 uppercase rounded-md text-xs max-sm:text-[10px] bg-zinc-900 text-white cursor-pointer"
                                >
                                    Remove
                                </button>
                                <button className="px-3 py-1.5 border border-zinc-300 uppercase rounded-md bg-[#ff3f6c] text-white text-xs max-sm:text-[10px] cursor-pointer">
                                    Move to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default AddToCartProduct;
