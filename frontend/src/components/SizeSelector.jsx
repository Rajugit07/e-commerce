import { useState } from "react";

const SizeSelector = () => {
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const [selectedSize, setSelectedSize] = useState(null);

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Size
            </label>
            <div className="flex gap-2">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded text-sm ${
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
