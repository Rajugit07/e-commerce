import React from "react";
import banner from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="w-full h-screen px-5 mb-4 max-sm:px-2 flex items-center justify-center bg-zinc-50 ">
            <div className="relative w-full h-[90vh] max-w-8xl bg-white border border-zinc-100 shadow rounded-2xl overflow-hidden max-sm:mt-5">
                {/* Hero Image */}
                <img
                    src={banner}
                    alt="Banner showcasing minimalist fashion"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Overlay for better readability */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-center text-center p-6 h-full">
                    <h1 className="text-5xl max-sm:text-3xl font-bold text-white drop-shadow-md">
                        Less Noise. More Style.
                    </h1>
                    <p className="text-2xl max-sm:text-lg font-medium text-white mt-3 drop-shadow-sm">
                        Evaluate Essentials.
                    </p>

                    <Link to="/" className="mt-6">
                        <button className="text-sm md:text-base bg-gradient-to-r from-zinc-800 to-zinc-600 px-6 py-3 rounded-full font-semibold text-white shadow-md hover:scale-105 hover:shadow-lg active:scale-100 transition-transform duration-200 ease-in-out cursor-pointer">
                            Explore More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
