import { useState } from "react";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

export default function SizeDropDown() {
    const [selectedSize, setSelectedSize] = useState(null);
    const [open, setOpen] = useState(false);

    const handleSelect = (size) => {
        setSelectedSize(size);
        setOpen(false);
    };

    return (
        <div className="relative inline-block w-full text-left">
            <button
                onClick={() => setOpen(!open)}
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
                {selectedSize ? `Size: ${selectedSize}` : "Select Size"}
                <span className="float-right ml-2">&#9662;</span>
            </button>

            {open && (
                <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul className="py-1 text-sm text-gray-700 max-h-60 overflow-y-auto">
                        {sizes.map((size) => (
                            <li
                                key={size}
                                onClick={() => handleSelect(size)}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                            >
                                {size}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
