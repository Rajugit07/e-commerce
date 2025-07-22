import React from "react";

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-gray-300 px-6 md:px-10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto">
                {/* Newsletter Signup */}
                <div className="grid md:grid-cols-2 gap-8 border-b border-neutral-700 pb-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">
                            Stay Updated
                        </h3>
                        <p className="text-sm text-gray-400">
                            Join our newsletter to get the latest updates, offers, and more.
                        </p>
                    </div>
                    <form className="flex flex-col sm:flex-row gap-4 items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12 text-sm">
                    {/* Shop */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Men</a></li>
                            <li><a href="#" className="hover:text-white">Women</a></li>
                            <li><a href="#" className="hover:text-white">Kids</a></li>
                            <li><a href="#" className="hover:text-white">Sale</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Press</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Help</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Shipping</a></li>
                            <li><a href="#" className="hover:text-white">Returns</a></li>
                            <li><a href="#" className="hover:text-white">Track Order</a></li>
                            <li><a href="#" className="hover:text-white">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Instagram</a></li>
                            <li><a href="#" className="hover:text-white">Twitter</a></li>
                            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-6 border-t border-neutral-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2025 ShopSite. All rights reserved.</p>
                    <div className="space-x-5 mt-3 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
