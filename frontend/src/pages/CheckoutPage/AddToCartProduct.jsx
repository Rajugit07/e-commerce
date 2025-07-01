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
        <div className="w-full bg-white p-2 border-b border-zinc-200 relative rounded-md shadow">
            {selectedProducts.length === 0 ? (
                <p>No products in cart.</p>
            ) : (
                selectedProducts.map((product, index) => (
                    <div
                        key={index}
                        className="sm:flex sm:items-start sm:gap-8 bg-white mb-4"
                    >
                        {/* left image */}
                        <div className="w-auto h-auto">
                            <img
                                src={product.image[0]?.url}
                                alt="product"
                                className="full h-full object-cover rounded-xl"
                            />
                        </div>

                        {/* right: Product Details */}
                        <div className="sm:w-8/10 flex flex-col gap-3 max-sm:gap-2">
                            {/* Product Title */}
                            <p className="text-md font-semibold text-zinc-700 max-sm:text-[13px]">
                                {product.description}
                            </p>

                            {/* Size Selector */}
                            <SizeSelector />

                            {/* Quantity Selector */}
                            <QtySelector />

                            {/* Price (Desktop) */}
                            <div className="hidden sm:flex sm:flex-col">
                                <p className="font-semibold text-zinc-700">
                                    Price:{" "}
                                    <span className="text-[#278e2f]">
                                        {product.price}
                                    </span>
                                </p>
                                <p className="font-semibold text-zinc-500 text-sm">
                                    MRP incl. of all taxes
                                </p>
                            </div>

                            {/* Price (Mobile) */}
                            <div className="sm:hidden mt-3">
                                <p className="text-[13px] font-semibold text-zinc-700">
                                    Price:{" "}
                                    <span className="text-[#278e2f]">
                                        {product.price}
                                    </span>
                                </p>
                                <p className="text-[11px] text-zinc-600">
                                    MRP incl. of all taxes
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-start gap-4 max-sm:mt-3 mt-1">
                                <button
                                    onClick={() => handleProductRemove(product)}
                                    className="px-4 py-2 border border-zinc-300 uppercase rounded-md text-center text-sm max-sm:text-[11px] max-sm:px-2 bg-zinc-900 text-white cursor-pointer"
                                >
                                    Remove
                                </button>
                                <button className="px-4 py-2 border border-zinc-300 uppercase rounded-md bg-[#ff3f6c] text-white text-sm max-sm:text-[11px] max-sm:px-2 cursor-pointer">
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
