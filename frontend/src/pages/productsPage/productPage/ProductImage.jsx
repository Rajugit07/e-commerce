import React, { useState } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { useSelector } from "react-redux";

const ProductImage = () => {
    const currentProduct = useSelector(
        (state) => state.productReducer.currProduct
    );
    const [activeIndex, setActiveIndex] = useState(0); // Initialize activeIndex this.state.

    return (
        <div className="h-[500px] md:w-1/2 flex flex-col items-center w-full">
            {/* Main image */}
            <div className="w-full aspect-square relative rounded-2xl overflow-hidden flex">
                {/* Left thumbnail strip */}
                <div className="w-[30%] h-full bg-zinc-50 p-2 flex flex-col gap-2 overflow-y-auto">
                    {currentProduct.image.map((img, idx) => (
                        <button
                            key={img.url}
                            onClick={() => setActiveIndex(idx)}
                            className={`w-full aspect-square rounded-md overflow-hidden transition-all duration-200
                  ${
                      activeIndex === idx
                          ? " ring-1 ring-zinc-700"
                          : "border-zinc-200 hover:border-zinc-400"
                  }`}
                        >
                            <img
                                src={img.url}
                                alt={`thumb-${idx}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* Right main image */}
                <div className="w-[70%] h-full">
                    <img
                        src={currentProduct.image[activeIndex].url}
                        alt={currentProduct?.title || "product"}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Arrow controls */}
            <div className="flex items-center justify-center gap-8 mt-4">
                <button
                    onClick={() =>
                        setActiveIndex(
                            (prev) =>
                                (prev - 1 + currentProduct.image.length) %
                                currentProduct.image.length
                        )
                    }
                    className="p-2 rounded-full hover:bg-zinc-100 active:bg-zinc-200 transition-colors"
                >
                    <IoMdArrowDropleft className="text-3xl text-zinc-600" />
                </button>

                <span className="text-xs sm:text-sm md:text-base font-medium text-zinc-500">
                    {activeIndex + 1} / {currentProduct.image.length}
                </span>

                <button
                    onClick={() =>
                        setActiveIndex(
                            (prev) => (prev + 1) % currentProduct.image.length
                        )
                    }
                    className="p-2 rounded-full hover:bg-zinc-100 active:bg-zinc-200 transition-colors"
                >
                    <IoMdArrowDropright className="text-3xl text-zinc-600" />
                </button>
            </div>
        </div>
    );
};

export default ProductImage;
