import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ items }) => {
    return (
        <div className="w-full h-auto px-5 mb-5">
            <div className="w-full flex flex-wrap justify-between gap-4 py-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full flex-1 min-w-[250px] h-full rounded-md text-white flex p-3 shadow border bg-white transition-transform hover:scale-105 hover:shadow-lg"
                    >
                        <div className="flex flex-col items-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-76 rounded-lg object-cover"
                            />
                            <h2 className="text-xl font-semibold text-gray-800 mt-3">
                                {item.title}
                            </h2>
                            <p className="text-sm text-gray-500">{item.description}</p>
                            <button className="mt-3 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                <Link to={item.link}>Shop Now</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
