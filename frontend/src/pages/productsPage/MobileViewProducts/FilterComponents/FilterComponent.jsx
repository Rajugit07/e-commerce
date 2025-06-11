// import React from "react";
// import TopNavMob from "./TopNavMob";
// import BottomNav from "./BottomNav";
// import Category from "../FilterAllCategoryComp/Category";
// import CategoryOption from "../FilterAllCategoryComp/CategoryOption";

// const FilterComponent = () => {
//     return (
//         <div className="sm:hidden fixed inset-0 z-[9999] bg-white flex flex-col">
//             {/* TopNav */}
//             <div className="h-14">
//                 <TopNavMob />
//             </div>

//             {/* Middle Content (flex-grow fills the space between top and bottom navs) */}
//             <div className="flex-grow flex w-full h-full">
//                 {/* Left and Right Side by Side */}

//                 {/* left */}
//                 <div className="w-2/5 bg-gray-100 ">
//                     <div className="w-full h-10">
//                         <Category />
//                     </div>
//                     <div className="w-full h-10">
//                         <Category />
//                     </div>
//                     <div className="w-full h-10">
//                         {" "}
//                         <Category />
//                     </div>
//                 </div>
//                 {/* right */}
//                 <div className="w-3/5">
//                     <div className="w-full h-10">
//                         <CategoryOption/>
//                     </div>
//                     <div className="w-full h-10"></div>
//                     <div className="w-full h-10"></div>
//                 </div>
//             </div>

//             {/* BottomNav */}
//             <div className="h-14">
//                 <BottomNav />
//             </div>
//         </div>
//     );
// };

// export default FilterComponent;

import React, { useState } from "react";
import TopNavMob from "./TopNavMob";
import BottomNav from "./BottomNav";
import Category from "../FilterAllCategoryComp/Category";
import CategoryOption from "../FilterAllCategoryComp/CategoryOption";

const FilterComponent = () => {
    const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

    const handleOpenCategory = (idx) => {
        setOpenCategoryIndex(idx);
    };

    const handleCloseCategory = () => {
        setOpenCategoryIndex(null);
    };

    return (
        <div className="sm:hidden fixed inset-0 z-[9999] bg-white flex flex-col">
            <div className="h-14">
                <TopNavMob />
            </div>
            <div className="flex-grow flex w-full h-full">
                <div className="w-2/5 bg-gray-100 ">
                    <div className="w-full h-10">
                        <Category
                            isOpen={openCategoryIndex === 0}
                            onOpen={() => handleOpenCategory(0)}
                        />
                    </div>
                    <div className="w-full h-10">
                        <Category
                            isOpen={openCategoryIndex === 1}
                            onOpen={() => handleOpenCategory(1)}
                        />
                    </div>
                    <div className="w-full h-10">
                        <Category
                            isOpen={openCategoryIndex === 2}
                            onOpen={() => handleOpenCategory(2)}
                        />
                    </div>
                </div>
                <div className="w-3/5">
                    {openCategoryIndex !== null && (
                        <CategoryOption onClose={handleCloseCategory} />
                    )}
                </div>
            </div>
            <div className="h-14">
                <BottomNav />
            </div>
        </div>
    );
};

export default FilterComponent;
