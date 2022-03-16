import { Carousel } from "react-bootstrap";
import styles from "./Carousel.module.scss";
const CarouselBox = () => {
  const images = [
    {
      img: "2.jpg",
      alt: "First slide",
      interval: 1000,
      Caption: (
        <div>
          <h3>2 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      ),
    },
    {
      img: "3.jpg",
      alt: "First slide",
      interval: 1000,
      Caption: (
        <div>
          <h3>3 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      ),
    },
    {
      img: "4.jpg",
      alt: "First slide",
      interval: 1000,
      Caption: (
        <div>
          <h3>4 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      ),
    },
    {
      img: "5.jpg",
      alt: "First slide",
      interval: 1000,
      Caption: (
        <div>
          <h3>5 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      ),
    },
    {
      img: "7.jpg",
      alt: "First slide",
      interval: 1000,
      Caption: (
        <div>
          <h3>7 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      ),
    },
  ];
  return (
    <Carousel>
      {images.map((item) => {
        return (
          <Carousel.Item key={item.img} interval={item.interval}>
            <img
              className="d-block w-100"
              src={"images/slide/" + item.img}
              alt={item.alt}
            />
            <Carousel.Caption className={styles["myCaption"]}>
              {item.Caption}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}

      {/* <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="images/slide/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="images/slide/2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide/3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default CarouselBox;
