import React from "react";
import { SlLocationPin } from "react-icons/sl";

const AddressComp = () => {
    return (
        <div className="w-full flex px-4 items-center border border-zinc-300 rounded-md bg-white">
            <div className="w-full h-14 flex items-center rounded-md gap-2">
                <SlLocationPin className="text-md mt-0.5" />
                <div className="flex gap-2">
                    <p className="text-lg text-zinc-700"> Deliver to:</p>
                    <p className="text-lg font-semibold">766001</p>
                </div>
            </div>
            <button className="text-md font-semibold text-[#3493ca] cursor-pointer">
                Change
            </button>
        </div>
    );
};

export default AddressComp;
