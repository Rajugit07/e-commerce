import React from "react";

const Category = ({ onOpen }) => {
    return (
        <div className="px-4 py-2 font-semibold">
            <button onClick={onOpen}>Category</button>
        </div>
    );
};

export default Category;