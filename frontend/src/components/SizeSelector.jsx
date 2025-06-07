import { useState } from "react";

const SizeSelector = () => {
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const [selectedSize, setSelectedSize] = useState(null);

    return (
        <div className="max-sm:mt-2">
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 max-sm:text-[12px]">
                Size
            </label>
            <div className="flex flex-wrap gap-2 max-sm:gap-1">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 border rounded text-sm sm:text-base transition-colors max-sm:px-2 max-sm:py-1 max-sm:text-[12px] ${
                            selectedSize === size
                                ? "bg-black text-white border-black"
                                : "border-gray-300 hover:bg-gray-100"
                        }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SizeSelector;
