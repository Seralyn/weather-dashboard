import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [a, setA] = useState("");

  return (
    <div className="App">
      <Header />
      <SearchBar setAFunc={setA} onCityChange="56" />
      <Body a={a} />
    </div>
  );
}

export default App;
