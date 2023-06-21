import {useEffect, useState} from "react";
import SearchBar from "./SearchBar.tsx";

const Gallery = () => {
    const [img, setImg] = useState("");
    const [res, setRes] = useState([]);
    const accessKey = "wWLIeAHU1Jd-qMLOxRXb8vV3gRpK1RWCOfhY6IkXg0E"
    const fetchRequest = async () => {
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${accessKey}`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        console.log(result);
        setRes(result);
    };
    useEffect(() => {
        fetchRequest();
    }, [])



    return ( <>
        <SearchBar/>
        <div>
            {res.map((val, index) => {
                return (
                    <>
                        <img
                            className="col-3 img-fluid img-thumbnail"
                            key={index}
                            src={val.urls.small}
                            alt="val.alt_description"

                        />
                    </>
                );
            })}
        </div>
        </>
    )
};

export default Gallery;
