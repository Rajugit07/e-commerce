import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { pinCodeApi } from "../../api/pinCodeApi";

const AddressComp = () => {
    const [open, setIsOpen] = useState(false);
    const [pinCode, setIsPinCode] = useState("");
    const [data, setData] = useState("");

    const handlePinCode = async (pincode) => {
        try {
            const data = await pinCodeApi(pincode);
            setData(data[0].PostOffice[0]);
        } catch (error) {
            throw error.response?.data || { message: "Something went wrong" };
        }
    };

    const handleSubmit = () => {
        handlePinCode(pinCode);
        setIsOpen(false);
    };

    return (
        <>
            <div className="w-full flex px-4 items-center border border-zinc-300 rounded-md bg-white">
                <div className="w-full h-14 flex items-center rounded-md gap-2">
                    <SlLocationPin className="text-md mt-0.5" />
                    <div className="flex gap-2">
                        <p className="text-lg text-zinc-700"> Deliver to:</p>
                        <p className="text-lg font-semibold">
                            {pinCode ? pinCode : "766001"}
                        </p>
                        <p className="text-center"> {data.Division}</p>
                    </div>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-md font-semibold text-[#3493ca] cursor-pointer"
                >
                    Change
                </button>
            </div>
            {open && (
                <div className="bg-white border border-zinc-200 rounded-md shadow-xl w-107 mt-2 h-40 absolute flex flex-col p-4 gap-3">
                    <input
                        type="text"
                        pattern="\d{6}"
                        placeholder="Enter pincode"
                        className="border border-zinc-200 p-2 rounded-md"
                        value={pinCode}
                        onChange={(e) =>
                            setIsPinCode(
                                e.target.value
                                    .replace(/[^0-9]/g, "")
                                    .slice(0, 6)
                            )
                        }
                    />
                    <button
                        className="w-full bg-green-500 p-2 text-white rounded-md cursor-pointer font-semibold"
                        onClick={handleSubmit}
                    >
                        Click
                    </button>
                </div>
            )}
        </>
    );
};

export default AddressComp;
