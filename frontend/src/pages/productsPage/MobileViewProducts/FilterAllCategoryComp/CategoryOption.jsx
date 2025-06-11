// import React from "react";

// const CategoryOption = () => {
//     return (
//         <div className="px-4 py-2">
//             <ul className="space-y-2 text-zinc-700 test-sm font-semibold">
//                 <li>Round Nack</li>
//                 <li>Full T-shirt</li>
//             </ul>
//         </div>
//     );
// };

// export default CategoryOption;


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