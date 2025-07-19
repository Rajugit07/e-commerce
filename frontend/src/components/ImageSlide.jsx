import { useState } from "react";

export default function ImageSlide({
    item,
    handleShopNow,
    handleAddToWishlist,
}) {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const handlePrev = () =>
        setCurrentImgIndex((p) => (p === 0 ? item.image.length - 1 : p - 1));
    const handleNext = () =>
        setCurrentImgIndex((p) => (p === item.image.length - 1 ? 0 : p + 1));

    return (
        <article
            className="
        flex flex-col rounded-md border border-zinc-200 bg-white
        transition-transform duration-200 hover:-translate-y-1 cursor-pointer max-w-[280px] min-w-[220px] flex-[1_1_200px]
      "
            onClick={() => handleShopNow(item)}
        >
            {/* IMAGE */}
            <div className="relative w-full aspect-[4/3] group">
                <img
                    src={item.image[currentImgIndex]?.url}
                    alt={item.title}
                    className="w-full h-full rounded-t-md object-cover"
                />

                {item.image.length > 1 && (
                    <>
                        <button
                            aria-label="Previous"
                            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70
                         rounded-full p-1 opacity-0 group-hover:opacity-100 transition cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                            }}
                        >
                            &larr;
                        </button>
                        <button
                            aria-label="Next"
                            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70
                         rounded-full p-1 opacity-0 group-hover:opacity-100 transition cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                        >
                            &rarr;
                        </button>

                        {/* dots */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {item.image.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors
                              ${
                                  i === currentImgIndex
                                      ? "bg-black"
                                      : "bg-white/60"
                              }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* CONTENT */}
            <div className="flex-1 flex flex-col px-3 py-2.5">
                <h2 className="text-base font-semibold text-gray-800 capitalize truncate">
                    {item.title}
                </h2>

                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {item.description}
                </p>

                <div className="mt-auto pt-3 space-y-2">
                    <p className="text-sm font-medium">Rs. {item.price}</p>

                    <button
                        type="button"
                        className="w-full py-1.5 text-sm border border-zinc-300 rounded-md
                       hover:bg-zinc-100 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleAddToWishlist(e, item);
                        }}
                    >
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </article>
    );
}
