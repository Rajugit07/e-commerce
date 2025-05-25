import React from "react";
import { Link } from "react-router-dom";

const ProfileDropDown = () => {
    return (
        <div className="w-56 sm:w-64 md:w-72 bg-white p-4 shadow-2xl border border-zinc-300 rounded-md">
            <div className="flex flex-col border-b border-zinc-300">
                <h3 className="text-lg sm:text-xl font-semibold">Welcome</h3>
                <p className="text-sm sm:text-base mt-2 mb-2">
                    Access Account and Manage Orders
                </p>
                <button className="bg-black text-white p-2 text-sm sm:text-base rounded-md mb-4 uppercase">
                    <Link to="/login">Login/SignUp</Link>
                </button>
            </div>
            <div>
                <ul className="text-sm sm:text-base">
                    <li className="mt-2">
                        <Link to="/order">Order</Link>
                    </li>
                    <li>
                        <Link to="/wishlist">Wishlist</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileDropDown;
