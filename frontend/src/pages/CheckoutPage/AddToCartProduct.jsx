// import React from "react";
// import shirt from "../../assets/images/1.jpg";
// import SizeSelector from "../../components/SizeSelector";
// import QtySelector from "../../components/QtySelector";

// const AddToCartProduct = () => {
//     return (
//         <div className="h-screen py-4">
//             <div className="w-full h-65 border border-zinc-300 bg-white rounded-xl flex gap-4 p-2 relative max-sm:h-52">
//                 <img
//                     src={shirt}
//                     alt="shirt"
//                     className="sm:w-2/10 h-full object-cover rounded-md max-sm:w-2/8 max-sm:h-24"
//                 />
//                 <div className="sm:w-8/10 sm:p-4 sm:flex sm:flex-col sm:gap-3 border-zinc-300 sm:h-50 max-sm:w-6/8 max-sm:gap-x-10">
//                     <p className="text-md font-semibold text-zinc-700 max-sm:text-[12px] max-sm:mb-1">
//                         Men's Black Graphic Printed Oversized T-shirt
//                     </p>
//                     <SizeSelector />
//                     <QtySelector />
//                     <div className="flex justify-start gap-5 max-sm:mt-3">
//                         <button className="sm:px-4 sm:py-1 border border-zinc-300 cursor-pointer uppercase rounded-md text-zinc-700 max-sm:text-[12px] max-sm:px-2">
//                             remove
//                         </button>
//                         <button className="px-4 py-1 border border-zinc-300 cursor-pointer uppercase rounded-md text-zinc-700 max-sm:text-[12px] max-sm:px-1">
//                             move to wishlist
//                         </button>
//                     </div>
//                 </div>

//                 <div className="absolute end-5 h-16 py-4 flex flex-col gap-1 max-sm:hidden">
//                     <p className="font-semibold text-zinc-700 ">
//                         Price : <span className="text-[#278e2f]">₹1299</span>
//                     </p>
//                     <p className="font-semibold text-zinc-700 ">
//                         MRP incl. of all taxes
//                     </p>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default AddToCartProduct;

import React from "react";
import SizeSelector from "../../components/SizeSelector";
import QtySelector from "../../components/QtySelector";
import shirt from "../../assets/images/1.jpg";
import { Link } from "react-router-dom";

const AddToCartProduct = () => {
    return (
        <div className="w-full bg-white p-2 border-b border-zinc-200 relative rounded-md shadow">
            <div className="sm:flex sm:items-start sm:gap-8 bg-white">
                {/* left image */}
                <div className="w-auto h-auto">
                    <img
                        src={shirt}
                        alt="product"
                        className="full h-full object-cover rounded-xl"
                    />
                </div>

                {/* right: Product Details */}
                <div className="sm:w-8/10 flex flex-col gap-3 max-sm:gap-2">
                    {/* Product Title */}
                    <p className="text-md font-semibold text-zinc-700 max-sm:text-[13px]">
                        Men's Black Graphic Printed Oversized T-shirt
                    </p>

                    {/* Size Selector */}
                    <SizeSelector />

                    {/* Quantity Selector */}
                    <QtySelector />

                    {/* Price (Desktop) */}
                    <div className="hidden sm:flex sm:flex-col">
                        <p className="font-semibold text-zinc-700">
                            Price: <span className="text-[#278e2f]">₹1299</span>
                        </p>
                        <p className="font-semibold text-zinc-500 text-sm">
                            MRP incl. of all taxes
                        </p>
                    </div>

                    {/* Price (Mobile) */}
                    <div className="sm:hidden mt-3">
                        <p className="text-[13px] font-semibold text-zinc-700">
                            Price: <span className="text-[#278e2f]">₹1299</span>
                        </p>
                        <p className="text-[11px] text-zinc-600">
                            MRP incl. of all taxes
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-start gap-4 max-sm:mt-3 mt-1">
                        <button className="px-4 py-2 border border-zinc-300 uppercase rounded-md text-center text-sm max-sm:text-[11px] max-sm:px-2 bg-zinc-900 text-white cursor-pointer">
                            Remove
                        </button>
                        <button className="px-4 py-2 border border-zinc-300 uppercase rounded-md bg-[#ff3f6c] text-white text-sm max-sm:text-[11px] max-sm:px-2 cursor-pointer">
                            Move to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCartProduct;
