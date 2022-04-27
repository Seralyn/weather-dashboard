import React from "react";
import axios from "axios";
import { useState } from "react";
import sun from "../img/sunny-day.png";
import celsius from "../img/celsius.png";
import cloud from "../img/cloud.png";
import compass from "../img/compass.png";
import gauge from "../img/gauge.png";
import humidity from "../img/humidity.png";
// import rainy from "../img/rainy.png";
// import temperatureGauge from "../img/temperature.png";
import visibility from "../img/visibility.png";
import wind from "../img/wind.png";
import sunrise from "../img/sunrise.png";
import sunset from "../img/sunset.png";
import moonrise from "../img/moonrise.png";
import moonset from "../img/moonset.png";
import moonphase from "../img/moon-phase.png";
import moonlight from "../img/moonlight.png";

const Body = (props) => {
    const [currentWeatherData, setcurrentWeatherData] = useState("");
    const [astroWeatherData, setAstroWeatherData] = useState("");
    const [forecastWeatherData, setForecastWeatherData] = useState("");

    const baseURLCurrent =
        "https://api.weatherapi.com/v1/current.json?key=a19d19d5317a40198b762206222204&q=" +
        props.cityName +
        "&aqi=no";

    const baseURLAstro =
        "https://api.weatherapi.com/v1/astronomy.json?key=a19d19d5317a40198b762206222204&q=" +
        props.cityName;

    const baseURLForecast =
        "https://api.weatherapi.com/v1/forecast.json?key=a19d19d5317a40198b762206222204&q=" +
        props.cityName +
        "&days=5&aqi=no&alerts=no";

    if (props.cityName) {
        axios.get(baseURLCurrent).then((resp) => {
            setcurrentWeatherData(resp.data);
        });
    }

    if (props.cityName) {
        axios.get(baseURLAstro).then((resp) => {
            setAstroWeatherData(resp.data);
        });
    }

    return (
        <div>
            <div className="mt-8 text-black text-xl">
                Showing information for:
                <div className="text-3xl">
                    {currentWeatherData && currentWeatherData.location.name}
                    {" - "}
                    {currentWeatherData && currentWeatherData.location.region}
                    {" - "}
                    {currentWeatherData && currentWeatherData.location.country}
                    {/* {" - "}
                    {currentWeatherData && currentWeatherData.location.localtime} */}
                </div>
            </div>
            <div className="text-black text-4xl mt-12">Current Weather</div>
            <div className="mt-8 flex flex-wrap gap-6 justify-evenly text-black px-32">
                <div className="card">
                    <div>
                        <img src={sun} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Current Conditions:</div>
                    <div className="text-xl" id="dataOutputCondition">
                        {currentWeatherData &&
                            currentWeatherData.current.condition.text}
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img
                            src={celsius}
                            className="h-[4.5rem] mb-[10px]"
                            alt=""
                        />
                    </div>
                    <div className="text-2xl">Temperature:</div>
                    <div className="text-xl" id="dataOutputTemp">
                        {currentWeatherData &&
                            currentWeatherData.current.temp_c}{" "}
                        degrees
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img src={humidity} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Humidity:</div>
                    <div className="text-xl" id="dataOutputHumidity">
                        {currentWeatherData &&
                            currentWeatherData.current.humidity}{" "}
                        %
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img src={wind} className="h-24" alt="" />
                    </div>
                    <div className="text-2xl">Wind Speed:</div>
                    <div className="text-xl" id="dataOutputWindSPD">
                        {currentWeatherData &&
                            currentWeatherData.current.wind_kph}{" "}
                        kph
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img src={compass} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Wind Direction:</div>
                    <div className="text-xl" id="dataOutputWindDIR">
                        {currentWeatherData &&
                            currentWeatherData.current.wind_dir}
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img src={gauge} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Barometric Pressure:</div>
                    <div className="text-xl" id="dataOutputBarPress">
                        {currentWeatherData &&
                            currentWeatherData.current.pressure_mb}{" "}
                        mb
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img src={visibility} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Visibility:</div>
                    <div className="text-xl" id="dataOutputVisibility">
                        {currentWeatherData &&
                            currentWeatherData.current.vis_km}{" "}
                        km
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img src={cloud} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Cloud Cover:</div>
                    <div className="text-xl" id="dataOutputCloudCover">
                        {currentWeatherData && currentWeatherData.current.cloud}{" "}
                        %
                    </div>
                </div>
            </div>
            {/* CURRENT WEATHER END */}

            {/* ASTRONOMICAL START */}
            <div className="text-black text-4xl mt-12">Astronomical</div>
            <div className="mt-8 flex flex-wrap gap-6 justify-evenly text-black px-32">
                <div className="card">
                    <div>
                        <img src={sunrise} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Sunrise:</div>
                    <div className="text-xl" id="dataOutputCloudCover">
                        {astroWeatherData &&
                            astroWeatherData.astronomy.astro.sunrise}{" "}
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={sunset} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Sunset:</div>
                    <div className="text-xl" id="dataOutputCloudCover">
                        {astroWeatherData &&
                            astroWeatherData.astronomy.astro.sunset}{" "}
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={moonrise} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Moonrise:</div>
                    <div className="text-xl" id="dataOutputCloudCover">
                        {astroWeatherData &&
                            astroWeatherData.astronomy.astro.moonrise}{" "}
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={moonset} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Moonset:</div>
                    <div className="text-xl" id="dataOutputCloudCover">
                        {astroWeatherData &&
                            astroWeatherData.astronomy.astro.moonset}{" "}
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={moonphase} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Moon Phase:</div>
                    <div className="text-xl" id="dataOutputCloudCover">
                        {astroWeatherData &&
                            astroWeatherData.astronomy.astro.moon_phase}{" "}
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={moonlight} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Moon Illumination:</div>
                    <div className="text-xl" id="dataOutputCloudCover">
                        {astroWeatherData &&
                            astroWeatherData.astronomy.astro
                                .moon_illumination}{" "}
                        %
                    </div>
                </div>
            </div>
            {/* ASTRONOMICAL END */}

            {/* FORECAST START */}
            <div className="text-black text-4xl mt-12">Forecast</div>
            <div className="mt-8 flex flex-wrap gap-6 justify-evenly text-black px-32">
                <div className="card">
                    <div>
                        <img src={cloud} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Cloud Cover:</div>
                    <div className="text-xl" id="dataOutputCloudCover">
                        {currentWeatherData && currentWeatherData.current.cloud}{" "}
                        %
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={cloud} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Cloud Cover:</div>
                    <div className="text-xl" id="dataOutputCloudCover">
                        {currentWeatherData && currentWeatherData.current.cloud}{" "}
                        %
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={cloud} className="weather-icon" alt="" />
                    </div>
                    <div className="text-2xl">Cloud Cover:</div>
                    <div className="text-xl" id="dataOutputCloudCover">
                        {currentWeatherData && currentWeatherData.current.cloud}{" "}
                        %
                    </div>
                </div>
            </div>
            {/* FORECAST END */}
        </div>
    );
};

export default Body;
