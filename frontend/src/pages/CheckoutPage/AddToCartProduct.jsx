import React from "react";
import SizeSelector from "../../components/SizeSelector";
import QtySelector from "../../components/QtySelector";
import { useDispatch, useSelector } from "react-redux";
import { deleteSelectedProduct } from "../../store/Reducers/productsReducer";

const AddToCartProduct = () => {
    const selectedProducts = useSelector(
        (state) => state.productReducer.selectedProduct
    );

    const dispatch = useDispatch();

    const handleProductRemove = (productToRemove) => {
        dispatch(deleteSelectedProduct(productToRemove));
    };

    return (
        <div className="w-full bg-white ">
            {selectedProducts.length === 0 ? (
                <p className="text-center text-zinc-500 text-sm sm:text-base">
                    No products in cart.
                </p>
            ) : (
                selectedProducts.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-white mb-6 border border-zinc-300 rounded-lg p-4 relative"
                    >
                        {/* Image */}
                        <div className="w-full sm:w-40 h-40 sm:h-44 rounded-lg overflow-hidden relative">
                            <img
                                src={product.image[0]?.url || product.image || "https://via.placeholder.com/150"}
                                alt={product.description || "Product image"}
                                className="absolute inset-0 w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 flex flex-col gap-3 text-sm">
                            {/* Title */}
                            <p className="text-zinc-800 font-semibold text-base sm:text-sm">
                                {product.description}
                            </p>

                            {/* Size Selector */}
                            <SizeSelector />

                            {/* Quantity Selector */}
                            <QtySelector productId={product.productId || product._id} />

                            {/* Price Info */}
                            <div className="mt-1">
                                <p className="text-zinc-800 font-medium">
                                    Price:{" "}
                                    <span className="text-green-600 font-semibold">
                                        ₹{product.price}
                                    </span>
                                </p>
                                <p className="text-zinc-500 text-xs sm:text-sm">
                                    Inclusive of all taxes
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-3 absolute bottom-4 right-3">
                            <button
                                onClick={() => handleProductRemove(product)}
                                className="px-3 py-1 rounded-md text-white bg-black text-lg sm:text-sm transition-colors duration-200 cursor-pointer font-bold hover:bg-zinc-700"
                            >
                                X
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default AddToCartProduct;
