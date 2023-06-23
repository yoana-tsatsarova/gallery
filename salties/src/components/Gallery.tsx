import "./Gallery.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

type ImageData = {
  urls: {
    small: string;
  };
  alt_description: string;
};

type GalleryProps = {
  userInput: string;
};

const Gallery = ({ userInput }: GalleryProps) => {
  const [res, setRes] = useState<ImageData[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const accessKey = "wWLIeAHU1Jd-qMLOxRXb8vV3gRpK1RWCOfhY6IkXg0E";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${userInput}&client_id=${accessKey}`
        );
        if (!response.ok) {
          throw new Error("Error fetching data from API");
        }
        const data = await response.json();
        console.log(data);
        setRes(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userInput, pageNumber]);

  useEffect(() => {
    setPageNumber(1);
  }, [userInput]);

  const goToPage = (newPage: number) => {
    setPageNumber(newPage);
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      goToPage(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    goToPage(pageNumber + 1);
  };

  return (
    <Container>
      <Row className="mb-3">
        <Col className="d-flex justify-content-center">
          <Button
            variant="primary"
            className="me-2 btn-lg custom-button"
            onClick={goToPreviousPage}
          >
            Previous
          </Button>
          <Button
            variant="primary"
            className="btn-lg custom-button"
            onClick={goToNextPage}
          >
            Next
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {res.map((val, index) => (
          <Col sm={6} md={4} lg={3} className="mb-3" key={index}>
            <div className="image-container d-flex justify-content-center align-items-center">
              <img
                className="img-fluid img-thumbnail"
                src={val.urls.small}
                alt={val.alt_description}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
