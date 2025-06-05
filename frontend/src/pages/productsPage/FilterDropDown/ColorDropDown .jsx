import { useState } from "react";

const colors = ["Red", "Blue", "Black", "White", "Green", "Yellow", "Pink"];

export default function ColorDropDown() {
    const [selectedColor, setSelectedColor] = useState(null);
    const [open, setOpen] = useState(false);

    const handleSelect = (color) => {
        setSelectedColor(color);
        setOpen(false);
    };

    return (
        <div className="relative inline-block w-full text-left">
            <button
                onClick={() => setOpen(!open)}
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
                {selectedColor ? `Color: ${selectedColor}` : "Select Color"}
                <span className="float-right ml-2">&#9662;</span>
            </button>

            {open && (
                <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul className="py-1 text-sm text-gray-700 max-h-60 overflow-y-auto">
                        {colors.map((color) => (
                            <li
                                key={color}
                                onClick={() => handleSelect(color)}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                            >
                                <div className="flex items-center gap-2">
                                    <span
                                        className="w-4 h-4 rounded-full border"
                                        style={{
                                            backgroundColor:
                                                color.toLowerCase(),
                                        }}
                                    ></span>
                                    {color}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
