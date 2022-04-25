import React from "react";
import { useState } from "react";

export default function SearchBar(props) {
  const [enteredCity, setEnteredCity] = useState("");

  const cityInputHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const cityName = enteredCity;
    // props.onCityChange(cityName);
    setEnteredCity("");
  };
  console.log(props);
  return (
    <div className="mt-6 flex justify-center">
      <form onSubmit={submitHandler}>
        <input
          //onChange={cityInputHandler}
          onChange={(e) => props.setAFunc(e.target.value)}
          className="rounded-md w-96 px-1 h-8"
          type="text"
          //   value={enteredCity}
        />{" "}
        <button type="submit" class="btn ml-3">
          {props.onCityChange}
        </button>
      </form>
    </div>
  );
}
