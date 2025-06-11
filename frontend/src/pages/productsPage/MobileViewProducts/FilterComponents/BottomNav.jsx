import React from "react";

const BottomNav = ({onClose}) => {

    return (
        <div className="w-full h-14 bg-white flex items-center justify-between border-t border-zinc-200 px-4">
            <button className="uppercase text-md semibold text-zinc-700" onClick={onClose}>Close</button>
            <button className="uppercase text-md semibold text-zinc-700">Apply</button>
        </div>
    );
};

export default BottomNav;
