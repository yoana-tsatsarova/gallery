import {Form,} from "react-bootstrap";
import React, {useRef, useState} from "react";
import Gallery from "./Gallery.tsx";

const SearchBar = () => {
    const inputEl = useRef<HTMLInputElement>(null);
    const [userInput, setUserInput] = useState("tesla")

    const onSubmit = () => {
        console.log(inputEl.current?.value)
       setUserInput(inputEl.current?.value)
    };
    return (
        <>
        <input
            className="col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
            type="text"
            placeholder="Search"
            ref={inputEl}
            //onSubmit={onSubmit}
        />
        <button onClick={onSubmit}>Search</button>
            <Gallery userInput={userInput} />
        </>
    )
}


export default SearchBar
