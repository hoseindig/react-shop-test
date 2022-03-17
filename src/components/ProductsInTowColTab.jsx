import { Card, Button, Container, CardGroup, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import CardGroupBox from "./CardGroupBox";
const ProductsInTowColTab = ({ cards, towRowArray = [], filterBy }) => {
  //   debugger;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        showDots={true}
        infinite={true}
      >
        {towRowArray.map((item) => {
          return <CardGroupBox cards={item.filter((i) => i[filterBy])} />;
        })}
      </Carousel>
    </div>
  );
};

export default ProductsInTowColTab;
