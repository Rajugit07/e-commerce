import { useEffect } from "react";

const sortOptions = [
    { label: "A–Z (Ascending)", value: "az" },
    { label: "Z–A (Descending)", value: "za" },
    { label: "Price (Ascending)", value: "price_asc" },
    { label: "Price (Descending)", value: "price_desc" },
];

const SortComponent = ({ onClose, onSortSelect }) => {
    // Disable scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-end sm:items-center transition-opacity">
            {/* BACKDROP for dismiss on click */}
            <div
                className="absolute inset-0"
                onClick={onClose}
                aria-label="Close Sort Modal"
            />

            <div className="relative w-full max-w-md bg-white rounded-t-xl sm:rounded-xl shadow-xl transform transition-all animate-fade-in-up p-6">
                <div className="w-14 h-1.5 bg-gray-300 rounded-full mx-auto mb-6"></div>

                <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
                    Sort Options
                </h2>

                <ul className="space-y-3">
                    {sortOptions.map((option) => (
                        <li
                            key={option.value}
                            className="text-base p-3 rounded-lg border border-gray-200 hover:bg-gray-100 active:bg-gray-200 cursor-pointer transition"
                            onClick={() => {
                                if (onSortSelect) onSortSelect(option.value);
                                onClose();
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>

                <button
                    className="mt-8 w-full bg-gray-100 text-gray-800 font-medium py-3 rounded-lg hover:bg-gray-200 transition"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default SortComponent;
