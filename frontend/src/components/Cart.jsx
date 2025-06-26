import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ items }) => {
    return (
        <div className="w-full overflow-x-auto whitespace-nowrap px-5 mb-5 flex flex-wrap gap-4 py-4">
            {items.map((item) => (
                <div
                    className="min-w-[230px] max-w-[250px] h-[420px] flex flex-col items-center border border-zinc-200 p-2 transition-transform hover:scale-102 hover:shadow-md rounded-md"
                    key={item.productId}
                >
                    <img
                        src={item.image[0]?.url}
                        alt={item.title}
                        className="h-65 w-full rounded-md object-cover"
                    />
                    <h2 className="text-lg font-semibold text-gray-800 mt-3 text-center capitalize">
                        {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 text-center truncate w-full overflow-hidden whitespace-nowrap">
                        {item.description}
                    </p>
                    <h3 className="mt-3">RS: {item.price}</h3>
                    <button className="mt-3 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                        <Link to={`/product/${item._id}`}>Shop Now</Link>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
