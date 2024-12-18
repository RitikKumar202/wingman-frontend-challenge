import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { images } from "../utils/ImageUtils";

const Navbar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");

    const tabs = [
        { name: "Summary", icon: images.PieChartIcon, path: "/" },
        { name: "Sales", icon: images.TagIcon, path: "/sales" },
        { name: "Chats", icon: images.NavChatIcon, path: "/chats" },
    ];

    useEffect(() => {
        const currentTab = tabs.find(tab => tab.path === location.pathname);
        if (currentTab) {
            setActiveTab(currentTab.name);
        }
    }, [location.pathname]);

    return (
        <div className="flex gap-3 bg-white py-5 px-5 md:px-10 border-b border-b-[#DCDFE4]">
            {tabs.map((tab) => (
                <Link
                    to={tab.path}
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex gap-2 items-center px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${activeTab === tab.name
                        ? "bg-[#CCFBEF] text-[#212636]"
                        : "text-[#8A94A6]"
                        }`}
                >
                    <img src={tab.icon} alt={tab.name} className="w-4 md:w-5" />
                    {tab.name}
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
