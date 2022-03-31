import { useContext, useState, useEffect } from "react";
import { Card, Button, Container, CardGroup, Row, Col } from "react-bootstrap";
import Rate from "../rate/rate";
import styles from "./LargCardBox.module.scss";
import UserContext from "./../../store/userContext";

const LargCardBox = ({ item, bigCard, fullwidth }) => {
  const userCntx = useContext(UserContext);
  const moneySymbol = userCntx.siteSeting.priceUnitSelect.symbol;
  return (
    <Card
      style={{ width: bigCard ? "100%" : "18rem" }}
      key={item.id}
      className={
        fullwidth ? styles["product-card-larg"] : styles["product-card"]
      }
    >
      <Row className={fullwidth ? styles["body"] : "body-larg"}>
        <Col
          md={4}
          sm={5}
          xs={12}
          className={fullwidth ? styles["body"] : "body-larg"}
          style={{ height: "100%" }}
        >
          <Card.Img
            variant="top"
            className={styles["image"]}
            src={
              item.folder
                ? "/images/" + item.folder + "/" + item.image
                : "/images/products/" + item.image
            }
          />
        </Col>
        <Col
          md={7}
          sm={7}
          xs={12}
          className={!fullwidth ? styles["body"] : "body-larg"}
        >
          <Card.Body>
            <Card.Text className={styles["text"]}>{item.text}</Card.Text>
            <Card.Title className={styles["author"]}>
              <span> {item.title}</span>
            </Card.Title>
          </Card.Body>
          {fullwidth && (
            <Card.Body>
              <Card.Text className={styles["price-block"]}>
                <Rate rate={item.rate} />
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
              <div className={styles["cart-compare-wishlist-row"]}>
                <div className={styles["add-to-cart-row"]}>
                  <div
                    className={styles["add-cart-btn"]}
                    onClick={() => userCntx.addToCartItems({ ...item })}
                  >
                    <a href="#">
                      <span className="plus-icon">+</span>Add to Cart
                    </a>
                  </div>
                </div>
                <div className="compare-wishlist-row ">
                  <a
                    href="#"
                    className={styles["add-link"]}
                    onClick={() => userCntx.addToWishList(item)}
                  >
                    <i className="fas fa-heart"></i>Add to Wish List
                  </a>
                  <a
                    href="#"
                    className={styles["add-link"]}
                    onClick={() => userCntx.addToCompareList(item)}
                  >
                    <i className="fas fa-random"></i>Add to Compare
                  </a>
                </div>
              </div>
            </Card.Body>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default LargCardBox;
