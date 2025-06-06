import React from "react";
import { Link } from "react-router-dom";

const BuyButton = () => {
    return (
        <div className="mt-6 w-full h-auto">
            <button className="w-full py-2 bg-amber-300 rounded-md text-xl font-semibold cursor-pointer uppercase text-zinc-900 border border-zinc-300">
                <Link to="/payment">Proceed</Link>
            </button>
        </div>
    );
};

export default BuyButton;
