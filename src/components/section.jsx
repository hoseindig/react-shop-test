import styles from "./Section.module.scss";
import { Card, Button, Container, CardGroup } from "react-bootstrap";
import CardGroupCarouselBox from "./CardGroupCarousel";
const Section = ({cards,title}) => {
  
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <h1>{title} </h1>
      </div>
      <Container>
        <CardGroupCarouselBox cards={cards} />
      </Container>
    </div>
  );
};

export default Section;
