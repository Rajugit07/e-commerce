import React from "react";

const CategoryOption = ({ onClose }) => {
    return (
        <div className="w-full space-y-5 px-4 py-2">
            <ul className="space-y-2 text-zinc-700 text-sm font-semibold">
                <li>Round Neck</li>
                <li>Full T-shirt</li>
                <button onClick={onClose}>Close</button>
            </ul>
        </div>
    );
};

export default CategoryOption;