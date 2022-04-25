import React from "react";
import axios from "axios";

const Body = (props) => {
  const baseURL =
    "https://api.weatherapi.com/v1/current.json?key=a19d19d5317a40198b762206222204&q=Tokyo&aqi=no";
  //   const config = {
  //     headers: {
  //       key: a19d19d5317a40198b762206222204,
  //     },
  //   };

  axios.get(baseURL).then((resp) => {
    console.log(resp.data);
    document.querySelector("#dataOutputCountry").textContent =
      resp.data.location.country;
    document.querySelector("#dataOutputCity").textContent =
      resp.data.location.name;
    document.querySelector("#dataOutputCondition").textContent =
      resp.data.current.condition.text;
    document.querySelector("#dataOutputTemp").textContent =
      resp.data.current.temp_c + " degrees";
    document.querySelector("#dataOutputHumidity").textContent =
      resp.data.current.humidity + " %";
    //   BELOW HERE
    document.querySelector("#dataOutputWindSPD").textContent =
      resp.data.current.wind_kph + " kPh";
    document.querySelector("#dataOutputWindDIR").textContent =
      resp.data.current.wind_dir;
    document.querySelector("#dataOutputBarPress").textContent =
      resp.data.current.pressure_mb + " mb";
    document.querySelector("#dataOutputVisibility").textContent =
      resp.data.current.vis_km + " km";
    document.querySelector("#dataOutputCloudCover").textContent =
      resp.data.current.cloud + " %";
  });

  return (
    <div className="mt-8 flex flex-wrap gap-6 justify-evenly text-white">
      <div className="card">
        <div className="text-2xl">Country:</div>
        <div className="text-xl" id="dataOutputCountry"></div>
      </div>

      <div className="card">
        <div className="text-2xl">Region:</div>
        <div className="text-xl" id="dataOutputCity"></div>
      </div>

      <div className="card">
        <div className="text-2xl">Current Conditions:</div>
        <div className="text-xl" id="dataOutputCondition"></div>
      </div>

      <div className="card">
        <div className="text-2xl">Temperature:</div>
        <div className="text-xl" id="dataOutputTemp"></div>
      </div>

      <div className="card">
        <div className="text-2xl">Humidity:</div>
        <div className="text-xl" id="dataOutputHumidity"></div>
      </div>

      <div className="card">
        <div className="text-2xl">Wind Speed:</div>
        <div className="text-xl" id="dataOutputWindSPD"></div>
      </div>

      <div className="card">
        <div className="text-2xl">Wind Direction:</div>
        <div className="text-xl" id="dataOutputWindDIR"></div>
      </div>

      <div className="card">
        <div className="text-2xl">Barometric Pressure:</div>
        <div className="text-xl" id="dataOutputBarPress"></div>
      </div>

      <div className="card">
        <div className="text-2xl">Visibility:</div>
        <div className="text-xl" id="dataOutputVisibility"></div>
      </div>

      <div className="card">
        <div className="text-2xl">Cloud Cover:</div>
        <div className="text-xl" id="dataOutputCloudCover"></div>
      </div>
      <div className="card">
        <div className="text-2xl">Search Bar Value:</div>
        <div className="text-xl" id="dataOutputblank">
          {props.a}
        </div>
      </div>
      {/* BELOW HERE */}
    </div>
  );
};

export default Body;
