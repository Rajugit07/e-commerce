import React, { useState } from "react";
import { BsSortAlphaDown } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import SortComponent from "./SortComponent";
import FilterComponent from "./FilterComponents/FilterComponent";

const BottomFilterMobile = () => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleSortClick = () => {
        setIsSortOpen(true);
    };

    const handleFilterClick = () => {
        setIsFilterOpen(true);
    };

    return (
        <>
            <div className="sm:hidden w-[95%] h-16 fixed bottom-2 left-1/2 -translate-x-1/2 px-4 flex items-center justify-between border border-zinc-300 rounded-md bg-white shadow">
                {/* Sort Button */}
                <button
                    className="flex flex-col items-center justify-center text-zinc-700 hover:text-blue-600 active:scale-95 transition-all"
                    onClick={handleSortClick}
                >
                    <BsSortAlphaDown className="text-xl" />
                    <span className="text-xs font-medium mt-1">Sort</span>
                </button>

                {/* Filter Button */}
                <button
                    className="flex flex-col items-center justify-center text-zinc-700 hover:text-blue-600 active:scale-95 transition-all"
                    onClick={handleFilterClick}
                >
                    <LuFilter className="text-xl" />
                    <span className="text-xs font-medium mt-1">Filter</span>
                </button>
            </div>

            {/* Conditional Component Render */}
            {isSortOpen && (
                <SortComponent onClose={() => setIsSortOpen(false)} />
            )}

            {isFilterOpen && <FilterComponent />}
        </>
    );
};

export default BottomFilterMobile;
