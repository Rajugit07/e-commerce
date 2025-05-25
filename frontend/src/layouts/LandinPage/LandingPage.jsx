import React from "react";
import banner from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="w-full h-screen px-5 mb-4 max-sm:px-2  ">
            <div className="relative w-full h-full bg-white border border-zinc-100 shadow rounded-2xl max-sm:mt-5">
                <img
                    src={banner}
                    alt="banner"
                    className="w-full h-full object-cover rounded-2xl p-2"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                    <h1 className="text-5xl font-bold text-white">
                        Less Noise. More Style
                    </h1>
                    <p className="text-4xl font-bold text-white mt-2">
                        Evaluate Essential.
                    </p>
                    <button className="text-sm bg-gradient-to-b from-[#363838] to-[#222424] px-3 py-2 mt-4 text-white rounded-md hover:bg-[#191A1A] ">
                        <Link to="/"> Explore More</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
