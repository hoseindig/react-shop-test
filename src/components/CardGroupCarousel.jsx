import { Card, Button, Container, CardGroup } from "react-bootstrap";
import styles from "./CardGroupBox.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CardCarousel from "./CardCarousel/";
import LargCardBoxForUserOpinion from "./LargCardBox";
// https://www.npmjs.com/package/react-multi-carousel
// https://www.npmjs.com/package/springstech-react-multi-carousel
const CardGroupCarouselBox = ({
  cards,
  bigCard,
  responsiveConfig,
  centerMode,
}) => {
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
    <div>
      <Carousel
        responsive={responsiveConfig ? responsiveConfig : responsive}
        autoPlay={true}
        autoPlaySpeed={5000000}
        showDots={true}
        infinite={true}
        dotListClass="custom-dot-list-style"
        centerMode={centerMode ? true : false}
      >
        {cards.map((item) => {
          return (
            <div key={item.id}>
              {bigCard ? (
                <LargCardBoxForUserOpinion item={item} bigCard={bigCard} />
              ) : (
                <CardCarousel item={item} bigCard={bigCard} />
              )}
            </div>
          );
        })}
      </Carousel>
    </div>
    /*
    <CardGroup>
      <Carousel responsive={responsive}>
        {cards.map((item) => {
          return (
            <div key={item.id}>
                Item {item.id}
              <Card
                style={{ width: "18rem" }}
                key={item.id}
                className={styles["product-card"]}
              >
                <Card.Body>
                  <Card.Title className={styles["author"]}>
                    {item.title}
                  </Card.Title>
                  <Card.Text>
                    <h3>{item.text}</h3>
                  </Card.Text>
                
                </Card.Body>
                <Card.Img variant="top" src={"images/products/" + item.img} />
                <Card.Body>
                  <Card.Text className={styles["price-block"]}>
                    <span className={styles["price"]}>£51.20</span>
                    <del className={styles["price-old"]}>£51.20</del>
                    <span className={styles["price-discount"]}>20%</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </CardGroup>
    */
  );
};

export default CardGroupCarouselBox;
