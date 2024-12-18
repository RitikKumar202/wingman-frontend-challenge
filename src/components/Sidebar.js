import React from "react";
import { Link } from "react-router-dom";
import { images } from "../utils/ImageUtils";

const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen w-[60px] bg-[#115E56] items-center justify-between py-5">
            <div className="flex flex-col gap-9 items-center justify-center">
                <div className="w-9 border-b border-b-[#134E48] pb-9 flex items-center justify-center">
                    <img
                        src={images.Logo}
                        alt="Logo"
                    />
                </div>

                <div className="flex flex-col gap-4 items-center justify-center">
                    <Link
                        to="/"
                        className="w-9 h-9 rounded-lg bg-[#ffff] flex items-center justify-center"
                    >
                        <img
                            src={images.HomeIcon}
                            alt="Home Icon"
                            className="w-5"
                        />
                    </Link>

                    <Link
                        to="/chats"
                        className="hover:bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center"
                    >
                        <img
                            src={images.ChatsIcon}
                            alt="Chats Icon"
                            className="w-5"
                        />
                    </Link>

                    <Link
                        to="/groups"
                        className="hover:bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center"
                    >
                        <img
                            src={images.GroupIcon}
                            alt="Group Icon"
                            className="w-5"
                        />
                    </Link>
                </div>
            </div>

            <Link
                to="/settings"
                className="hover:bg-white/10 h-9 w-9 rounded-lg flex items-center justify-center"
            >
                <img
                    src={images.SettingIcon}
                    alt="Settings Icon"
                    className="w-5"
                />
            </Link>
        </div>
    );
};

export default Sidebar;
