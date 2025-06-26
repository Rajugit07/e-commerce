import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceFilter } from "../../../store/Reducers/productFilterReducer";

const priceFilters = [
    { label: "All Prices", value: "all" },
    { label: "Under ₹300", value: 300 },
    { label: "Under ₹600", value: 600 },
    { label: "Over ₹1000", value:  1000 },
];

const PriceDropDown = () => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const selectedFilter = useSelector(
        (state) => state.productFilterReducer.selectedPrice
    );

    const selectedLabel =
        priceFilters.find((f) => f.value === selectedFilter)?.label ||
        "All Prices";

    const handleSelect = (value) => {
        dispatch(setPriceFilter(value));
        setOpen(false);
    };

    return (
        <div className="relative inline-block w-full text-left max-w-md mx-auto mt-4 p-6 bg-white rounded shadow">
            <h1 className="text-xl font-bold mb-4">Product Prices</h1>

            <button
                onClick={() => setOpen(!open)}
                className="w-full border border-zinc-200 rounded px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
                {selectedLabel}
                <span className="float-right ml-2">&#9662;</span>
            </button>

            {open && (
                <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul className="py-1 text-sm text-gray-700 max-h-60 overflow-y-auto">
                        {priceFilters.map((filter) => (
                            <li
                                key={filter.value}
                                onClick={() => handleSelect(filter.value)}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                            >
                                {filter.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PriceDropDown;
