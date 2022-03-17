import React, { useContext } from "react";
import { Card, Button, Container, CardGroup, Col, Row } from "react-bootstrap";
import styles from "./ProductsInTowColTab.module.scss";
import UserContext from "../store/userContext";
const ProductsInTowColTab = ({ cards }) => {
  const userCntx = useContext(UserContext);
  const moneySymbol = userCntx.siteSeting.priceUnitSelect.symbol;
  return (
    <div>
      <CardGroup>
        <Row>
          {cards.map((item) => {
            return (
              <Col md={6} key={item.id}>
                <Card key={item.id} className={styles["product-card"]}>
                  <Row>
                    <Col md={6}>
                      <img alt="" src={"images/products/" + item.img} />
                    </Col>
                    <Col md={6}>
                      <Card.Body>
                        <Card.Title className={styles["author"]}>
                          {item.title}
                        </Card.Title>
                        <Card.Text className={styles["card-text"]}>
                          <h4>{item.text}</h4>
                        </Card.Text>
                        <Card.Text className={styles["price-block"]}>
                          <span className={styles["price"]}>
                            {moneySymbol}
                            {item.price}
                          </span>
                          <del className={styles["price-old"]}>
                            {moneySymbol}
                            {item.priceOld}
                          </del>
                          <span className={styles["price-discount"]}>
                            {item.priceDiscount}
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </CardGroup>
    </div>
  );
};

export default ProductsInTowColTab;
