import { Card, Button, Container, CardGroup, Carousel } from "react-bootstrap";
import styles from "./CardGroupBox.module.scss";
const CardGroupBox = ({ cards }) => {
  return (
    <CardGroup>
      {cards.map((item) => {
        return (
          <Card
            style={{ width: "18rem" }}
            key={item.id}
            className={styles["product-card"]}
          >
            <Card.Body>
              <Card.Title className={styles["author"]}>{item.title}</Card.Title>
              <Card.Text>
                <h3>{item.text}</h3>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
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
        );
      })}
    </CardGroup>
  );
};

export default CardGroupBox;
