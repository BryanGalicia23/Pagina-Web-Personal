import { Carousel } from "react-bootstrap";

const CarruselCursos = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/wAis4BSEGpU/maxresdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://goallearn.com/wp-content/uploads/2020/11/codecademy-1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/VF8mioxK4ITX1WKrpan5unhmRjW3la-saLRZdOhot0Fx-p3R4Y5GHnKP5qEHtolpLwo"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarruselCursos;
