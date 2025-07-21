import React from "react";
import TopNavMob from "./TopNavMob";
import BottomNav from "./BottomNav";
import PriceDropDown from "../../FilterDropDown/PriceDropDown";
import ColorDropDown from "../../FilterDropDown/ColorDropDown ";
import SizeDropDown from "../../FilterDropDown/SizeDropDown";

const FilterComponent = ({ onClose }) => {
    return (
        <div className="sm:hidden w-full fixed inset-0 z-[9999] bg-white flex flex-col">
            {/* Top Navigation - Fixed Height */}
            <nav className="flex-shrink-0 h-14 border-b border-gray-200">
                <TopNavMob />
            </nav>

            {/* Main Content Area - Scrollable */}
            <div className="flex-1 overflow-y-auto bg-gray-50">
                <div className="w-full h-full">
                    <div className=" divide-gray-200">
                        <div className="bg-white">
                            <PriceDropDown />
                        </div>
                        <div className="bg-white">
                            <SizeDropDown />
                        </div>
                        <div className="bg-white">
                            <ColorDropDown />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation - Fixed Height */}
            <div className="flex-shrink-0 h-14 border-t border-gray-200 bg-white">
                <BottomNav onClose={onClose} />
            </div>
        </div>
    );
};

export default FilterComponent;
