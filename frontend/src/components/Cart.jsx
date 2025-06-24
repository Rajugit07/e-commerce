import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ items }) => {
    return (
        <div className="w-full overflow-x-auto whitespace-nowrap px-5 mb-5 flex flex-wrap gap-4 py-4">
            {items.map((item) => (
                <div
                    className="min-w-[230px] max-w-[250px] flex flex-col items-center border border-zinc-200 p-2 transition-transform hover:scale-102 hover:shadow-md rounded-md"
                    key={item.productId}
                >
                    <img
                        src={item.image[0]?.url}
                        alt={item.title}
                        className="h-45 w-full rounded-md object-cover"
                    />
                    <h2 className="text-lg font-semibold text-gray-800 mt-3 text-center capitalize">
                        {item.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1 text-center truncate w-full overflow-hidden whitespace-nowrap">
                        {item.description}
                    </p>

                    <p className="text-zinc-600 mt-2 font-semibold text-lg">
                        ₹{item.price}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                        Size: {item.size}
                    </p>
                    <p className="text-sm text-gray-500">
                        Color: {item.color.join(", ")}
                    </p>
                    <button className="mt-3 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                        <Link to={`/product/${item._id}`}>Shop Now</Link>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
