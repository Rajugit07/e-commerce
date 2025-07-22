import React from "react";

const BottomNav = ({ onClose }) => {
    return (
        <div className="w-full h-14 text-white bg-black flex items-center justify-around border-t px-4">
            <button onClick={onClose} className="uppercase text-lg">
                Apply
            </button>
        </div>
    );
};

export default BottomNav;
