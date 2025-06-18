import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ items }) => {
    return (
        <div className="w-full overflow-x-auto whitespace-nowrap px-5 mb-5 flex flex-wrap gap-4 py-2">
            {/* <div className="flex gap-4"> */}
                {items.map((item) => (
                    <div
                        key={item._id}
                        className="min-w-[250px] max-w-[250px] rounded-md text-white flex flex-col p-3 shadow border border-zinc-200 bg-white transition-transform hover:scale-100 hover:shadow-lg"
                    >
                        <div className="flex flex-col items-center">
                            <img
                                src={item.image[0]?.url}
                                alt={item.title}
                                className="h-45 w-full rounded-lg object-cover"
                            />
                            <h2 className="text-lg font-semibold text-gray-800 mt-3 text-center">
                                {item.title}
                            </h2>
                            <p className="text-sm text-gray-500 mt-1 text-center">
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
                                <Link to={`/product/${item._id}`}>
                                    Shop Now
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        // </div>
    );
};

export default Cart;
