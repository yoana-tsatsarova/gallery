import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.tsx";
import Nav from "./components/Nav.tsx";
import React, {createContext, useState} from "react";
import Gallery from "./components/Gallery.tsx";
import SearchBar from "./components/SearchBar.tsx";

export const ThemeContext = createContext('/search?query=tesla')
const App = () => {
    const [userInput, setUserInput] = useState("");
    const url = `/search?query=${userInput}`
    return (
        <>
            <Nav/>
            <ThemeContext.Provider value={url}>
                <SearchBar getUserInput={setUserInput}/>
            </ThemeContext.Provider>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path={url} element={<Gallery userInput={userInput}/>}></Route>
            </Routes>

        </>)
};

export default App








