import React, { useState } from "react";
import { BsSortAlphaDown } from "react-icons/bs";
import { LuFilter } from "react-icons/lu";
import SortComponent from "./SortComponent";
import FilterComponent from "./FilterComponents/FilterComponent";

const BottomFilterMobile = () => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleCloseFilter = () => {
        setIsFilterOpen(false);
    };

    const handleSortClick = () => {
        setIsSortOpen(true);
    };

    const handleFilterClick = () => {
        setIsFilterOpen(true);
    };

    return (
        <>
            <div className="sm:hidden w-full h-16 fixed bottom-0 left-1/2 -translate-x-1/2 px-4 flex items-center justify-around border border-zinc-200 bg-white shadow">
                {/* Sort Button */}
                <button
                    className="flex items-center justify-center gap-2 text-zinc-700 hover:text-blue-600 active:scale-95 transition-all cursor-pointer"
                    onClick={handleSortClick}
                >
                    <BsSortAlphaDown className="text-xl" />
                    <span className="text-xl font-medium mt-1 uppercase text-center">
                        Sort
                    </span>
                </button>

                {/* Filter Button */}
                <button
                    className="flex items-center justify-center gap-2 text-zinc-700 hover:text-blue-600 active:scale-95 transition-all cursor-pointer"
                    onClick={handleFilterClick}
                >
                    <LuFilter className="text-xl" />
                    <span className="text-xl font-medium mt-1 uppercase text-center">
                        Filter
                    </span>
                </button>
            </div>

            {/* Conditional Component Render */}
            {isSortOpen && (
                <SortComponent onClose={() => setIsSortOpen(false)} />
            )}

            {isFilterOpen && <FilterComponent onClose={handleCloseFilter} />}
        </>
    );
};

export default BottomFilterMobile;
