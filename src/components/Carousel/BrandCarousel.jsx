import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container } from "react-bootstrap";
const BrandCarousel = () => {
  const images = [
    "/images/brandImage/brand-1.jpg",
    "/images/brandImage/brand-2.jpg",
    "/images/brandImage/brand-3.jpg",
    "/images/brandImage/brand-4.jpg",
    "/images/brandImage/brand-5.jpg",
    "/images/brandImage/brand-6.jpg",
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
    <Container>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={10000}
        showDots={false}
        infinite={true}
        dotListClass="custom-dot-list-style"
        centerMode={false}
        arrows={false}
      >
        {images.map((image) => {
          return <img key={image} src={image} alt="" width={200} />;
        })}
      </Carousel>
    </Container>
  );
};

export default BrandCarousel;
