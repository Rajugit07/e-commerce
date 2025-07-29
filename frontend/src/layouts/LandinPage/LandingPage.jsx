import { useState, useEffect } from "react";
import image1 from "../../assets/images/Handbag.png";
import image2 from "../../assets/images/sunglasses.png";

const LandingPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Image data with content
    const imageData = [
        {
            image: image1,
            title: "Luxury Handbags",
            subtitle: "Exquisite Collection",
            description: "Discover our premium handbag collection crafted with finest materials"
        },
        {
            image: image2,
            title: "Designer Sunglasses",
            subtitle: "Style & Protection",
            description: "Premium eyewear that combines fashion with UV protection"
        }
    ];

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(timer);
    }, [imageData.length]);

    return (
        <div className="min-h-screen relative overflow-hidden -mt-22">
            {/* Hero Section */}
            <section className="relative w-full h-screen">
                {/* Main Heading */}
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-8 text-center absolute top-8 md:top-16 w-full z-30 px-4">
                    Premium Collection
                </h1>

                {/* Image Slider Container */}
                <div className="relative w-full h-full">
                    {imageData.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {/* Desktop Layout */}
                            <div className="hidden md:flex w-full h-full">
                                {/* Left Side - Image */}
                                <div className="w-1/2 h-full relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>

                                {/* Right Side - Content */}
                                <div className="w-1/2 h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-12">
                                    <div className="text-center max-w-md">
                                        <h2 className="text-5xl font-bold text-white mb-4">
                                            {item.title}
                                        </h2>
                                        <h3 className="text-2xl text-gray-300 mb-6">
                                            {item.subtitle}
                                        </h3>
                                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                            {item.description}
                                        </p>
                                        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                                            Explore Collection
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Layout */}
                            <div className="md:hidden w-full h-full relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Mobile Overlay */}
                                <div className="absolute inset-0 bg-black/50"></div>

                                {/* Mobile Content */}
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                    <div className="text-center max-w-sm">
                                        <h2 className="text-3xl font-bold text-white mb-3">
                                            {item.title}
                                        </h2>
                                        <h3 className="text-xl text-gray-200 mb-4">
                                            {item.subtitle}
                                        </h3>
                                        <p className="text-base text-gray-300 leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                                            Explore
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
                    {imageData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? 'bg-white scale-125'
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => setCurrentIndex(currentIndex === 0 ? imageData.length - 1 : currentIndex - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-30"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => setCurrentIndex(currentIndex === imageData.length - 1 ? 0 : currentIndex + 1)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 z-30"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Background Animation Elements */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse z-20"></div>
                <div
                    className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-pulse z-20"
                    style={{ animationDelay: "1s" }}
                ></div>
                <div
                    className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse z-20"
                    style={{ animationDelay: "2s" }}
                ></div>
            </section>
        </div>
    );
};

export default LandingPage;
