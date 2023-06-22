import './App.css'
import Nav from "./components/Nav.tsx";
import Gallery from "./components/Gallery.tsx";
import SearchBar from "./components/SearchBar.tsx";
import {useState} from "react";

function App() {
    const [userInput, setUserInput] = useState("tesla")

  return (
    <>
        <Nav />
        <SearchBar getUserInput={setUserInput} />
        <Gallery userInput={userInput} />

    </>
  )
}

export default App
