import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSizeFilter } from "../../../store/Reducers/productFilterReducer";

const sizes = [
    { label: "All Sizes", value: "all" },
    { label: "XS", value: "XS" },
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
    { label: "XXL", value: "XXL" },
];

export default function SizeDropDown() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);

    const selectedSize = useSelector(
        (state) => state.productFilterReducer.selectedSize
    );

    const selectedLabel =
        sizes.find((s) => s.value === selectedSize)?.label || "All Sizes";

    const handleSelect = (size) => {
        dispatch(setSizeFilter(size));
        setOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full p-4 sm:p-2 bg-white border-b border-gray-100 last:border-b-0">
            {/* Dropdown Container */}
            <div className="relative" ref={dropdownRef}>
                {/* Trigger Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className={`
                        relative w-full flex items-center justify-between
                        px-4 py-3 text-left
                        bg-gray-50 border border-gray-200 rounded-lg
                        text-sm font-medium text-gray-700
                        hover:bg-gray-100 hover:border-gray-300
                        focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900
                        transition-all duration-200
                        ${
                            open
                                ? "ring-1 ring-zinc-500 border-zinc-500 bg-blue-50"
                                : ""
                        }
                    `}
                    aria-expanded={open}
                    aria-haspopup="listbox"
                >
                    <span className="block truncate font-medium">
                        {selectedLabel}
                    </span>

                    <svg
                        className={`
                            h-5 w-5 text-gray-400 transition-transform duration-200
                            ${open ? "transform rotate-180 text-blue-500" : ""}
                        `}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {open && (
                    <div className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 transform transition-all duration-200">
                        <div className="py-1 max-h-60 overflow-y-auto">
                            {sizes.map((size) => (
                                <button
                                    key={size.value}
                                    onClick={() => handleSelect(size.value)}
                                    className={`
                                        w-full flex items-center justify-between
                                        px-4 py-3 text-left text-sm
                                        hover:bg-gray-50 focus:bg-gray-50
                                        focus:outline-none transition-colors duration-150
                                        ${
                                            selectedSize === size.value
                                                ? "bg-blue-50 text-blue-700"
                                                : "text-gray-700"
                                        }
                                    `}
                                    role="option"
                                    aria-selected={selectedSize === size.value}
                                >
                                    <span className="font-medium">
                                        {size.label}
                                    </span>

                                    {selectedSize === size.value && (
                                        <svg
                                            className="h-4 w-4 text-blue-600"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
