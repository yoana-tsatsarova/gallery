import {useContext, useEffect, useRef, useState} from "react";


type SearchBarProps = {
    getUserInput: any;
}
const SearchBar = (props: SearchBarProps) => {
    const inputEl = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("")

    const onSubmit = () => {
        console.log(inputEl.current?.value)
        props.getUserInput(inputEl.current?.value)
        setQuery(inputEl.current?.value)
    };
    return (
        <>
        <input
            className="col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
            type="text"
            placeholder="Search"
            ref={inputEl}
        />
            <button onClick={onSubmit}>Search</button>
        </>
    )
}


export default SearchBar
