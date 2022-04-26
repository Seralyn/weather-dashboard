import React from "react";
import axios from "axios";
import { useState } from "react";

const Body = (props) => {
    const [weatherData, setWeatherData] = useState("");

    const baseURL =
        "https://api.weatherapi.com/v1/current.json?key=a19d19d5317a40198b762206222204&q=" +
        props.cityName +
        "&aqi=no";

    if (props.cityName) {
        axios.get(baseURL).then((resp) => {
            setWeatherData(resp.data);
        });
    }

    return (
        <div className="mt-8 flex flex-wrap gap-6 justify-evenly text-white px-5">
            <div className="card">
                <div className="text-2xl">Country:</div>
                <div className="text-xl" id="dataOutputCountry">
                    {weatherData && weatherData.location.country}
                </div>
            </div>

            <div className="card">
                <div className="text-2xl">Region:</div>
                <div className="text-xl" id="dataOutputCity">
                    {weatherData && weatherData.location.name}
                </div>
            </div>

            <div className="card">
                <div className="text-2xl">Current Conditions:</div>
                <div className="text-xl" id="dataOutputCondition">
                    {weatherData && weatherData.current.condition.text}
                </div>
            </div>

            <div className="card">
                <div className="text-2xl">Temperature:</div>
                <div className="text-xl" id="dataOutputTemp">
                    {weatherData && weatherData.current.temp_c} degrees
                </div>
            </div>

            <div className="card">
                <div className="text-2xl">Humidity:</div>
                <div className="text-xl" id="dataOutputHumidity">
                    {weatherData && weatherData.current.humidity} %
                </div>
            </div>

            <div className="card">
                <div className="text-2xl">Wind Speed:</div>
                <div className="text-xl" id="dataOutputWindSPD">
                    {weatherData && weatherData.current.wind_kph} kph
                </div>
            </div>

            <div className="card">
                <div className="text-2xl">Wind Direction:</div>
                <div className="text-xl" id="dataOutputWindDIR">
                    {weatherData && weatherData.current.wind_dir}
                </div>
            </div>

            <div className="card">
                <div className="text-2xl">Barometric Pressure:</div>
                <div className="text-xl" id="dataOutputBarPress">
                    {weatherData && weatherData.current.pressuer_mb} mb
                </div>
            </div>

            <div className="card">
                <div className="text-2xl">Visibility:</div>
                <div className="text-xl" id="dataOutputVisibility">
                    {weatherData && weatherData.current.vis_km} km
                </div>
            </div>

            <div className="card">
                <div className="text-2xl">Cloud Cover:</div>
                <div className="text-xl" id="dataOutputCloudCover">
                    {weatherData && weatherData.current.cloud} %
                </div>
            </div>
        </div>
    );
};

export default Body;
