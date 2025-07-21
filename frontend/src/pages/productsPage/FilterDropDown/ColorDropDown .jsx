import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColorFilter } from "../../../store/Reducers/productFilterReducer";

const colors = [
    { label: "All Colors", value: "all", color: "transparent" },
    { label: "Red", value: "red", color: "#ef4444" },
    { label: "Blue", value: "blue", color: "#3b82f6" },
    { label: "Black", value: "black", color: "#000000" },
    { label: "White", value: "white", color: "#ffffff" },
    { label: "Green", value: "green", color: "#22c55e" },
    { label: "Yellow", value: "yellow", color: "#eab308" },
    { label: "Pink", value: "pink", color: "#ec4899" },
];

export default function ColorDropDown() {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);

    const selectedColor = useSelector(
        (state) => state.productFilterReducer.selectedColor
    );

    const selectedLabel =
        colors.find((c) => c.value === selectedColor)?.label || "All Colors";

    const selectedColorObj = colors.find((c) => c.value === selectedColor);

    const handleSelect = (color) => {
        dispatch(setColorFilter(color));
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
        <div className="w-full p-4 sm:px-2 sm:py-0 bg-white border-b border-gray-100 last:border-b-0">
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
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                        transition-all duration-200
                        ${
                            open
                                ? "ring-2 ring-blue-500 border-blue-500 bg-blue-50"
                                : ""
                        }
                    `}
                    aria-expanded={open}
                    aria-haspopup="listbox"
                >
                    <div className="flex items-center gap-3">
                        {selectedColorObj &&
                            selectedColorObj.value !== "all" && (
                                <span
                                    className="w-4 h-4 rounded-full border-2 border-gray-300"
                                    style={{
                                        backgroundColor: selectedColorObj.color,
                                    }}
                                />
                            )}
                        <span className="block truncate font-medium">
                            {selectedLabel}
                        </span>
                    </div>

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
                        <div className="py-1 max-h-60 overflow-y-auto hide-scrollbar">
                            {colors.map((color) => (
                                <button
                                    key={color.value}
                                    onClick={() => handleSelect(color.value)}
                                    className={`
                                        w-full flex items-center justify-between
                                        px-4 py-3 text-left text-sm
                                        hover:bg-gray-50 focus:bg-gray-50
                                        focus:outline-none transition-colors duration-150
                                        ${
                                            selectedColor === color.value
                                                ? "bg-blue-50 text-blue-700"
                                                : "text-gray-700"
                                        }
                                    `}
                                    role="option"
                                    aria-selected={
                                        selectedColor === color.value
                                    }
                                >
                                    <div className="flex items-center gap-3">
                                        {color.value !== "all" && (
                                            <span
                                                className={`
                                                    w-4 h-4 rounded-full border-2
                                                    ${
                                                        color.value === "white"
                                                            ? "border-gray-300"
                                                            : "border-gray-200"
                                                    }
                                                `}
                                                style={{
                                                    backgroundColor:
                                                        color.color,
                                                }}
                                            />
                                        )}
                                        <span className="font-medium">
                                            {color.label}
                                        </span>
                                    </div>

                                    {selectedColor === color.value && (
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
