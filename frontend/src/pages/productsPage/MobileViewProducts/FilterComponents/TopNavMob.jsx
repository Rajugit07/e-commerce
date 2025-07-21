import React from "react";

const TopNavMob = () => {
    return (
        <div className="bg-white w-full h-14 flex items-center justify-between px-4 border border-zinc-200">
             <button className="uppercase text-md text-zinc-700 font-semibold">Filters</button>
             <button className="hidden uppercase text-md text-zinc-700 font-semibold">Clear Filters</button>
        </div>
    );
};

export default TopNavMob;
