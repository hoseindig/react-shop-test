import { Card, Button, Container, CardGroup, Row, Col } from "react-bootstrap";
import styles from "./LargCardBox.module.scss";
const LargCardBox = ({ item, bigCard }) => {
  return (
    <Card
      style={{ width: bigCard ? "100%" : "18rem" }}
      key={item.id}
      className={styles["product-card"]}
    >
      <Row>
        <Col md={4} sm={5} xs={12}>
          <Card.Img
            variant="top"
            className={styles["image"]}
            src={
              item.folder
                ? "images/" + item.folder + "/" + item.image
                : "images/products/" + item.image
            }
          />
        </Col>
        <Col md={7} sm={7} xs={12} className={styles["body"]}>
          <Card.Body>
            <Card.Text className={styles["text"]}>
              <p>{item.text}</p>
            </Card.Text>
            <Card.Title className={styles["author"]}>
              <span> {item.title}</span>
            </Card.Title>
          </Card.Body>
          {/* <Card.Body>
            <Card.Text className={styles["price-block"]}>
              <span className={styles["price"]}>£51.20</span>
              <del className={styles["price-old"]}>£51.20</del>
              <span className={styles["price-discount"]}>20%</span>
            </Card.Text>
          </Card.Body> */}
        </Col>
      </Row>
    </Card>
  );
};

export default LargCardBox;
