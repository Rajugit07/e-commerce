import React from "react";
import { useSelector } from "react-redux";

const TotalPrice = () => {
    const selectedProduct = useSelector(
        (state) => state.productReducer.selectedProduct
    );
    console.log(selectedProduct);

    // Ensure all are numbers to avoid unexpected NaN results
    const priceNum = Number(selectedProduct.price) || 0;
    const discount = Number(selectedProduct.discount) || 0;
    const coupon = Number(selectedProduct.coupon) || 0;

    // Calculate discount amount
    const discountAmount = (priceNum * discount) / 100;

    // Calculate final total
    const total = priceNum - discountAmount - coupon;
    const roundedTotal = Math.round(total);

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
                <div className="flex items-center justify-between pt-2">
                    <span className="font-medium text-zinc-500">
                        Price (1 item)
                    </span>
                    <span className="font-semibold">₹{priceNum}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-500">Discount</span>
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
                    <span className="font-semibold text-[#278e2f]">free</span>
                </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-5">
                <span className="text-lg font-bold">Total Price</span>
                <span className="text-lg font-bold text-[#278e2f]">₹{roundedTotal}</span>
            </div>
        </div>
    );
};

export default TotalPrice;
