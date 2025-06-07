import React from "react";
import AddressComp from "./AddressComp";
import TotalPrice from "./TotalPrice";
import BuyButton from "./BuyButton";

const PriceDetails = () => {
    return (
        <div className="w-full h-auto">
            <div className="max-sm:hidden">
                <AddressComp />
            </div>
            <TotalPrice />
            <BuyButton />
        </div>
    );
};

export default PriceDetails;
