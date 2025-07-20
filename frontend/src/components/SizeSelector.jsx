import { useState } from "react";

const SizeSelector = () => {
    const sizes = ["S", "M", "L", "XL","XXL"];
    const [selectedSize, setSelectedSize] = useState(null);

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="w-full sm:w-fit">
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-2">
                        Size
                    </label>
                    <div className="flex flex-wrap gap-2 sm:gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 border rounded text-xs sm:text-sm transition ease-in-out duration-200 ${
                                    selectedSize === size
                                        ? "bg-black text-white border-black "
                                        : "border-gray-300 hover:bg-gray-100 "
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SizeSelector;
