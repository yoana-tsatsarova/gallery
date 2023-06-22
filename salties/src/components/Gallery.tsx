import {useEffect, useState} from "react";

type GalleryProps = {
    userInput: string
}

const Gallery = (props: GalleryProps) => {
    const [img, setImg] = useState("");
    const [res, setRes] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const accessKey = "wWLIeAHU1Jd-qMLOxRXb8vV3gRpK1RWCOfhY6IkXg0E"

    useEffect(() => {
        setImg(props.userInput);
        const fetchRequest = async () => {
            const data = await fetch(
                `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${img}&client_id=${accessKey}`
            );
            const dataJ = await data.json();
            const result = dataJ.results;

            setRes(result);
        };

        fetchRequest();
    }, [res, pageNumber])

    const goToPreviousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(previousNumber => previousNumber - 1)
        }
    }

    const goToNextPage = () => {
        setPageNumber(previousNumber => previousNumber + 1)
    }



    return (
        <>
        <button onClick={goToPreviousPage}>Previous</button>
        <button onClick={goToNextPage}>Next</button>
        <div>
            {(res.map((val, index) => {
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
            }))}
        </div>
            </>
    )
};

export default Gallery;
