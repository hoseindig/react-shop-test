import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./CarouselImage.module.scss";
const CarouselImage = ({ images, centerMode }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.CarouselImage}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        showDots={true}
        infinite={true}
        dotListClass="custom-dot-list-style"
        centerMode={centerMode ? true : false}
      >
        {images.map((item) => {
          return (
            <div key={item} className={styles.CarouselImage}>
              <img src={"/images/products/" + item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselImage;
