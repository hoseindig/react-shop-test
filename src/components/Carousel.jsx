import { Carousel } from "react-bootstrap";
import styles from "./Carousel.module.scss";
const CarouselBox = ({ carousels }) => {
  console.log("CarouselBox", carousels);
  return (
    <Carousel className={styles.box}>
      {carousels.map((item) => {
        return (
          <Carousel.Item key={item.img} interval={item.interval}>
            <img
              className={"d-block w-100 " + styles.Image}
              src={"images/slide/" + item.image}
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
