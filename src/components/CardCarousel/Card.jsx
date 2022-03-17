import { Card, Button, Container, CardGroup } from "react-bootstrap";
import styles from "../CardGroupBox.module.scss";

const CardBox = ({ item, bigCard }) => {
  return (
    <Card
      style={{ width: bigCard ? "100%" : "18rem" }}
      key={item.id}
      className={styles["product-card"]}
    >
      <Card.Body>
        <Card.Title className={styles["author"]}>{item.title}</Card.Title>
        <Card.Text>
          <h3>{item.text}</h3>
        </Card.Text>
      </Card.Body>
      <Card.Img
        variant="top"
        src={
          item.folder
            ? "images/" + item.folder + "/" + item.img
            : "images/products/" + item.img
        }
      />
      <Card.Body>
        <Card.Text className={styles["price-block"]}>
          <span className={styles["price"]}>£51.20</span>
          <del className={styles["price-old"]}>£51.20</del>
          <span className={styles["price-discount"]}>20%</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardBox;
