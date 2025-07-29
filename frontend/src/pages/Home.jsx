import React from "react";
import Navbar from "../layouts/Navbar/Navbar";
import LandingPage from "../layouts/LandinPage/LandingPage";
import Footer from "../layouts/Footer";
import CategoryComp from "./Home_Page_Category/CategoryComp";
import data from "/src/layouts/Navbar/navData.js";
import images from "../assets/images/categoryImage/images.js";

const Home = () => {

    const getCategoryImage = (categoryKey, sub) => {
        const subKey = sub
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/[^a-z]/gi, "");

        let categoryData;

        switch (categoryKey) {
            case "men":
                categoryData = images.dropDownSubDataMan;
                break;
            case "woman":
                categoryData = images.dropDownSubDataWomen;
                break;
            case "kids":
                categoryData = images.dropDownSubDataKids;
                break;
            case "beauty":
                categoryData = images.dropDownSubDataBeauty;
                break;
            default:
                categoryData = null;
        }

        const imageUrl = categoryData?.[subKey]?.[0] || null;

        return imageUrl;
    };

    return (
        <>
            <div className="">
                <Navbar />
                <LandingPage />
                <h1 className="px-5 py-6 text-4xl font-semibold uppercase max-sm:text-3xl">
                    Shop By Category
                </h1>
                {Object.entries(data.dropDownData).map(
                    ([categoryKey, subcategories, productType], idx) => (
                        <CategoryComp
                            key={idx}
                            getCategoryImage={getCategoryImage}
                            categoryName={categoryKey}
                            subcategories={subcategories}
                            productType={productType}
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
