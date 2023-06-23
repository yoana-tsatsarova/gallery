import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [userInput, setUserInput] = useState("new york");

  return (
    <>
      <Nav />
      <SearchBar getUserInput={setUserInput} />
      <Gallery userInput={userInput} />
    </>
  );
};

export default App;
