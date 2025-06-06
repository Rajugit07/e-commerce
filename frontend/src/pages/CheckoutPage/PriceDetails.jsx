import React from "react";
import AddressComp from "./AddressComp";
import TotalPrice from "./TotalPrice";
import BuyButton from "./BuyButton";

const PriceDetails = () => {
    return (
        <div className="w-full h-auto">
            <AddressComp />
            <TotalPrice />
            <BuyButton />
        </div>
    );
};

export default PriceDetails;
