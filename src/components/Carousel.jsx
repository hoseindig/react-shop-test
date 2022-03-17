import { Carousel } from "react-bootstrap";
import styles from "./Carousel.module.scss";
const CarouselBox = () => {
  const carousels = [
    {
      img: "2.jpg",
      alt: "First slide",
      interval: 10000,
      Caption: (
        <div>
          <h3>2 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      ),
    },

    {
      img: "7.jpg",
      alt: "First slide",
      interval: 10000,
      Caption: (
        <div>
          <h3>7 slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      ),
    },
  ];
  return (
    <Carousel className={styles.box}>
      {carousels.map((item) => {
        return (
          <Carousel.Item key={item.img} interval={item.interval}>
            <img
              className={"d-block w-100 "+styles.Image }
              src={"images/slide/" + item.img}
              alt={item.alt}
            />
            <Carousel.Caption className={styles["myCaption"]}>
              {item.Caption}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselBox;
