import React from "react";
import SizeSelector from "../../../components/SizeSelector";
import QtySelector from "../../../components/QtySelector";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProductDescription = () => {
    return (
        <div className=" w-full max-w-3xl mx-auto px-6 max-sm:px-1">
            <div className="space-y-5 max-sm:space-y-3">
                {/* Title */}
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 max-sm:text-sm">
                    Levis
                </h1>

                {/* Description */}
                <p className="text-base text-zinc-600 max-sm:text-sm truncate">
                    Men Soft Pure Cotton Round Neck Half Sleeve T-shirt
                </p>

                {/* Price */}
                <div className="space-y-1">
                    <p className="text-2xl font-bold text-zinc-800 max-sm:text-sm">
                        MRP ₹299
                    </p>
                    <p className="text-[13px] text-[#03a685] font-medium">
                        inclusive of all taxes
                    </p>
                </div>

                {/* Size and Qty */}
                <div className="flex flex-col sm:flex-row gap-6 mt-4 max-sm:mt-2">
                    <div className="flex-1">
                        <SizeSelector />
                    </div>
                    <div className="flex-1">
                        <QtySelector />
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6">
                    {/* Mobile fixed buttons */}
                    <div className="sm:hidden fixed bottom-0 left-0 w-full z-50 bg-white px-4 py-2 flex gap-4 shadow-lg">
                        <Button />
                    </div>

                    {/* Desktop/Tablet inline buttons */}
                    <div className="hidden sm:flex gap-4">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
