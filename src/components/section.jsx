import styles from "./Section.module.scss";
import { Card, Button, Container, CardGroup } from "react-bootstrap";
import CardGroupCarouselBox from "./CardGroupCarousel";
const Section = ({ cards, title, bigCard }) => {
  const responsiveConfig = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
    <div className={styles.box}>
      <div className={styles.header}>
        <h1>{title} </h1>
      </div>
      <Container>
        <CardGroupCarouselBox
          cards={cards}
          bigCard={bigCard}
          responsiveConfig={bigCard ? responsiveConfig : null}
        />
      </Container>
    </div>
  );
};

export default Section;
