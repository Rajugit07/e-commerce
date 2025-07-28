import React from "react";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Main Content */}
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-7xl md:text-8xl lg:text-9xl font-thin text-black leading-none tracking-tight">
                            LESS
                        </h1>
                        <h1 className="text-7xl md:text-8xl lg:text-9xl font-thin text-black leading-none tracking-tight -mt-4">
                            NOISE
                        </h1>
                        <div className="flex items-center justify-center mt-6 mb-6">
                            <div className="h-px bg-black w-20"></div>
                            <span className="mx-4 text-sm font-medium text-gray-600">
                                MORE STYLE
                            </span>
                            <div className="h-px bg-black w-20"></div>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                            Curated essentials for the modern minimalist.
                            <br />
                            <span className="font-medium text-black">
                                Evaluate. Elevate. Essential.
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
