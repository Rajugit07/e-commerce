import React from "react";
import { Link } from "react-router-dom";

const Order = () => {
    return (
        <div>
            <div className="text-center text-2xl font-semibold mt-10">
                <h1 className="mb-4">This is Order Page</h1>
                <Link to="/" className="px-6 py-2 border mt-2">
                    Back to Home page
                </Link>
            </div>
        </div>
    );
};

export default Order;
