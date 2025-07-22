import React, { useState } from "react";
// import { BsSortAlphaDown } from "react-icons/bs";
import { RiArrowLeftRightLine } from "react-icons/ri";
import SortComponent from "./SortComponent";
import FilterComponent from "./FilterComponents/FilterComponent";

const BottomFilterMobile = () => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleCloseFilter = () => {
        setIsFilterOpen(false);
    };

    // const handleSortClick = () => {
    //     setIsSortOpen(true);
    // };

    const handleFilterClick = () => {
        setIsFilterOpen(true);
    };

    return (
        <>
            <div className="sm:hidden px-5 py-4 bottom-3 flex items-center justify-around bg-black text-white shadow fixed right-4 rounded-md">
                {/* Sort Button */}
                {/* <button
                    className="flex items-center justify-center gap-2 text-zinc-700 hover:text-blue-600 active:scale-95 transition-all cursor-pointer"
                    onClick={handleSortClick}
                >
                    <BsSortAlphaDown className="text-xl" />
                    <span className="text-xl font-medium mt-1 uppercase text-center">
                        Sort
                    </span>
                </button> */}

                {/* Filter Button */}
                <button
                    className="flex items-center justify-center gap-2 text-white text-sm font-medium uppercase"
                    onClick={handleFilterClick}
                >
                    <RiArrowLeftRightLine className="text-base" />
                    <span className="leading-none">Filter</span>
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
