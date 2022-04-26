import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
    const [cityName, setCityName] = useState("");

    return (
        <div className="App">
            <Header />
            <SearchBar setCityName={setCityName} />
            <Body cityName={cityName} />
        </div>
    );
}

export default App;
