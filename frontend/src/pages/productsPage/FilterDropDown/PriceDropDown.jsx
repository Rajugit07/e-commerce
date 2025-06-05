// import React, { useState } from "react";

// // const products = [
// //     { name: "Laptop", price: 1200 },
// //     { name: "Phone", price: 800 },
// //     { name: "Tablet", price: 500 },
// //     { name: "Monitor", price: 300 },
// //     { name: "Mouse", price: 50 },
// // ];

// const priceFilters = [
//     { label: "All Prices", value: "all" },
//     { label: "Under 300", value: "under-300" },
//     { label: "Under 600", value: "under-600" },
//     { label: "Over 1000", value: "over-1000" },
// ];

// const PriceDropDown = () => {
//     const [selectedFilter, setSelectedFilter] = useState("all");

//     // const filteredProducts = products.filter((product) => {
//     //     if (selectedFilter === "under-500") return product.price < 500;
//     //     if (selectedFilter === "500-1000")
//     //         return product.price >= 500 && product.price <= 1000;
//     //     if (selectedFilter === "over-1000") return product.price > 1000;
//     //     return true; // 'all'
//     // });

//     return (
//         <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded shadow">
//             <h1 className="text-xl font-bold mb-4">Product Prices</h1>

//             {/* Dropdown */}
//             <div className="mb-4">
//                 <select
//                     className="w-full px-4 py-2 border border-zinc-200 rounded text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     value={selectedFilter}
//                     onChange={(e) => setSelectedFilter(e.target.value)}
//                 >
//                     {priceFilters.map((filter) => (
//                         <option key={filter.value} value={filter.value}>
//                             {filter.label}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//         </div>
//     );
// };

// export default PriceDropDown;

import React, { useState } from "react";

const priceFilters = [
    { label: "All Prices", value: "all" },
    { label: "Under ₹300", value: "under-300" },
    { label: "Under ₹600", value: "under-600" },
    { label: "Over ₹1000", value: "over-1000" },
];

const PriceDropDown = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [open, setOpen] = useState(false);

    const selectedLabel =
        priceFilters.find((f) => f.value === selectedFilter)?.label ||
        "All Prices";

    const handleSelect = (value) => {
        setSelectedFilter(value);
        setOpen(false);
    };

    return (
        <div className="relative inline-block w-full text-left max-w-md mx-auto mt-4 p-6 bg-white rounded shadow">
            <h1 className="text-xl font-bold mb-4">Product Prices</h1>

            <button
                onClick={() => setOpen(!open)}
                className="w-full border border-zinc-200 rounded px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
                {selectedLabel}
                <span className="float-right ml-2">&#9662;</span>
            </button>

            {open && (
                <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul className="py-1 text-sm text-gray-700 max-h-60 overflow-y-auto">
                        {priceFilters.map((filter) => (
                            <li
                                key={filter.value}
                                onClick={() => handleSelect(filter.value)}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                            >
                                {filter.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PriceDropDown;
    