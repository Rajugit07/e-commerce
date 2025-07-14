import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const ProductImage = ({ items }) => {

    const lastProduct = items[items.length - 1];

    const imageUrl = lastProduct?.image?.[0]?.url;

    return (
        <div className="w-full md:w-1/2 h-[500px] relative">
            <div className="h-full rounded-xl overflow-hidden">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={lastProduct?.title || "product"}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <p>No image available</p>
                )}
            </div>
            <div className="flex items-center justify-center mt-4 gap-16">
                <IoMdArrowDropleft className="text-4xl cursor-pointer text-zinc-500 hover:text-zinc-700" />
                <IoMdArrowDropright className="text-4xl cursor-pointer text-zinc-500 hover:text-zinc-700" />
            </div>
        </div>
    );
};

export default ProductImage;
