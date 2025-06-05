import React from "react";
import banner from "../../../assets/images/banner.jpg";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const ProductImage = () => {
    return (
        <div className="w-full md:w-1/2 h-[500px] relative">
            <div className="h-full rounded-xl overflow-hidden">
                <img
                    src={banner}
                    alt="product"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex items-center justify-center mt-4 gap-16">
                <IoMdArrowDropleft className="text-4xl cursor-pointer text-zinc-500 hover:text-zinc-700" />
                <IoMdArrowDropright className="text-4xl cursor-pointer text-zinc-500 hover:text-zinc-700" />
            </div>
        </div>
    );
};

export default ProductImage;
