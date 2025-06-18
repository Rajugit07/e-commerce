import React from "react";
import Navbar from "../layouts/Navbar/Navbar";
import LandingPage from "../layouts/LandinPage/LandingPage";
import ProductCart from "../components/ProductCart";
// import banner from "../assets/images/banner.jpg";
import Footer from "../layouts/Footer";

const Home = () => {
    // const productSections = [
    //     {
    //         sectionTitle: "Men Section",
    //         items: [
    //             {
    //                 title: "Men's Sneakers",
    //                 description: "Comfort and style combined",
    //                 image: banner,
    //                 link: "/products/mens-sneakers",
    //             },
    //             {
    //                 title: "Men's Formal Shoes",
    //                 description: "Perfect for office or events",
    //                 image: banner,
    //                 link: "/products/mens-formals",
    //             },
    //             {
    //                 title: "Men's Loafers",
    //                 description: "Slip into comfort",
    //                 image: banner,
    //                 link: "/products/mens-loafers",
    //             },
    //             {
    //                 title: "Men's Sandals",
    //                 description: "Cool and casual",
    //                 image: banner,
    //                 link: "/products/mens-sandals",
    //             },
    //         ],
    //     },
    //     {
    //         sectionTitle: "Women Section",
    //         items: [
    //             {
    //                 title: "Evening Gown",
    //                 description: "Graceful and elegant",
    //                 image: banner,
    //                 link: "/products/evening-gown",
    //             },
    //             {
    //                 title: "Casual Dress",
    //                 description: "For everyday comfort",
    //                 image: banner,
    //                 link: "/products/casual-dress",
    //             },
    //             {
    //                 title: "Boys' T-Shirts",
    //                 description: "Fun and colorful designs",
    //                 image: banner,
    //                 link: "/products/boys-tshirts",
    //             },
    //             {
    //                 title: "Girls' Dresses",
    //                 description: "Playful and adorable",
    //                 image: banner,
    //                 link: "/products/girls-dresses",
    //             },
    //         ],
    //     },
    //     {
    //         sectionTitle: "Kids",
    //         items: [
    //             {
    //                 title: "Leather Belt",
    //                 description: "Classic finish",
    //                 image: banner,
    //                 link: "/products/leather-belt",
    //             },
    //             {
    //                 title: "Wrist Watch",
    //                 description: "Bold and stylish",
    //                 image: banner,
    //                 link: "/products/wrist-watch",
    //             },
    //             {
    //                 title: "Wireless Earbuds",
    //                 description: "Crystal-clear sound on the go",
    //                 image: banner,
    //                 link: "/products/wireless-earbuds",
    //             },
    //             {
    //                 title: "Smartwatch",
    //                 description: "Stay connected in style",
    //                 image: banner,
    //                 link: "/products/smartwatch",
    //             },
    //         ],
    //     },
    //     {
    //         sectionTitle: "Beauty",
    //         items: [
    //             {
    //                 title: "Leather Belt",
    //                 description: "Classic finish",
    //                 image: banner,
    //                 link: "/products/leather-belt",
    //             },
    //             {
    //                 title: "Wrist Watch",
    //                 description: "Bold and stylish",
    //                 image: banner,
    //                 link: "/products/wrist-watch",
    //             },
    //             {
    //                 title: "Wireless Earbuds",
    //                 description: "Crystal-clear sound on the go",
    //                 image: banner,
    //                 link: "/products/wireless-earbuds",
    //             },
    //             {
    //                 title: "Smartwatch",
    //                 description: "Stay connected in style",
    //                 image: banner,
    //                 link: "/products/smartwatch",
    //             },
    //         ],
    //     },
    // ];

    return (
        <div>
            <Navbar />
            <LandingPage />
            {/* {productSections.map((section, index) => (
                <ProductCart
                    key={index}
                    sectionTitle={section.sectionTitle}
                    items={section.items}
                />
            ))} */}
            <Footer/>
        </div>
    );
};

export default Home;
