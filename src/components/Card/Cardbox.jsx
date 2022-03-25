import { Card, Button, Container, CardGroup, Col, Row } from "react-bootstrap";
import styles from "../ProductsInTowColTab.module.scss";

import React, { useContext } from "react";
import UserContext from "../../store/userContext";
const CardBox = ({ item, moneySymbol }) => {
  const userCntx = useContext(UserContext);
  return (
    <Card key={item.id} className={styles["product-card"]}>
      <Row>
        <Col md={6}>
          <img alt="" src={"images/products/" + item.image} />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title className={styles["author"]}>{item.title}</Card.Title>
            <Card.Text className={styles["card-text"]}>{item.text}</Card.Text>
            <i
              title={moneySymbol + item.price}
              className="fa fa-shopping-cart"
              aria-hidden="true"
              onClick={() => userCntx.addToCartItems(item)}
            ></i>
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
  );
};

export default CardBox;
