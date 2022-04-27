import React from "react";
import sun from "../img/sunny-day.png";

const Header = () => {
    return (
        <div className="text-5xl py-6 bg-[rgb(94, 96, 105)] text-gray-800 flex mt-5">
            <div className="ml-10">
                YourWeatherNow
                <img src={sun} className="inline-block ml-3 h-12" alt="" />
            </div>
        </div>
    );
};

export default Header;
