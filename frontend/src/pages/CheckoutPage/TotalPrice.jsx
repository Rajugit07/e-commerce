import React from "react";

const TotalPrice = () => {
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
                    <span className="font-medium text-zinc-500">Price (1 item)</span>
                    <span className="font-semibold">₹1,999</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-500">Discount</span>
                    <span className="font-semibold text-[#278e2f]">-₹600</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-500">Coupons for you</span>
                    <span className="font-semibold text-[#278e2f]">-₹70</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-medium text-zinc-500">Delivery Charges</span>
                    <span className="font-semibold text-[#278e2f]">free</span>
                </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-5">
                <span className="text-lg font-bold">Total Price</span>
                <span className="text-lg font-bold text-[#278e2f]">₹1,333</span>
            </div>
        </div>
    );
};

export default TotalPrice;
