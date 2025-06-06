import React from "react";
import shirt from "../../assets/images/1.jpg";
import SizeSelector from "../../components/SizeSelector";
import QtySelector from "../../components/QtySelector";

const AddToCartProduct = () => {
    return (
        <div className="h-screen py-4">
            <div className="w-full h-65 border border-zinc-300 bg-white rounded-xl flex gap-4 p-2 relative">
                <img src={shirt} alt="shirt" className="w-2/10 h-full object-cover rounded-md" />
                <div className="w-8/10 p-4 flex flex-col gap-3  border-zinc-300 h-50">
                    <p className="text-md font-semibold text-zinc-700">Men's Black Graphic Printed Oversized T-shirt</p>
                    <SizeSelector/>
                    <QtySelector/>
                    <div className="flex justify-end gap-10">
                        <button className="px-4 py-1 border border-zinc-300 cursor-pointer uppercase rounded-md text-zinc-700">remove</button>
                        <button className="px-4 py-1 border border-zinc-300 cursor-pointer uppercase rounded-md text-zinc-700">move to wishlist</button>
                    </div>
                </div>
                <div className="absolute end-5 h-16 py-4 flex flex-col gap-1">
                    <p className="font-semibold text-zinc-700 ">Price : <span className="text-[#278e2f]">₹1299</span></p>
                    <p className="font-semibold text-zinc-700 ">MRP incl. of all taxes</p>
                </div>
            </div>
        </div>
    );
};

export default AddToCartProduct;
