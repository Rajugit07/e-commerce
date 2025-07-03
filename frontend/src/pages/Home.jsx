import React from "react";
import Navbar from "../layouts/Navbar/Navbar";
import LandingPage from "../layouts/LandinPage/LandingPage";
import Footer from "../layouts/Footer";
import CategoryComp from "./Home_Page_Category/CategoryComp";
import data from "/src/layouts/Navbar/navData.js";
import banner from "../assets/images/banner.jpg";

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <LandingPage />
                <h1 className="px-5 py-6 text-4xl font-semibold uppercase max-sm:text-3xl">Shop By Category</h1>
                {Object.entries(data.dropDownData).map(
                    ([categoryKey, subcategories], idx) => (
                        <CategoryComp
                            key={idx}
                            image={banner}
                            categoryName={categoryKey}
                            subcategories={subcategories}
                            dropDownSubData={
                                // Pass corresponding subData based on category
                                categoryKey === "men"
                                    ? data.dropDownSubDataMan
                                    : categoryKey === "woman"
                                    ? data.dropDownSubDataWomen
                                    : categoryKey === "kids"
                                    ? data.dropDownSubDataKids
                                    : categoryKey === "beauty"
                                    ? data.dropDownSubDataBeauty
                                    : {}
                            }
                        />
                    )
                )}

                <Footer />
            </div>
        </>
    );
};

export default Home;
