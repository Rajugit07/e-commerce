// import React from "react";
// import Cart from "./Cart";

// const ProductCart = () => {
//     return (
//         <div className="">
//             <h1 className="ml-6 mt-10 text-2xl font-semibold text-zinc-700">Men Section</h1>
//             <Cart />
//         </div>
//     );
// };
// export default ProductCart;


import React from "react";
import Cart from "./Cart";

const ProductCart = ({ sectionTitle, items }) => {
    return (
        <div>
            <h1 className="ml-6 mt-10 text-2xl font-semibold text-zinc-700">{sectionTitle}</h1>
            <Cart items={items} />
        </div>
    );
};

export default ProductCart;
