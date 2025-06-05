import React from "react";
import SizeSelector from "../../../components/SizeSelector";
import QtySelector from "../../../components/QtySelector";

const ProductDescription = () => {
    return (
        <div className=" w-full max-w-3xl mx-auto px-6">
            <div className="space-y-5">
                {/* Title */}
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
                    Levis
                </h1>

                {/* Description */}
                <p className="text-base text-zinc-600">
                    Men Soft Pure Cotton Round Neck Half Sleeve T-shirt
                </p>

                {/* Price */}
                <div className="space-y-1">
                    <p className="text-2xl font-bold text-zinc-800">MRP ₹299</p>
                    <p className="text-sm text-[#03a685] font-medium">
                        inclusive of all taxes
                    </p>
                </div>

                {/* Size and Qty */}
                <div className="flex flex-col sm:flex-row gap-6 mt-4">
                    <div className="flex-1">
                        <SizeSelector />
                    </div>
                    <div className="flex-1">
                        <QtySelector />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold px-4 py-3 rounded-lg transition duration-200 shadow">
                        Add to Cart
                    </button>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-3 rounded-lg transition duration-200 shadow">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
