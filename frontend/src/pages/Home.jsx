import React, { useEffect } from "react";
import Navbar from "../layouts/Navbar/Navbar";
import LandingPage from "../layouts/LandinPage/LandingPage";
import Footer from "../layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllProducts } from "../store/Actions/ProductAction/productAction";
import CategoryComp from "./Home_Page_Category/CategoryComp";

const Home = () => {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.productReducer.product);

    useEffect(() => {
        dispatch(asyncGetAllProducts());
    }, [dispatch]);

    // Group products by category (title)
    const groupedProducts = products.reduce((acc, product) => {
        const category = product.title; // title is 'men', 'women', etc.
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    console.log(groupedProducts);

    return (
        <>
            <div>
                <Navbar />
                <LandingPage />

                {Object.entries(groupedProducts).map(
                    ([categoryName, categoryProducts]) => (
                        <CategoryComp
                            key={categoryName}
                            categoryName={categoryName}
                            products={categoryProducts}
                        />
                    )
                )}

                <Footer />
            </div>
        </>
    );
};

export default Home;
