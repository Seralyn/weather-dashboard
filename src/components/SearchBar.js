import React from "react";
import { useState } from "react";

export default function SearchBar(props) {
    const [enteredCity, setEnteredCity] = useState("");

    const cityInputHandler = (event) => {
        setEnteredCity(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.setCityName(enteredCity);
        setEnteredCity("");
    };

    return (
        <div className="mt-6 flex justify-center">
            <form onSubmit={submitHandler}>
                <input
                    className="rounded-md w-96 px-1 h-8"
                    type="text"
                    onChange={cityInputHandler}
                    value={enteredCity}
                />
                <button type="submit" value="Submit" className="btn ml-3">
                    Submit
                </button>
            </form>
        </div>
    );
}
