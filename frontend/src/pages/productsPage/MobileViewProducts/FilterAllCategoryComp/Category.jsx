// import React, { useState } from "react";
// import CategoryOption from "./CategoryOption";

// const Category = () => {
//     const [isOpenCategory, setIsOpenCategory] = useState(false);

//     const handleOpenCategory = () => {
//         setIsOpenCategory(true);
//     };

//      const handleCloseCategory = () => {
//         setIsOpenCategory(false);
//     };

//     return (
//         <div className=" px-4 py-2  font-semibold">
//             <button onClick={handleOpenCategory}>Category</button>

//             {isOpenCategory && <CategoryOption   isOpen={isOpenCategory}
//                     onClose={handleCloseCategory}/>}
//         </div>
//     );
// };

// export default Category;


import React from "react";

const Category = ({ onOpen }) => {
    return (
        <div className="px-4 py-2 font-semibold">
            <button onClick={onOpen}>Category</button>
        </div>
    );
};

export default Category;