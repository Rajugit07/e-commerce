import React from "react";
import { useSelector } from "react-redux";

const TotalPrice = () => {
    const selectedProducts = useSelector(
        (state) => state.productReducer.selectedProduct
    );
    const totalPrice = useSelector((state) => state.productReducer.totalPrice);
    const roundedTotal = Math.round(totalPrice);

    return (
        <div className="w-full px-6 mt-6 border border-zinc-300 py-4 bg-white rounded-lg max-w-full mx-auto">
            {/* Header */}
            <div className="pb-3 mb-2 border-b border-dashed border-zinc-300">
                <p className="text-lg font-semibold tracking-wide">
                    Billing Details
                </p>
            </div>

            {/* Price Details */}
            <div className="space-y-3 border-b border-dashed border-zinc-300 pb-5">
                {selectedProducts.map((product, index) => {
                    const priceNum = Number(product.price) || 0;
                    const discount = Number(product.discount) || 0;
                    const coupon = Number(product.coupon) || 0;
                    const discountAmount = (priceNum * discount) / 100;
                    const total = priceNum - discountAmount - coupon;

                    return (
                        <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between pt-2">
                                <span className="font-medium text-zinc-500">
                                    {product.description}
                                </span>
                                <span className="font-semibold">
                                    ₹{priceNum}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-zinc-500">
                                    Discount
                                </span>
                                <span className="font-semibold text-[#278e2f]">
                                    {discount}%
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-zinc-500">
                                    Coupons for you
                                </span>
                                <span className="font-semibold text-[#278e2f]">
                                    ₹{coupon}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-zinc-500">
                                    Delivery Charges
                                </span>
                                <span className="font-semibold text-[#278e2f]">
                                    free
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-zinc-500">
                                    Subtotal
                                </span>
                                <span className="font-semibold">
                                    ₹{Math.round(total)}
                                </span>
                            </div>
                            <hr className="border-dashed border-zinc-300" />
                        </div>
                    );
                })}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-5">
                <span className="text-lg font-bold">Total Price</span>
                <span className="text-lg font-bold text-[#278e2f]">
                    ₹{roundedTotal}
                </span>
            </div>
        </div>
    );
};

export default TotalPrice;
