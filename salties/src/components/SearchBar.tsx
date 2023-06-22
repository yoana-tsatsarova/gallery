import {useRef} from "react";

type SearchBarProps = {
    getUserInput: any;
}
const SearchBar = (props: SearchBarProps) => {
    const inputEl = useRef<HTMLInputElement>(null);

    const onSubmit = () => {
        console.log(inputEl.current?.value)
        props.getUserInput(inputEl.current?.value)


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
        </>
    )
}


export default SearchBar
