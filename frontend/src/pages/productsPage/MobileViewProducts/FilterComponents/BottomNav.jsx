import React from "react";

const BottomNav = ({ onClose }) => {
    return (
        <div className="w-full h-14 bg-white flex items-center justify-around border-t border-zinc-200 px-4">
            <button className="uppercase text-xl semibold text-zinc-700 cursor-pointer">
                Clear
            </button>
            <button
                onClick={onClose}
                className="uppercase text-xl semibold text-zinc-700 cursor-pointer"
            >
                Apply
            </button>
        </div>
    );
};

export default BottomNav;
